import React from "react";
import Column from "../elements/column";
import AccordionItem from "../elements/accordion-item";
import { websiteConfig } from "@/websiteConfig";

type Props = {};

const data = [
  {
    title: "Annual Percentage Rate (APR)",
    content: `Here at Techyreserve we offer APR rates ranging from 4.95% minimum to 35.95% maximum. The APR you may be offered depends on different factors, including your personal situation and financial standing. By completing our loan offer form you shall receive details of the APR and full terms of any loan offered to you.
The actual interest rate you may be offered depends on several factors: your credit score, financial history, income, etc. Contact your lender for more information about the APR you may receive and the terms of your loan agreement.`,
  },
  {
    title: `Loan Term (Repayment Period)`,
    content: `<table class="border"><tbody><tr ><td class="p-3 border">Minimum</td><td class="p-3 border">Maximum</td></tr><tr><td class="p-3 border">90 days</td><td class="p-3 border">84 months</td></tr></tbody></table>`,
  },
  {
    title: `Representative Example of APR`,
    content: `If you borrow $2,500 over a term of 1 year with an APR of 10% and a fee of 3%, you will pay $219,79 each month. The total amount payable will be $2,637, with a total interest of $137,48.`,
  },
  {
    title: `Financial Implications (Interest & Finance Charges)`,
    content: `
   Techyreserve is not a lender and we cannot predict what fees and interest rate will be applied to the loan you will be offered. It is your lender that will provide all the necessary information about the cost of the loan. It is your responsibility to peruse the loan agreement carefully and accept the offer only if you agree to all the terms. Techyreserve service is free of charge, and you are under no obligation to accept the terms that the lender offers you.>
    `,
  },
  {
    title: `Implications of Non-Payment`,
    content: `When you accept the terms and conditions for a loan, you enter into a commitment to repay the amount you owe according to the specific schedule outlined in the documents. In the event of non-payment, additional charges may be applied. Late payment penalties vary by lender, and as Techyreserve is not involved in the lending process, we cannot supply any information on the fees you will incur if any default occurs. For more information, please contact the lender directly if you have any issues relating to your loan repayment.`,
  },
  {
    title: `Potential Impact on Credit Score`,
    content: `Techyreserve is not a lender and we do not check your credit standing and credit capacity. When you submit a request at our online platform, this is considered a soft inquiry and does not impact your credit score. However, some lenders may carry out a credit check to ascertain your eligibility for a loan. Most likely they will turn to any of the three major credit bureaus (Transunion, Experian, and Equifax) that is in most cases considered a hard inquiry and may affect your credit score.`
  },
  {
    title: `Collection Practices`,
    content: `Techyreserve is not a lender. As such, we are not involved in any debt collection practices and cannot make you aware of any of them. Your lender will specify their collection practices in your loan agreement. If you have any questions regarding the issue, please, address them to your lender. For more information visit our page for Responsible Lending. techyreserve.com itself isn’t involved in debt collection.`
  },
  {
    title: `Loan Renewal Policies`,
    content: `Loan renewal options are not always available. It is therefore advisable to clarify whether the option is available with your lender. Be sure to carefully peruse the renewal policy presented in the agreement before you sign the documents.`
  },
];
const FAQ = (props: Props) => {
  return (
    <div>
      <Column className="my-container lg:!py-24 gap-6 lg:gap-24">
        <div className="text-center font-semibold text-xl text-main">FAQ</div>
        <div className=" text-3xl lg:text-5xl font-medium text-center max-w-[700px] mx-auto">
          Have A Question? We Have The Answer!{" "}
        </div>

        <Column className=" gap-6">
          {data.map((item, key) => (
            <div key={key}>
              <AccordionItem data={item} defaultOpen={key < 3 ? true : false} />
            </div>
          ))}
        </Column>
      </Column>
    </div>
  );
};

export default FAQ;
