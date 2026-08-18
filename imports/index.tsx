import svgPaths from "./svg-ezaw5sn3c4";
import imgEventLogo from "./6b1c09b21e31ae6d4fe397cf65e17ba458fb81cc.png";
import imgTeksLogoVector1 from "./7af58cf765f009884a80930a720f1ba74fe7ecc8.png";

function EventLogo() {
  return (
    <div className="aspect-[128/128] h-full pointer-events-none relative rounded-[5.981px] shrink-0" data-name="Event Logo">
      <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[5.981px] size-full" src={imgEventLogo} />
      <div aria-hidden className="absolute border-[#d0d5dd] border-[0.748px] border-solid inset-0 rounded-[5.981px]" />
    </div>
  );
}

function EventTitleWrapper() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[261.65px]" data-name="Event Title Wrapper">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[29.903px] not-italic relative shrink-0 text-[#101828] text-[17.942px] text-right tracking-[-0.3738px] whitespace-nowrap">Startupcon Conference 2025</p>
    </div>
  );
}

function EventTitleContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Event Title Container">
      <EventTitleWrapper />
    </div>
  );
}

function EventDateWrapper() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[2.99px] items-start leading-[17.942px] not-italic relative shrink-0 text-[#475467] text-[11.961px] w-full" data-name="Event Date Wrapper">
      <p className="relative shrink-0 w-full">Sydney, Australia</p>
      <p className="relative shrink-0 w-full">Feb 21st, 2025 - Mar 21st, 2025</p>
    </div>
  );
}

function EventDateContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Event Date Container">
      <EventDateWrapper />
    </div>
  );
}

function EventDetails() {
  return (
    <div className="content-stretch flex flex-col gap-[5.981px] items-start relative shrink-0" data-name="Event Details">
      <EventTitleContainer />
      <EventDateContainer />
    </div>
  );
}

function EventInfoContainer() {
  return (
    <div className="content-stretch flex gap-[17.942px] h-[95.961px] items-center relative shrink-0" data-name="Event Info Container">
      <EventLogo />
      <EventDetails />
    </div>
  );
}

function InvoiceNumberContainer() {
  return (
    <div className="content-stretch flex gap-[11.961px] items-start relative shrink-0 w-full" data-name="Invoice Number Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#475467] w-[86.718px]">Invoice No.</p>
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium min-w-px relative text-[#101828] text-right">#1825013515910244</p>
    </div>
  );
}

function InvoiceDateContainer() {
  return (
    <div className="content-stretch flex gap-[11.961px] items-start relative shrink-0 w-full" data-name="Invoice Date Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#475467] w-[86.718px]">Invoice Date</p>
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium min-w-px relative text-[#101828] text-right">Sep 24, 2025</p>
    </div>
  );
}

function DueDateContainer() {
  return (
    <div className="content-stretch flex gap-[11.961px] items-start relative shrink-0 w-full" data-name="Due Date Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#475467] w-[86.718px]">Due Date</p>
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium min-w-px relative text-[#101828] text-right">Sep 30, 2025</p>
    </div>
  );
}

function DueDateContainer1() {
  return (
    <div className="content-stretch flex gap-[11.961px] items-start relative shrink-0 w-full" data-name="Due Date Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#475467] w-[86.718px]">User Credit</p>
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium min-w-px relative text-[#101828] text-right">2000</p>
    </div>
  );
}

function InvoiceDetailsContainer() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-end leading-[17.942px] not-italic relative shrink-0 text-[11.961px] w-full" data-name="Invoice Details Container">
      <InvoiceNumberContainer />
      <InvoiceDateContainer />
      <DueDateContainer />
      <DueDateContainer1 />
    </div>
  );
}

function InvoiceInfoContainer() {
  return (
    <div className="content-stretch flex flex-col items-start px-[14px] relative shrink-0 w-[251px]" data-name="Invoice Info Container">
      <div aria-hidden className="absolute border-[#105efb] border-r-3 border-solid inset-0 pointer-events-none" />
      <InvoiceDetailsContainer />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <EventInfoContainer />
      <InvoiceInfoContainer />
    </div>
  );
}

function HeaderContent() {
  return (
    <div className="bg-[#fbfcfe] content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Header Content">
      <Frame1 />
    </div>
  );
}

function BilledByDetailsWrapper() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[5.981px] items-start not-italic relative shrink-0 w-full" data-name="Billed By Details Wrapper">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[23.922px] relative shrink-0 text-[#101828] text-[14.951px] tracking-[-0.1869px] w-full">Daniel Miller</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[17.942px] relative shrink-0 text-[#475467] text-[11.961px] w-full">
        305, 3rd Floor Orion mall, Bengaluru, Karnataka 560055
        <br aria-hidden />
        sandeepmauryadesigns@gmail.com
        <br aria-hidden />
        +91 98765 43210
      </p>
    </div>
  );
}

function BilledByDetailsContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Billed By Details Container">
      <BilledByDetailsWrapper />
    </div>
  );
}

