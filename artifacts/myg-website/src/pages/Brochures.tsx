import { useListBrochures, getListBrochuresQueryKey, useRequestUploadUrl, useCreateBrochure, useDeleteBrochure } from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, Loader2, Upload, Trash2 } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export function Brochures() {
  const { data: brochures, isLoading } = useListBrochures();
  const queryClient = useQueryClient();
  const { toast } = useToast();
  
  // Admin form state
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const requestUploadUrl = useRequestUploadUrl();
  const createBrochure = useCreateBrochure();
  const deleteBrochure = useDeleteBrochure();

  const handleDelete = async (id: number) => {
    try {
      await deleteBrochure.mutateAsync({ id });
      toast({ title: "Success", description: "Brochure deleted successfully." });
      queryClient.invalidateQueries({ queryKey: getListBrochuresQueryKey() });
    } catch (err: any) {
      toast({ title: "Delete failed", description: err.message, variant: "destructive" });
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !title || !category) {
      toast({ title: "Error", description: "Please fill all required fields and select a file.", variant: "destructive" });
      return;
    }

    setIsUploading(true);
    try {
      // 1. Request URL
      const { uploadURL, objectPath } = await requestUploadUrl.mutateAsync({
        data: {
          name: file.name,
          size: file.size,
          contentType: file.type || "application/pdf"
        }
      });

      // 2. Upload to storage
      const uploadRes = await fetch(uploadURL, {
        method: "PUT",
        headers: { "Content-Type": file.type || "application/pdf" },
        body: file
      });

      if (!uploadRes.ok) throw new Error("Failed to upload file to storage");

      // 3. Create brochure record
      await createBrochure.mutateAsync({
        data: {
          title,
          description,
          category,
          objectPath
        }
      });

      toast({ title: "Success", description: "Brochure published successfully." });
      
      // Reset form & invalidate
      setFile(null);
      setTitle("");
      setDescription("");
      setCategory("");
      queryClient.invalidateQueries({ queryKey: getListBrochuresQueryKey() });

    } catch (err: any) {
      toast({ title: "Upload failed", description: err.message, variant: "destructive" });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      <section className="py-24 bg-primary text-primary-foreground text-center px-4">
        <h1 className="text-5xl font-serif font-bold mb-6 text-accent">Brochures & Resources</h1>
        <p className="text-xl max-w-2xl mx-auto text-primary-foreground/80">
          Download official MYG literature, event guides, and partnership materials.
        </p>
      </section>

      <section className="py-24 container mx-auto px-4 max-w-6xl flex-1">
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : !brochures || brochures.length === 0 ? (
          <div className="text-center py-20 border-2 border-dashed border-border p-12">
            <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-serif font-bold text-primary mb-2">No brochures available</h3>
            <p className="text-muted-foreground">Check back later for downloadable resources.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brochures.map((b) => (
              <Card key={b.id} className="rounded-none border-border hover:border-primary transition-colors flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <FileText className="w-8 h-8 text-accent" />
                    <Badge variant="outline" className="rounded-none font-medium">{b.category}</Badge>
                  </div>
                  <CardTitle className="font-serif text-xl">{b.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-base">{b.description}</CardDescription>
                </CardContent>
                <CardFooter className="pt-6 border-t border-border flex flex-col sm:flex-row gap-2">
                  <Button asChild variant="ghost" className="w-full justify-between rounded-none hover:bg-primary hover:text-primary-foreground group">
                    <a href={`/api/storage/objects/${b.objectPath}`} target="_blank" rel="noopener noreferrer">
                      <span>Download PDF</span>
                      <Download className="w-4 h-4 text-accent group-hover:text-accent" />
                    </a>
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full sm:w-auto text-destructive hover:bg-destructive hover:text-destructive-foreground rounded-none"
                    onClick={() => handleDelete(b.id)}
                    disabled={deleteBrochure.isPending}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </section>

      {/* Admin Section */}
      <section className="py-24 bg-muted border-t border-border">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-card p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <Upload className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-serif font-bold text-primary">Admin: Upload Resource</h2>
            </div>
            
            <form onSubmit={handleUpload} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Document Title *</Label>
                <Input id="title" value={title} onChange={e => setTitle(e.target.value)} required className="rounded-none" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Input id="category" placeholder="e.g. Events, Schools, General" value={category} onChange={e => setCategory(e.target.value)} required className="rounded-none" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" value={description} onChange={e => setDescription(e.target.value)} rows={3} className="rounded-none" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="file">PDF File *</Label>
                <Input id="file" type="file" accept=".pdf" onChange={e => setFile(e.target.files?.[0] || null)} required className="rounded-none file:text-primary file:font-medium" />
              </div>

              <Button type="submit" disabled={isUploading} className="w-full rounded-none h-12 bg-primary">
                {isUploading ? (
                  <><Loader2 className="w-4 h-4 animate-spin mr-2" /> Uploading...</>
                ) : (
                  "Publish Brochure"
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
