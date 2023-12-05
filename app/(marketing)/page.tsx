import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Heading from './_components/heading'
import Heroes from './_components/heroes'
import Footer from './_components/footer'

export default function MarketingPage() {
  return (
    <div className="min-h-full dark:bg-[#1f1f1f] flex flex-col">
      <div className="flex flex-col justify-center items-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Heading />
        <Heroes />
      </div>
      <Footer />
    </div>
  );
}