function BilledByContainer() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Billed By Container">
      <div className="content-stretch flex flex-col gap-[8.971px] items-start pb-[17.942px] pr-[17.942px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20.932px] not-italic relative shrink-0 text-[#105efb] text-[13.456px] whitespace-nowrap">Billed By</p>
        <BilledByDetailsContainer />
      </div>
    </div>
  );
}

function BilledToDetailsWrapper() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[5.981px] items-start not-italic relative shrink-0 w-full" data-name="Billed To Details Wrapper">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[23.922px] relative shrink-0 text-[#101828] text-[14.951px] tracking-[-0.1869px] w-full">Studio Den</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[17.942px] relative shrink-0 text-[#475467] text-[11.961px] w-full">
        305, 3rd Floor Orion mall, Bengaluru, Karnataka 560055
        <br aria-hidden />
        info@studioden.com
        <br aria-hidden />
        +91 98765 43210
      </p>
    </div>
  );
}

function BilledToDetailsContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Billed To Details Container">
      <BilledToDetailsWrapper />
    </div>
  );
}

function BilledToContainer() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Billed To Container">
      <div className="content-stretch flex flex-col gap-[8.971px] items-start pb-[17.942px] pr-[17.942px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20.932px] not-italic relative shrink-0 text-[#105efb] text-[13.456px] whitespace-nowrap">Billed To</p>
        <BilledToDetailsContainer />
      </div>
    </div>
  );
}

function BillingInfoContainer() {
  return (
    <div className="content-stretch flex gap-[17.942px] items-start relative shrink-0 w-full" data-name="Billing Info Container">
      <BilledByContainer />
      <BilledToContainer />
    </div>
  );
}

function HeaderContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[29.903px] items-center justify-center relative shrink-0 w-full" data-name="Header Container">
      <div className="absolute bg-[#fbfcfe] h-[156px] left-[-29.9px] top-[-29.9px] w-[794px]" data-name="Header Background">
        <div aria-hidden className="absolute border-[#d0d5dd] border-b-[0.748px] border-solid inset-0 pointer-events-none" />
      </div>
      <HeaderContent />
      <div className="h-0 relative shrink-0 w-[803.638px]">
        <div className="absolute inset-[-0.75px_0_0_0]">
          <svg className="block size-full" fill="none" height="0.747571" preserveAspectRatio="none" viewBox="0 0 803.638 0.747571" width="803.638">
            <line id="Line 1" stroke="#D0D5DD" strokeWidth="0.747571" x2="803.638" y1="0.373785" y2="0.373785" />
          </svg>
        </div>
      </div>
      <BillingInfoContainer />
    </div>
  );
}

function ItemDescriptionWrapper() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item Description Wrapper">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[17.942px] not-italic relative shrink-0 text-[#9aa0b4] text-[11.961px] w-full">Ticket</p>
    </div>
  );
}

function ItemDescriptionContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Item Description Container">
      <ItemDescriptionWrapper />
    </div>
  );
}

function ItemDetailsContainer() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[17.942px] items-start justify-end leading-[17.942px] not-italic relative shrink-0 text-[#9aa0b4] text-[11.961px] w-[444.057px] whitespace-nowrap" data-name="Item Details Container">
      <p className="relative shrink-0 text-center">Unit Price</p>
      <p className="relative shrink-0 text-center">Qty</p>
      <p className="relative shrink-0 text-center">Net Price</p>
      <p className="relative shrink-0 text-center">Discount</p>
      <p className="relative shrink-0 text-center">Tax Rate</p>
      <p className="relative shrink-0 text-center">Tax Amount</p>
      <p className="relative shrink-0 text-right">Total</p>
    </div>
  );
}

function ItemsHeaderContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[17.942px] items-start min-w-px relative" data-name="Items Header Container">
      <ItemDescriptionContainer />
      <ItemDetailsContainer />
    </div>
  );
}

function DefaultTemplateTable() {
  return (
    <div className="bg-[#fbfcfe] relative shrink-0 w-full z-[4]" data-name="Default Template Table">
      <div aria-hidden className="absolute border-[#d0d5dd] border-[0.748px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start px-[14.951px] py-[8.971px] relative size-full">
        <ItemsHeaderContainer />
      </div>
    </div>
  );
}

function ItemDescriptionWrapper1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item Description Wrapper">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20.932px] not-italic relative shrink-0 text-[#101828] text-[11.961px] w-full">General Admission</p>
    </div>
  );
}

function ItemDescriptionContainer1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14.951px] items-start min-w-px relative" data-name="Item Description Container">
      <ItemDescriptionWrapper1 />
    </div>
  );
}

function DiscountValue() {
  return (
    <div className="content-stretch flex flex-col gap-[1.495px] items-start justify-center relative shrink-0" data-name="Discount Value">
      <p className="leading-[17.942px] relative shrink-0 text-[#101828] text-[11.961px] w-[52.33px]">$20</p>
      <p className="leading-[normal] relative shrink-0 text-[#475467] text-[7.476px] uppercase w-[52.33px]">Special2025</p>
    </div>
  );
}

function TaxValue() {
  return (
    <div className="content-stretch flex flex-col gap-[1.495px] items-start justify-center relative shrink-0" data-name="Tax Value">
      <p className="leading-[17.942px] relative shrink-0 text-[#101828] text-[11.961px] w-[52.33px]">$5%</p>
      <p className="leading-[normal] relative shrink-0 text-[#9aa0b4] text-[7.476px] uppercase w-[52.33px]">CGST</p>
    </div>
  );
}

function ItemDetailsContainer1() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[17.942px] items-start justify-end not-italic relative shrink-0 w-[444.057px]" data-name="Item Details Container">
      <p className="leading-[17.942px] relative shrink-0 text-[#101828] text-[11.961px] text-center w-[56.815px]">$100</p>
      <p className="leading-[17.942px] relative shrink-0 text-[#101828] text-[11.961px] text-center w-[20.932px]">2</p>
      <p className="leading-[17.942px] relative shrink-0 text-[#101828] text-[11.961px] text-center w-[53.078px]">$200</p>
      <DiscountValue />
      <TaxValue />
      <p className="leading-[17.942px] relative shrink-0 text-[#101828] text-[11.961px] text-center w-[50.087px]">$5</p>
      <p className="leading-[17.942px] relative shrink-0 text-[#101828] text-[11.961px] text-right w-[29.155px]">$185</p>
    </div>
  );
}

function ItemRowContainer() {
  return (
    <div className="content-stretch flex gap-[17.942px] items-start relative shrink-0 w-full" data-name="Item Row Container">
      <ItemDescriptionContainer1 />
      <ItemDetailsContainer1 />
    </div>
  );
}

function DefaultTemplateTable1() {
  return (
    <div className="relative shrink-0 w-full z-[3]" data-name="Default Template Table">
      <div aria-hidden className="absolute border-[#d0d5dd] border-b-[0.748px] border-l-[0.748px] border-r-[0.748px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8.971px] items-start p-[14.951px] relative size-full">
        <ItemRowContainer />
        <div className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#475467] text-[10.466px] w-full whitespace-pre-wrap">
          <p className="leading-[normal] mb-0">{`	•	All standard keynote sessions and breakout tracks.`}</p>
          <p className="leading-[normal] mb-0">{`	•	Exhibition hall and networking lounges.`}</p>
          <p className="leading-[normal] mb-0">{`	•	Conference mobile app for schedule planning and live updates.`}</p>
          <p className="leading-[normal]">{`	•	Complimentary refreshments during breaks.`}</p>
        </div>
      </div>
    </div>
  );
}

function ItemDescriptionWrapper2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item Description Wrapper">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20.932px] not-italic relative shrink-0 text-[#101828] text-[11.961px] w-full">{` VIP Pass`}</p>
    </div>
  );
}

function ItemDescriptionContainer2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14.951px] items-start min-w-px relative" data-name="Item Description Container">
      <ItemDescriptionWrapper2 />
    </div>
  );
}

