import React from 'react'
import Column from '../elements/column'
import Row from '../elements/row'
import { GoDotFill } from 'react-icons/go'

type Props = {}

const Price = (props: Props) => {
  return (
    <div className='bg-secondary'>
      <div className='my-container !py-24 grid grid-cols-1 md:grid-cols-3 gap-6 justify-center items-center'>
        {/* section-1 */}
        <Column className='items-center justify-center'>
          <div className='text-4xl font-bold'>Honest Rates, No Hidden Fees.
          </div>
          <div>Applying for a loan takes only 2 minutes. Everything is done online. With our paperless loan, you won’t have to send any documents!</div>
        </Column>

        {/* section-2 */}
        <Column className='p-6  h-[450px] justify-between bg-main rounded-lg max-w-[400px] mx-auto w-full'>
          <Column className='gap-6'>
            <div className='text-4xl font-bold'>Small Loan</div>
            <Column gap={3}>
              <Row>
                <GoDotFill />
                <div>15$ per 100$ every 14 days</div>
              </Row>
              <Row>
                <GoDotFill />
                <div>90-Day Repayment Period</div>
              </Row>
              <Row>
                <GoDotFill />
                <div>575$ Payback on a 500$ Loan</div>
              </Row>
            </Column>
          </Column>

          <Column className='gap-6'>
            <div className='font-bold'> <span className='text-4xl font-bold'>$500</span> loan</div>
            <a href="/form-loan">
              <button className='bg-darkNavy text-main p-3 rounded-lg font-bold'>Request A Loan</button>
            </a>
          </Column>
        </Column>
        {/* section-2 */}
        <Column className='p-6 h-[450px] justify-between bg-main rounded-lg max-w-[400px] mx-auto w-full'>
          <Column className='gap-6'>
            <div className='text-4xl font-bold'>Large Loan            </div>
            <Column gap={3}>
              <Row>
                <GoDotFill />
                <div>15$ per 100$ every 14 days</div>
              </Row>
              <Row>
                <GoDotFill />
                <div>90-Day Repayment Period</div>
              </Row>
              <Row>
                <GoDotFill />
                <div>575$ Payback on a 500$ Loan</div>
              </Row>
            </Column>
          </Column>

          <Column className='gap-6'>
            <div className='font-bold'> <span className='text-4xl font-bold'>$1000</span> loan</div>
            <a href="/form-loan">
              <button className='bg-darkNavy text-main p-3 rounded-lg font-bold'>Request A Loan</button>
            </a>
          </Column>
        </Column>
      </div>
    </div>
  )
}

export default Price