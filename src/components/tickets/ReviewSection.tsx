"use client";

import { Button } from "@/components/ui/button";
import { Star, MessageSquare, CheckCircle, Clock } from "lucide-react";

interface ReviewSectionProps {
  ticket: {
    id: string;
    hasReviewed: boolean;
    canReview: boolean;
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
  if (ticket.hasReviewed) {
    return (
      <>
        <h4 className="font-semibold text-gray-900 mb-3">Event Review</h4>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="font-medium text-green-800">Review Submitted</span>
          </div>
          <p className="text-sm text-green-700">
            Thank you for sharing your experience! It helps other users discover great events.
          </p>
        </div>
      </>
    );
  }

  if (ticket.canReview) {
    return (
      <>
        <h4 className="font-semibold text-gray-900 mb-3">Event Review</h4>
        {showReviewForm === ticket.id ? (
          <div className="space-y-4">
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
                className="w-full p-3 border border-gray-300 rounded-lg resize-none"
                rows={3}
                placeholder="Share your experience at this event..."
              />
            </div>
            <div className="flex gap-2">
              <Button 
                onClick={() => onSubmitReview(ticket.id)}
                disabled={reviewData.rating === 0 || !reviewData.comment.trim()}
                className="flex-1"
              >
                Submit Review
              </Button>
              <Button 
                variant="outline"
                onClick={onResetReviewForm}
              >
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-blue-800">Leave a Review</span>
            </div>
            <p className="text-sm text-blue-700 mb-3">
              Share your experience to help other users discover great events.
            </p>
            <Button 
              onClick={() => onShowReviewForm(ticket.id)}
              className="w-full"
            >
              Write Review
            </Button>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <h4 className="font-semibold text-gray-900 mb-3">Event Review</h4>
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <Clock className="w-5 h-5 text-gray-600" />
          <span className="font-medium text-gray-800">Review Not Available</span>
        </div>
        <p className="text-sm text-gray-600">
          You can leave a review after attending the event.
        </p>
      </div>
    </>
  );
}