function DiscountValue1() {
  return (
    <div className="content-stretch flex flex-col gap-[1.495px] items-start justify-center relative shrink-0" data-name="Discount Value">
      <p className="leading-[17.942px] relative shrink-0 text-[#101828] text-[11.961px] w-[52.33px]">$20</p>
      <p className="leading-[normal] relative shrink-0 text-[#475467] text-[7.476px] uppercase w-[52.33px]">Special2025</p>
    </div>
  );
}

function TaxValue1() {
  return (
    <div className="content-stretch flex flex-col gap-[1.495px] items-start justify-center relative shrink-0" data-name="Tax Value">
      <p className="leading-[17.942px] relative shrink-0 text-[#101828] text-[11.961px] w-[52.33px]">$5%</p>
      <p className="leading-[normal] relative shrink-0 text-[#9aa0b4] text-[7.476px] uppercase w-[52.33px]">CGST</p>
    </div>
  );
}

function ItemDetailsContainer2() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[17.942px] items-start justify-end not-italic relative shrink-0 w-[444.057px]" data-name="Item Details Container">
      <p className="leading-[17.942px] relative shrink-0 text-[#101828] text-[11.961px] text-center w-[56.815px]">$100</p>
      <p className="leading-[17.942px] relative shrink-0 text-[#101828] text-[11.961px] text-center w-[20.932px]">2</p>
      <p className="leading-[17.942px] relative shrink-0 text-[#101828] text-[11.961px] text-center w-[53.078px]">$200</p>
      <DiscountValue1 />
      <TaxValue1 />
      <p className="leading-[17.942px] relative shrink-0 text-[#101828] text-[11.961px] text-center w-[50.087px]">$5</p>
      <p className="leading-[17.942px] relative shrink-0 text-[#101828] text-[11.961px] text-right w-[29.155px]">$185</p>
    </div>
  );
}

function ItemRowContainer1() {
  return (
    <div className="content-stretch flex gap-[17.942px] items-start relative shrink-0 w-full" data-name="Item Row Container">
      <ItemDescriptionContainer2 />
      <ItemDetailsContainer2 />
    </div>
  );
}

function DefaultTemplateTable2() {
  return (
    <div className="relative shrink-0 w-full z-[2]" data-name="Default Template Table">
      <div aria-hidden className="absolute border-[#d0d5dd] border-b-[0.748px] border-l-[0.748px] border-r-[0.748px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8.971px] items-start p-[14.951px] relative size-full">
        <ItemRowContainer1 />
        <div className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#475467] text-[10.466px] w-full whitespace-pre-wrap">
          <p className="leading-[normal] mb-0">{`	•	Priority front-row seating for keynotes and breakout sessions.`}</p>
          <p className="leading-[normal] mb-0">{`	•	Access to exclusive VIP networking lounges and private receptions.`}</p>
          <p className="leading-[normal] mb-0">{`	•	Fast-track registration and express check-in.`}</p>
          <p className="leading-[normal] mb-0">{`	•	Complimentary access to premium workshops.`}</p>
          <p className="leading-[normal]">{`	•	VIP swag bag with event merchandise and partner gifts.`}</p>
        </div>
      </div>
    </div>
  );
}

function ItemDescriptionWrapper3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item Description Wrapper">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20.932px] not-italic relative shrink-0 text-[#101828] text-[11.961px] w-full">{` Group Pass`}</p>
    </div>
  );
}

function ItemDescriptionContainer3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14.951px] items-start min-w-px relative" data-name="Item Description Container">
      <ItemDescriptionWrapper3 />
    </div>
  );
}

function DiscountValue2() {
  return (
    <div className="content-stretch flex flex-col gap-[1.495px] items-start justify-center relative shrink-0" data-name="Discount Value">
      <p className="leading-[17.942px] relative shrink-0 text-[#101828] text-[11.961px] w-[52.33px]">$20</p>
      <p className="leading-[normal] relative shrink-0 text-[#475467] text-[7.476px] uppercase w-[52.33px]">Special2025</p>
    </div>
  );
}

function TaxValue2() {
  return (
    <div className="content-stretch flex flex-col gap-[1.495px] items-start justify-center relative shrink-0" data-name="Tax Value">
      <p className="leading-[17.942px] relative shrink-0 text-[#101828] text-[11.961px] w-[52.33px]">$5%</p>
      <p className="leading-[normal] relative shrink-0 text-[#9aa0b4] text-[7.476px] uppercase w-[52.33px]">CGST</p>
    </div>
  );
}

