import imgUnitedKingdom11 from "./6f829151ca070b15500c7ab71bce20d98358398d.png";
import imgImage3 from "./d6fe16f0e2010fb3dd1ad5e1ce0928630b9357d9.png";
import imgImage4 from "./dd42f07f0bcca04d1b44cf170faa0111e9cebfd6.png";

function Frame12() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-none not-italic relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[16px] text-black w-full">Payment Instructions</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5a6376] text-[12px] w-full">Please select your preferred payment method below</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#27a847] content-stretch flex items-center justify-center px-[10px] py-[4px] relative rounded-[35px] shrink-0">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14px] not-italic relative shrink-0 text-[11px] text-right text-white whitespace-nowrap" style={{ fontFeatureSettings: '"lnum" 1, "tnum" 1' }}>
        Recommended
      </p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#101828] text-[18px] whitespace-nowrap">Direct Bank Transfer</p>
      <Frame15 />
    </div>
  );
}

function BankDetailsHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center relative shrink-0" data-name="Bank Details Header">
      <Frame18 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20.932px] not-italic relative shrink-0 text-[#101828] text-[11px] whitespace-pre">{`• No additional processing fees    • Faster payment confirmation    • Enhanced security protocol    • Direct account settlement`}</p>
    </div>
  );
}

function BankDetails() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Bank Details">
      <BankDetailsHeader />
    </div>
  );
}

function BankDetailsContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Bank Details Content">
      <div className="content-stretch flex items-start px-[10px] relative size-full">
        <BankDetails />
      </div>
    </div>
  );
}

function BankDetailsHeader1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Bank Details Header">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20.932px] not-italic relative shrink-0 text-[13.456px] text-black whitespace-nowrap">Payment Reference Required</p>
    </div>
  );
}

function BankDetailsLabels() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Bank Details Labels">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#101828] text-[11.961px] whitespace-nowrap">
        <span className="leading-[17.942px]">{`Please include the following reference: `}</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[17.942px]">Invoice #1844231782554879</span>
      </p>
    </div>
  );
}

function BankDetailsContent2() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Bank Details Content">
      <BankDetailsLabels />
    </div>
  );
}

function BankDetails1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="Bank Details">
      <BankDetailsHeader1 />
      <BankDetailsContent2 />
    </div>
  );
}

function BankDetailsContent1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Bank Details Content">
      <BankDetails1 />
    </div>
  );
}

function BankDetailsContainer() {
  return (
    <div className="bg-[#fff9db] relative rounded-[4.98px] shrink-0 w-full" data-name="Bank Details Container">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <BankDetailsContent1 />
      </div>
      <div aria-hidden className="absolute border-[#ffc26c] border-[0.748px] border-solid inset-0 pointer-events-none rounded-[4.98px]" />
    </div>
  );
}

function BankDetailsHeader2() {
  return (
    <div className="content-stretch flex gap-[8.971px] items-center relative shrink-0 w-full" data-name="Bank Details Header">
      <div className="relative shrink-0 size-[24px]" data-name="united-kingdom (1) 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUnitedKingdom11} />
      </div>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20.932px] not-italic relative shrink-0 text-[13.456px] text-black whitespace-nowrap">GBP - United Kingdom</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#737982]">Account Name</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#101828]">Teks Mobile Australia Pty.Limited</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#737982]">Sort Code</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#101828]">23-14-70</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#737982]">Account Number</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#101828]">34402813</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#737982]">IBAN</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#101828]">GB21 TRWI 2314 7034 4028 13</p>
    </div>
  );
}

function BankDetailsLabels1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[5.981px] items-start leading-[17.942px] min-w-px not-italic relative text-[11.961px] whitespace-nowrap" data-name="Bank Details Labels">
      <Frame14 />
      <Frame16 />
      <Frame17 />
      <Frame19 />
    </div>
  );
}

function BankDetailsContent4() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Bank Details Content">
      <BankDetailsLabels1 />
    </div>
  );
}

function BankDetails2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[11.961px] items-start min-w-px relative" data-name="Bank Details">
      <BankDetailsHeader2 />
      <BankDetailsContent4 />
    </div>
  );
}

function BankDetailsContent3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Bank Details Content">
      <BankDetails2 />
    </div>
  );
}

function BankDetailsWrapper() {
  return (
    <div className="bg-white flex-[1_0_0] relative w-full h-full" data-name="Bank Details Wrapper">
      <div aria-hidden className="absolute border-[#d0d5dd] border-[0.748px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[14px] relative w-full">
        <BankDetailsContent3 />
      </div>
    </div>
  );
}

function BankDetailsContainer1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[4.98px]" data-name="Bank Details Container">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full h-full">
        <BankDetailsWrapper />
      </div>
      <div aria-hidden className="absolute border-[#d0d5dd] border-[0.748px] border-solid inset-0 pointer-events-none rounded-[4.98px]" />
    </div>
  );
}

