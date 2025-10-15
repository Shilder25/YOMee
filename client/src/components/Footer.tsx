import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 bg-card border-t border-card-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-sm">Made with</span>
            <Heart className="w-4 h-4 text-primary fill-current" />
            <span className="text-sm">for penguin lovers everywhere</span>
          </div>
          <p className="text-sm text-muted-foreground text-center" data-testid="text-copyright">
            © 2025 YoMee (萌萌). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}