function ItemDetailsContainer3() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[17.942px] items-start justify-end not-italic relative shrink-0 w-[444.057px]" data-name="Item Details Container">
      <p className="leading-[17.942px] relative shrink-0 text-[#101828] text-[11.961px] text-center w-[56.815px]">$100</p>
      <p className="leading-[17.942px] relative shrink-0 text-[#101828] text-[11.961px] text-center w-[20.932px]">2</p>
      <p className="leading-[17.942px] relative shrink-0 text-[#101828] text-[11.961px] text-center w-[53.078px]">$200</p>
      <DiscountValue2 />
      <TaxValue2 />
      <p className="leading-[17.942px] relative shrink-0 text-[#101828] text-[11.961px] text-center w-[50.087px]">$5</p>
      <p className="leading-[17.942px] relative shrink-0 text-[#101828] text-[11.961px] text-right w-[29.155px]">$185</p>
    </div>
  );
}

function ItemRowContainer2() {
  return (
    <div className="content-stretch flex gap-[17.942px] items-start relative shrink-0 w-full" data-name="Item Row Container">
      <ItemDescriptionContainer3 />
      <ItemDetailsContainer3 />
    </div>
  );
}

function DefaultTemplateTable3() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Default Template Table">
      <div aria-hidden className="absolute border-[#d0d5dd] border-b-[0.748px] border-l-[0.748px] border-r-[0.748px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8.971px] items-start p-[14.951px] relative size-full">
        <ItemRowContainer2 />
        <div className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#475467] text-[10.466px] w-full whitespace-pre-wrap">
          <p className="leading-[normal] mb-0">{`	•	Discounted rate for teams of 5 or more.`}</p>
          <p className="leading-[normal] mb-0">{`	•	Reserved seating for groups in keynote sessions.`}</p>
          <p className="leading-[normal]">{`	•	Dedicated concierge support for group coordination.`}</p>
        </div>
      </div>
    </div>
  );
}

function ItemsContainer() {
  return (
    <div className="relative rounded-[5.981px] shrink-0 w-full" data-name="Items Container">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip relative rounded-[inherit] size-full">
        <DefaultTemplateTable />
        <DefaultTemplateTable1 />
        <DefaultTemplateTable2 />
        <DefaultTemplateTable3 />
      </div>
      <div aria-hidden className="absolute border-[#d0d5dd] border-[0.748px] border-solid inset-0 pointer-events-none rounded-[5.981px]" />
    </div>
  );
}

function SummaryLabels() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[5.981px] items-start min-w-px relative text-[#72788c]" data-name="Summary Labels">
      <p className="relative shrink-0 w-full">Sub Total</p>
      <p className="relative shrink-0 w-full">Discount(0%)</p>
      <p className="relative shrink-0 w-full">VAT(5%)</p>
    </div>
  );
}

function SummaryValues() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[5.981px] items-end min-w-px relative text-[#101828] text-right" data-name="Summary Values">
      <p className="relative shrink-0 w-full">$5500</p>
      <p className="relative shrink-0 w-full">$0</p>
      <p className="relative shrink-0 w-full">$275</p>
    </div>
  );
}

function SummaryDetailsContent() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[17.942px] items-start leading-[17.942px] not-italic overflow-clip relative shrink-0 text-[11.961px] w-full" data-name="Summary Details Content">
      <SummaryLabels />
      <SummaryValues />
    </div>
  );
}

function AmountDueContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Amount Due Container">
      <div className="[word-break:break-word] content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold items-center justify-between leading-[26.913px] not-italic overflow-clip py-[8.971px] relative rounded-[inherit] size-full text-[#101828] text-[17.942px] text-right tracking-[-0.3738px] whitespace-nowrap">
        <p className="relative shrink-0">Total Amount</p>
        <p className="relative shrink-0">$5775</p>
      </div>
      <div aria-hidden className="absolute border-[#d0d5dd] border-b-[0.748px] border-solid border-t-[0.748px] inset-0 pointer-events-none" />
    </div>
  );
}

function SummaryDetailsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[11.961px] items-start relative shrink-0 w-full" data-name="Summary Details Container">
      <SummaryDetailsContent />
      <AmountDueContainer />
    </div>
  );
}

