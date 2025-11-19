import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Triangle } from 'lucide-react';

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/50 backdrop-blur-md border-b border-white/5">
            <div className="flex items-center gap-2">
                <Triangle className="w-6 h-6 fill-white text-white" />
                <span className="text-lg font-bold tracking-wide text-white">AXIOM <span className="font-normal text-white/60">Pro</span></span>
            </div>

            <div className="flex items-center gap-4">
                <Button variant="ghost" className="text-sm font-medium text-white/80 hover:text-white">
                    Login
                </Button>
                <Button className="bg-[#4C6FFF] hover:bg-[#3b5bdb] text-white rounded-full px-6">
                    Sign up
                </Button>
            </div>
        </nav>
    );
}
