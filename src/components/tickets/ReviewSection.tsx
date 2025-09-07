"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star, MessageSquare, CheckCircle, Clock } from "lucide-react";

interface ReviewSectionProps {
  ticket: {
    id: string;
    hasReviewed: boolean;
    canReview: boolean;
    eventTitle: string;
  };
  showReviewForm: string | null;
  reviewData: { rating: number; comment: string };
  onShowReviewForm: (ticketId: string) => void;
  onSetReviewData: (data: { rating: number; comment: string }) => void;
  onSubmitReview: (ticketId: string) => void;
  onResetReviewForm: () => void;
}

export default function ReviewSection({
  ticket,
  showReviewForm,
  reviewData,
  onShowReviewForm,
  onSetReviewData,
  onSubmitReview,
  onResetReviewForm
}: ReviewSectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitReview = async () => {
    setIsSubmitting(true);
    try {
      await onSubmitReview(ticket.id);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (ticket.hasReviewed) {
    return (
      <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <span className="font-medium text-green-800">Review Submitted</span>
        </div>
        <p className="text-sm text-green-700">
          Thank you for sharing your experience! It helps other users discover great events.
        </p>
      </div>
    );
  }

  if (ticket.canReview) {
    return (
      <div className="mt-6">
        <h4 className="font-semibold text-gray-900 mb-3">Event Review</h4>
        {showReviewForm === ticket.id ? (
          <div className="space-y-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rating
              </label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => onSetReviewData({ ...reviewData, rating: star })}
                    className={`p-1 ${reviewData.rating >= star ? 'text-yellow-400' : 'text-gray-300'}`}
                  >
                    <Star className="w-6 h-6 fill-current" />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Review
              </label>
              <textarea
                value={reviewData.comment}
                onChange={(e) => onSetReviewData({ ...reviewData, comment: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={3}
                placeholder="Share your experience at this event..."
              />
            </div>
            <div className="flex gap-2">
              <Button
                onClick={handleSubmitReview}
                disabled={reviewData.rating === 0 || !reviewData.comment.trim() || isSubmitting}
                className="flex-1"
                size="sm"
              >
                {isSubmitting ? "Submitting..." : "Submit Review"}
              </Button>
              <Button
                variant="outline"
                onClick={onResetReviewForm}
                size="sm"
              >
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-blue-800">Leave a Review</span>
            </div>
            <p className="text-sm text-blue-700 mb-3">
              Share your experience to help other users discover great events.
            </p>
            <Button
              onClick={() => onShowReviewForm(ticket.id)}
              size="sm"
              className="w-full"
            >
              Write Review
            </Button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
      <div className="flex items-center gap-2 mb-2">
        <Clock className="w-5 h-5 text-gray-600" />
        <span className="font-medium text-gray-800">Review Not Available</span>
      </div>
      <p className="text-sm text-gray-600">
        You can leave a review after attending the event.
      </p>
    </div>
  );
}
