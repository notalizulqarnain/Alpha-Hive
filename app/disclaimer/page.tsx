import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";

export default function DisclaimerPage() {
  return (
    <div className="py-12 sm:py-20 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeader
          badge="FCA Regulatory Disclosure"
          title="Site Disclaimer"
          subtitle="Important regulatory notices regarding investment advice, liability, and third-party links."
          align="left"
        />

        <div className="rounded-3xl bg-[#111111] border border-white/10 shadow-card p-8 sm:p-12 space-y-6 text-slate-300 text-sm leading-relaxed font-normal">
          <p>
            The information published on this website is provided as a convenience to visitors and should be used for information purposes only and is subject to change without notice. None of the information contained in this website constitutes financial or other professional advice in any way. If you require additional information, you should contact one of our personnel.
          </p>

          <p>
            While we use reasonable efforts to ensure that the information contained on this website is current and accurate at the date of publication, no warranties are made, either expressed or implied, as to reliability, accuracy or completeness of the information. We accept no liability for any loss arising directly or indirectly from the use of or action taken in reliance on such information. These documents should not be copied, reproduced or redistributed, in whole or in part.
          </p>

          <p>
            No warranty is given as to the freedom of this website from errors, defects, viruses, malicious programs or macros. Links from this website exist for information only and we accept no responsibility or liability for the information contained on any such site. The existence of a link to another website does not imply or express endorsement of its provider, product or services by us or St. James's Place. Links to this website are not permitted without our prior written consent. Please note that clicking on links to external websites will cause you to leave this website.
          </p>

          <div className="p-6 rounded-2xl bg-white/5 text-slate-300 border border-white/10 space-y-2 mt-8">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3eb5e5]">
              Appointed Representative Statement
            </h4>
            <p className="text-xs leading-relaxed font-normal">
              Compound Wealth Planning is an Appointed Representative of and represents only St. James's Place Wealth Management plc (which is authorised and regulated by the Financial Conduct Authority) for the purpose of advising solely on the Group's wealth management products and services, more details of which are set out on the Group's website{" "}
              <a
                href="https://www.sjp.co.uk/products"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3eb5e5] hover:underline"
              >
                www.sjp.co.uk/products
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