function PaymentStatusContainer() {
  return (
    <div className="bg-[rgba(28,187,57,0.1)] h-[32.893px] relative rounded-[5.981px] shrink-0 w-full" data-name="Payment Status Container">
      <div aria-hidden className="absolute border-[#1cbb39] border-[0.748px] border-solid inset-0 pointer-events-none rounded-[5.981px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10.466px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-none not-italic relative shrink-0 text-[#1cbb39] text-[11.961px] text-center w-[352.106px]">This Invoice is Paid</p>
        </div>
      </div>
    </div>
  );
}

function SummaryContainer() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Summary Container">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col gap-[29.903px] items-end pr-[14.951px] relative size-full">
          <SummaryDetailsContainer />
          <PaymentStatusContainer />
        </div>
      </div>
    </div>
  );
}

function PaymentInfoContainer() {
  return (
    <div className="content-stretch flex gap-[23.922px] items-center relative shrink-0 w-[386px]" data-name="Payment Info Container">
      <SummaryContainer />
    </div>
  );
}

function InvoiceTitleWrapper() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Invoice Title Wrapper">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[29.903px] not-italic relative shrink-0 text-[#101828] text-[32px] text-right tracking-[-0.3738px] whitespace-nowrap">Invoice</p>
    </div>
  );
}

function InvoiceTitleContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[468px]" data-name="Invoice Title Container">
      <InvoiceTitleWrapper />
    </div>
  );
}

function Ffffffff() {
  return (
    <div className="absolute inset-[0.03%_75.72%_0.4%_0]" data-name="#ffffffff">
      <svg className="absolute block inset-0 size-full" fill="none" height="29.8711" preserveAspectRatio="none" viewBox="0 0 33.0212 29.8711" width="33.0212">
        <g id="#ffffffff">
          <path d={svgPaths.p7b11f00} fill="#105EFB" id="Path 1486" />
          <path d={svgPaths.p1f482600} fill="#105EFB" id="Path 1487" />
          <path d={svgPaths.p202f8600} fill="#105EFB" id="Path 1488" />
          <path d={svgPaths.p37fcf480} fill="#105EFB" id="Path 1489" />
        </g>
      </svg>
    </div>
  );
}

function Ffffffff1() {
  return (
    <div className="absolute inset-[0_0_0_31.21%]" data-name="#ffffffff">
      <svg className="absolute block inset-0 size-full" fill="none" height="30" preserveAspectRatio="none" viewBox="0 0 93.5564 30" width="93.5564">
        <g id="#ffffffff">
          <path d={svgPaths.p2470f200} fill="#475467" id="Path 1490" />
          <path d={svgPaths.p346de300} fill="#475467" id="Path 1491" />
          <path d={svgPaths.p3e8163f0} fill="#475467" id="Path 1492" />
          <path d={svgPaths.p36666c00} fill="#475467" id="Path 1493" />
          <path d={svgPaths.p13fd6c40} fill="#475467" id="Path 1494" />
          <path d={svgPaths.p16d40c00} fill="#475467" id="Path 1495" />
          <path d={svgPaths.p9f9e100} fill="#475467" id="Path 1496" />
          <path d={svgPaths.p25de1e70} fill="#475467" id="Path 1497" />
          <path d={svgPaths.p246ac500} fill="#475467" id="Path 1498" />
        </g>
      </svg>
    </div>
  );
}

function EventInfoContainer1() {
  return (
    <div className="content-stretch flex h-[96px] items-center justify-between relative shrink-0 w-[259px]" data-name="Event Info Container">
      <div className="h-[42px] relative shrink-0 w-[94px]" data-name="Teks-logo-vector 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[221.03%] left-[12.5%] max-w-none top-[-49.04%] w-full" src={imgTeksLogoVector1} />
        </div>
      </div>
      <div className="h-[30px] relative shrink-0 w-[136px]" data-name="Logo">
        <Ffffffff />
        <Ffffffff1 />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 pl-[24px] pr-[32px] top-0 w-[794px]">
      <InvoiceTitleContainer />
      <EventInfoContainer1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[70px] left-0 top-0 w-[794px]">
      <div className="-translate-x-1/2 absolute bg-[#fbfcfe] h-[70px] left-1/2 top-0 w-[794px]" />
      <Frame />
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[29.903px] items-end pb-[32px] pt-[99.9px] px-[32px] relative size-full" data-name="Page 3">
      <HeaderContainer />
      <ItemsContainer />
      <PaymentInfoContainer />
      <Frame2 />
    </div>
  );
}