function BankDetailsHeader3() {
  return (
    <div className="content-stretch flex gap-[8.971px] items-center relative shrink-0 w-full" data-name="Bank Details Header">
      <div className="relative shrink-0 size-[24px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20.932px] not-italic relative shrink-0 text-[13.456px] text-black whitespace-nowrap">USD - United States</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 whitespace-nowrap">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#737982]">Account Name</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#101828]">Teks Mobile Australia Pty.Limited</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 whitespace-nowrap">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#737982]">Routing Number</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#101828]">026073150</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 whitespace-nowrap">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#737982]">Account Number</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#101828]">8310592143</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#737982] whitespace-nowrap">Address</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold min-w-full relative shrink-0 text-[#101828] w-[min-content]">30 W. 26th Street, Sixth Floor New York NY 10010</p>
    </div>
  );
}

function BankDetailsLabels2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[5.981px] items-start leading-[17.942px] min-w-px not-italic relative text-[11.961px]" data-name="Bank Details Labels">
      <Frame20 />
      <Frame21 />
      <Frame22 />
      <Frame23 />
    </div>
  );
}

function BankDetailsContent6() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Bank Details Content">
      <BankDetailsLabels2 />
    </div>
  );
}

function BankDetails3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[11.961px] items-start min-w-px relative" data-name="Bank Details">
      <BankDetailsHeader3 />
      <BankDetailsContent6 />
    </div>
  );
}

function BankDetailsContent5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Bank Details Content">
      <BankDetails3 />
    </div>
  );
}

function BankDetailsWrapper1() {
  return (
    <div className="bg-white relative w-full h-full" data-name="Bank Details Wrapper">
      <div aria-hidden className="absolute border-[#d0d5dd] border-[0.748px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[14px] relative w-full">
        <BankDetailsContent5 />
      </div>
    </div>
  );
}

function BankDetailsContainer2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[4.98px]" data-name="Bank Details Container">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full h-full">
        <BankDetailsWrapper1 />
      </div>
      <div aria-hidden className="absolute border-[#d0d5dd] border-[0.748px] border-solid inset-0 pointer-events-none rounded-[4.98px]" />
    </div>
  );
}

function BankDetailsHeader4() {
  return (
    <div className="content-stretch flex gap-[8.971px] items-center relative shrink-0 w-full" data-name="Bank Details Header">
      <div className="h-[16px] relative shrink-0 w-[24px]" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20.932px] not-italic relative shrink-0 text-[13.456px] text-black whitespace-nowrap">EUR - European Union</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 whitespace-nowrap">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#737982]">Account Name</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#101828]">Teks Mobile Australia Pty.Limited</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full whitespace-nowrap">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#737982]">SWIFT/BIC</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#101828]">TRWIBEB1XXX</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full whitespace-nowrap">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#737982]">IBAN</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#101828]">BE19 9670 5408 2112</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#737982] whitespace-nowrap">Address</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold min-w-full relative shrink-0 text-[#101828] w-[min-content]">Rue du Trône 100, 3rd floor Brussels 1050 Belgium</p>
    </div>
  );
}

function BankDetailsLabels3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[5.981px] items-start leading-[17.942px] min-w-px not-italic relative text-[11.961px]" data-name="Bank Details Labels">
      <Frame24 />
      <Frame25 />
      <Frame26 />
      <Frame27 />
    </div>
  );
}

function BankDetailsContent8() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Bank Details Content">
      <BankDetailsLabels3 />
    </div>
  );
}

function BankDetails4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[11.961px] items-start min-w-px relative" data-name="Bank Details">
      <BankDetailsHeader4 />
      <BankDetailsContent8 />
    </div>
  );
}

function BankDetailsContent7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Bank Details Content">
      <BankDetails4 />
    </div>
  );
}

function BankDetailsWrapper2() {
  return (
    <div className="bg-white relative w-full h-full" data-name="Bank Details Wrapper">
      <div className="content-stretch flex flex-col items-start p-[14px] relative w-full">
        <BankDetailsContent7 />
      </div>
    </div>
  );
}

function BankDetailsContainer3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[4.98px]" data-name="Bank Details Container">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full h-full">
        <BankDetailsWrapper2 />
      </div>
      <div aria-hidden className="absolute border-[#d0d5dd] border-[0.748px] border-solid inset-0 pointer-events-none rounded-[4.98px]" />
    </div>
  );
}

