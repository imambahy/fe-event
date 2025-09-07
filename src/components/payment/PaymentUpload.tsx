"use client";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Upload, FileText, X, CheckCircle } from "lucide-react";

interface PaymentUploadProps {
  onUploadSuccess: (file: File) => void;
  isLoading: boolean;
}

export function PaymentUpload({ onUploadSuccess, isLoading }: PaymentUploadProps) {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: any[]) => {
    setError(null);
    
    if (rejectedFiles.length > 0) {
      setError("Please upload a valid image file (JPG, PNG, or PDF)");
      return;
    }

    const file = acceptedFiles[0];
    if (file) {
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError("File size must be less than 5MB");
        return;
      }

      setUploadedFile(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png'],
      'application/pdf': ['.pdf']
    },
    maxFiles: 1,
    disabled: isLoading
  });

  const handleSubmit = () => {
    if (uploadedFile) {
      onUploadSuccess(uploadedFile);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    setError(null);
  };

  return (
    <div className="space-y-4">
      {/* Dropzone */}
      <div
        {...getRootProps()}
        className={`
          border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
          ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'}
          ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}
        `}
      >
        <input {...getInputProps()} />
        
        {uploadedFile ? (
          <div className="space-y-2">
            <CheckCircle className="w-8 h-8 text-green-500 mx-auto" />
            <p className="font-medium text-green-600">File uploaded successfully!</p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <FileText className="w-4 h-4" />
              <span>{uploadedFile.name}</span>
              <span>({(uploadedFile.size / 1024 / 1024).toFixed(2)} MB)</span>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <Upload className="w-8 h-8 text-gray-400 mx-auto" />
            <p className="font-medium">
              {isDragActive ? "Drop the file here" : "Drag & drop payment proof here"}
            </p>
            <p className="text-sm text-gray-500">
              or click to select file (JPG, PNG, PDF - max 5MB)
            </p>
          </div>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* File Actions */}
      {uploadedFile && (
        <div className="flex space-x-2">
          <Button 
            onClick={handleSubmit} 
            className="flex-1"
            disabled={isLoading}
          >
            {isLoading ? "Uploading..." : "Submit Payment Proof"}
          </Button>
          <Button 
            variant="outline" 
            onClick={removeFile}
            disabled={isLoading}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      )}

      {/* Upload Guidelines */}
      <Card>
        <CardContent className="pt-6">
          <h4 className="font-medium mb-2">Upload Guidelines:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Screenshot of bank transfer confirmation</li>
            <li>• Receipt from payment gateway</li>
            <li>• Photo of ATM receipt (clear and readable)</li>
            <li>• Maximum file size: 5MB</li>
            <li>• Supported formats: JPG, PNG, PDF</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}