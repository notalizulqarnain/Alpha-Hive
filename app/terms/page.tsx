import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";

export default function TermsPage() {
  return (
    <div className="py-8 sm:py-16 md:py-20 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        <SectionHeader
          badge="Legal Compliance"
          title="Terms & Conditions"
          subtitle="Please read these terms carefully before navigating or using this website."
          align="left"
        />

        <div className="rounded-3xl bg-[#111111] border border-white/10 shadow-card p-6 sm:p-10 md:p-12 space-y-5 sm:space-y-6 text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
          <ol className="list-decimal pl-5 space-y-4 font-normal">
            <li>
              We do our best to ensure that the website operates properly at all times, but we make no warranties as to the availability or accessibility of the website, and (save as otherwise set out in these terms and conditions) we will not be liable for any damages, loss, costs or expenses incurred by you as a result of any lack of availability or accessibility of the website.
            </li>
            <li>
              Nothing within these conditions operates so as to exclude, limit or restrict our liability for death or personal injury.
            </li>
            <li>
              Where you deal as a consumer, nothing in the above exclusions affects your statutory rights.
            </li>
            <li>
              All Intellectual Property Rights and goodwill in or relating to the contents of the website belong to either ourselves, to a member of the St. James's Place Group or to our suppliers.
            </li>
          </ol>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-400 my-6">
            © {new Date().getFullYear()} St. James's Place plc. All rights reserved. "St. James's Place" and the St. James's Place Logo are trademarks of St. James's Place plc.
          </div>

          <div className="space-y-4 pt-4 border-t border-white/10">
            <p>
              Nothing contained in these conditions or the website should be construed as granting by implication, estoppel, personal bar, or otherwise, any licence or right to use any of the trade marks without our permission. However, copying and printing of those web pages which contain the trademarks is permitted within the scope of the licence below.
            </p>
            <p>
              You may download to a local hard disk and print extracts from the website solely for personal, non-commercial use. You may also recopy downloaded extracts to others for their personal, non commercial use.
            </p>
            <p>
              You may not reproduce part or all of the contents of the website in any form unless it is for personal, non commercial use.
            </p>
            <p>
              You may not copy or otherwise incorporate into or store in any other website, electronic retrieval system, publication or other work any of the content of the website in any form (whether hard copy, electronic or other).
            </p>
            <p>
              You may not frame or link to the website or any part of it without our express permission. If you have any difficulty in accessing any information on this website or if you have any feedback for us, we would like to hear from you. Please contact us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
