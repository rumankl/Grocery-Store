import { Timeline, TimelineBody, TimelineConnector, TimelineHeader, TimelineIcon, TimelineItem, Typography } from '@material-tailwind/react'
import React from 'react'

const Timelines = () => {
  return (
    <div className='bg-gray-100 flex flex-col-2 justify-center p-4 mb-10   sm:items-center '>

      <div className="">
        <img className='h-96 w-86  object-cover object-center'
          src="https://hire4event.com/blogs/wp-content/uploads/2019/05/Event-Management-Proposal-Hire4event.jpg"
          alt="" />
      </div>
      <div className="w-[32rem] pl-4  ">
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography variant="h6" color="blue-gray" className="leading-none">
                Timeline Title Here.
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography variant="small" color="gary" className="font-normal text-gray-600">
                The key to more success is to have a lot of pillows. Put it this way, it took me
                twenty five years to get these plants, twenty five years of blood sweat and tears, and
                I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                luv.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography variant="h6" color="blue-gray" className="leading-none">
                Timeline Title Here.
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography variant="small" color="gary" className="font-normal text-gray-600">
                The key to more success is to have a lot of pillows. Put it this way, it took me
                twenty five years to get these plants, twenty five years of blood sweat and tears, and
                I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                luv.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography variant="h6" color="blue-gray" className="leading-none">
                Timeline Title Here.
              </Typography>
            </TimelineHeader>
            <TimelineBody>
              <Typography variant="small" color="gary" className="font-normal text-gray-600">
                The key to more success is to have a lot of pillows. Put it this way, it took me
                twenty five years to get these plants, twenty five years of blood sweat and tears, and
                I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                luv.
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  )
}

export default Timelines
