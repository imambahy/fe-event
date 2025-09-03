"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Coins, Info } from "lucide-react";

interface PointsSelectorProps {
  availablePoints: number;
  pointsToUse: number;
  maxUsablePoints: number; // Based on total amount
  onPointsChange: (points: number) => void;
  pointsExpiry?: string;
}

export default function PointsSelector({
  availablePoints,
  pointsToUse,
  maxUsablePoints,
  onPointsChange,
  pointsExpiry,
}: PointsSelectorProps) {
  const [inputValue, setInputValue] = useState(pointsToUse.toString());

  useEffect(() => {
    setInputValue(pointsToUse.toString());
  }, [pointsToUse]);

  const handleInputChange = (value: string) => {
    setInputValue(value);
    const numericValue = parseInt(value) || 0;
    const validPoints = Math.min(numericValue, availablePoints, maxUsablePoints);
    onPointsChange(validPoints);
  };

  const handlePresetClick = (percentage: number) => {
    const points = Math.floor(maxUsablePoints * (percentage / 100));
    onPointsChange(points);
  };

  const formatExpiry = (expiryDate: string) => {
    return new Date(expiryDate).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  if (availablePoints === 0) {
    return (
      <Card className="mb-4">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Coins className="w-4 h-4 mr-2 text-gray-400" />
              <span className="text-sm text-gray-600">Loyalty Points</span>
            </div>
            <Badge variant="outline" className="text-xs">
              No points available
            </Badge>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Coins className="w-4 h-4 mr-2 text-amber-500" />
              <span className="text-sm font-medium">Use Loyalty Points</span>
            </div>
            <Badge variant="outline" className="text-xs">
              {availablePoints.toLocaleString()} available
            </Badge>
          </div>

          {/* Points Input */}
          <div className="space-y-2">
            <div className="flex space-x-2">
              <Input
                type="number"
                placeholder="0"
                value={inputValue}
                onChange={(e) => handleInputChange(e.target.value)}
                min={0}
                max={Math.min(availablePoints, maxUsablePoints)}
                className="flex-1"
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => onPointsChange(Math.min(availablePoints, maxUsablePoints))}
              >
                Use Max
              </Button>
            </div>

            {/* Preset Buttons */}
            <div className="flex space-x-2">
              {[25, 50, 75, 100].map((percentage) => {
                const points = Math.floor(maxUsablePoints * (percentage / 100));
                if (points > availablePoints) return null;
                return (
                  <Button
                    key={percentage}
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="text-xs"
                    onClick={() => handlePresetClick(percentage)}
                  >
                    {percentage}%
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Points Info */}
          <div className="flex items-start space-x-2 p-2 bg-amber-50 rounded-lg">
            <Info className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
            <div className="text-xs text-amber-700">
              <p className="font-medium">1 point = Rp 1 discount</p>
              <p>Max {maxUsablePoints.toLocaleString()} points can be used for this order</p>
              {pointsExpiry && (
                <p>Points expire on {formatExpiry(pointsExpiry)}</p>
              )}
            </div>
          </div>

          {/* Current Usage Display */}
          {pointsToUse > 0 && (
            <div className="flex justify-between items-center p-2 bg-green-50 rounded-lg">
              <span className="text-sm text-green-700">Points discount:</span>
              <span className="font-medium text-green-700">
                -Rp {pointsToUse.toLocaleString()}
              </span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