function PaymentInfoContainer() {
  return (
    <div className="content-stretch flex gap-[12px] items-stretch relative shrink-0 w-full" data-name="Payment Info Container">
      <BankDetailsContainer1 />
      <BankDetailsContainer2 />
      <BankDetailsContainer3 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-gradient-to-b from-[#e2ffe7] relative rounded-[10px] shrink-0 to-[#fbfcfe] to-[44.712%] w-full">
      <div className="overflow-clip rounded-[inherit] w-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start pb-[14px] pl-[13px] pr-[14px] pt-[24px] relative w-full">
          <BankDetailsContent />
          <BankDetailsContainer />
          <PaymentInfoContainer />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#101828] text-[18px] whitespace-nowrap">Alternative Payment Method</p>
    </div>
  );
}

function BankDetailsHeader5() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center relative shrink-0" data-name="Bank Details Header">
      <Frame29 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20.932px] not-italic relative shrink-0 text-[#101828] text-[11px] whitespace-pre">{`• For immediate online payment processing    • Processing fees may apply `}</p>
    </div>
  );
}

function BankDetails5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Bank Details">
      <BankDetailsHeader5 />
    </div>
  );
}

function BankDetailsContent9() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Bank Details Content">
      <div className="content-stretch flex items-start px-[10px] relative size-full">
        <BankDetails5 />
      </div>
    </div>
  );
}

function BankDetailsHeader6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Bank Details Header">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20.932px] not-italic relative shrink-0 text-[13.456px] text-black whitespace-nowrap">Pay by Credit Card</p>
    </div>
  );
}

function BankDetails6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Bank Details">
      <BankDetailsHeader6 />
    </div>
  );
}

function BankDetailsContent10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Bank Details Content">
      <BankDetails6 />
    </div>
  );
}

function BankDetailsWrapper3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[14px] relative shrink-0" data-name="Bank Details Wrapper">
      <div aria-hidden className="absolute border-[#d0d5dd] border-[0.748px] border-solid inset-0 pointer-events-none" />
      <BankDetailsContent10 />
    </div>
  );
}

function BankDetailsContainer4() {
  return (
    <div className="relative rounded-[4.98px] shrink-0" data-name="Bank Details Container">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <BankDetailsWrapper3 />
      </div>
      <div aria-hidden className="absolute border-[#d0d5dd] border-[0.748px] border-solid inset-0 pointer-events-none rounded-[4.98px]" />
    </div>
  );
}

function PaymentInfoContainer1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Payment Info Container">
      <BankDetailsContainer4 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-gradient-to-b from-[#ededed] relative rounded-[10px] shrink-0 to-[#fbfcfe] to-[44.712%] w-full">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-between pl-[13px] pr-[24px] py-[24px] relative size-full">
          <BankDetailsContent9 />
          <PaymentInfoContainer1 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#181c26] text-[16px] whitespace-nowrap">Terms and Conditions</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 text-[12px] w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#1d2534] w-full">Refunds and Payments</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#363c45] w-full">No refunds will be issued. All payments are considered final once the purchase has been made.</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame />
    </div>
  );
}

function Frame2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 text-[12px] w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#1d2534] w-full">Offer Validity</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#363c45] w-full">his quote is valid for 7 days from the date indicated on this document.</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 text-[12px] w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#1d2534] w-full">Data Deletion</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#363c45] w-full">All customer data will be securely deleted from the system within 30 days post the license end date or sooner if requested.</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1d2534] text-[12px] w-full">Additional Information</p>
      <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] list-disc relative shrink-0 text-[#363c45] text-[0px] w-full">
        <li className="leading-[normal] mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[12px]">
          {`For detailed information on the Terms of use, please refer to our `}
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Inter:Medium',sans-serif] font-medium not-italic text-[#105efb] underline">Terms of Use</span>
          {`. `}
        </li>
        <li className="leading-[normal] mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[12px]">
          {`Our privacy practices are outlined in our `}
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Inter:Medium',sans-serif] font-medium not-italic text-[#105efb] underline">Privacy Policy</span>
          {`. `}
        </li>
        <li className="leading-[normal] mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[12px]">
          {`For details regarding information security, please review our Information `}
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Inter:Medium',sans-serif] font-medium not-italic text-[#105efb] underline">Security policy</span>
          {`. `}
        </li>
        <li className="leading-[normal] ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[12px]">
          {`Eventify may cancel your event if it violates our `}
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Inter:Medium',sans-serif] font-medium not-italic text-[#105efb] underline">Restricted Business Policy</span>.
        </li>
      </ul>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 text-[12px] w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#1d2534] w-full">App Customization Time</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#363c45] w-full">App approval on App Store/Google Play typically takes 8-15 working days, subject to their review process.</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame5 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[10px] items-start p-[12px] relative size-full">
        <Frame6 />
        <Frame7 />
        <Frame8 />
        <Frame9 />
        <Frame10 />
        <Frame11 />
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[30px] items-start pb-[29.903px] pt-[32px] px-[32px] relative size-full" data-name="Page 4">
      <Frame12 />
      <Frame13 />
      <Frame28 />
      <Frame1 />
    </div>
  );
}