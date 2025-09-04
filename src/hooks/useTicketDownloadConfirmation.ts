// "use client";

// import { useState } from "react";

// interface UseTicketDownloadConfirmationReturn {
//   downloading: string | null;
//   downloadTicket: (ticketId: string) => Promise<void>;
// }

// export function useTicketDownloadConfirmation(): UseTicketDownloadConfirmationReturn {
//   const [downloading, setDownloading] = useState<string | null>(null);

//   const downloadTicket = async (ticketId: string) => {
//     setDownloading(ticketId);

//     try {
//       // Create a canvas to generate ticket image
//       const canvas = document.createElement("canvas");
//       const ctx = canvas.getContext("2d");
//       canvas.width = 800;
//       canvas.height = 400;

//       if (ctx) {
//         // Background
//         ctx.fillStyle = "#ffffff";
//         ctx.fillRect(0, 0, 800, 400);

//         // Border
//         ctx.strokeStyle = "#e5e7eb";
//         ctx.lineWidth = 2;
//         ctx.strokeRect(10, 10, 780, 380);

//         // Title
//         ctx.fillStyle = "#1f2937";
//         ctx.font = "bold 24px Arial";
//         ctx.fillText("EVENT TICKET", 50, 60);

//         // Event details
//         ctx.font = "16px Arial";
//         ctx.fillText("Event: Music Festival 2024", 50, 100);
//         ctx.fillText("Type: VIP Access", 50, 130);
//         ctx.fillText("Location: GBK Stadium", 50, 160);
//         ctx.fillText("Date: February 21, 2024", 50, 190);
//         ctx.fillText("Time: 18:00", 50, 220);
//         ctx.fillText("Ticket ID: " + ticketId, 50, 250);
//         ctx.fillText("Order ID: " + ticketId, 50, 280);
//       }

//       // Convert to blob and download
//       canvas.toBlob((blob) => {
//         if (blob) {
//           const url = URL.createObjectURL(blob);
//           const a = document.createElement("a");
//           a.href = url;
//           a.download = ticket-${ticketId}.png;
//           document.body.appendChild(a);
//           a.click();
//           document.body.removeChild(a);
//           URL.revokeObjectURL(url);
//         }
//         setDownloading(null);
//       }, "image/png");
//     } catch (error) {
//       console.error("Error downloading ticket:", error);
//       setDownloading(null);
//     }
//   };

//   return {
//     downloading,
//     downloadTicket
//   };
// }