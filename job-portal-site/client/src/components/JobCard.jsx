/* eslint-disable react/prop-types */

import dayjs from 'dayjs'

function JobCard(props) {
    // const skills = ["Javascript", "React", "Nodejs"];
    const date1 = dayjs(Date.now());
    const diffInDays = date1.diff(props.postedOn,'day');
  return (
    <div className="mb-4 mx-4 md:mx-20 lg:mx-40">
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-6 py-4 bg-zinc-900 text-white rounded-md border border-gray-600 shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-105 transition-all duration-200 ease-in-out">
    <div className="flex flex-col items-start gap-3">
      <h1 className="text-lg font-semibold">{props.title} - {props.company}</h1>
      <p className="text-sm text-gray-300">{props.type} &#x2022; {props.experience} &#x2022; {props.location}</p>
      <div className="flex flex-wrap items-center gap-2">
        {props.skills.map((skill, i) => (
          <p key={i} className="text-gray-400 py-1 px-2 rounded-md border border-gray-600">
            {skill}
          </p>
        ))}
      </div>
    </div>
    <div className="mt-4 md:mt-0 flex flex-col md:flex-row items-start md:items-center gap-4">
      <p className="text-gray-400">Posted {diffInDays > 1 ? `${diffInDays} days` : `${diffInDays} day`} ago</p>
      <a href={props.job_link} target="_blank" rel="noopener noreferrer">
        <button className="text-white bg-blue-500 hover:bg-blue-400 border border-blue-500 px-10 py-2 rounded-md">
          Apply
        </button>
      </a>
    </div>
  </div>
</div>

  )
}

export default JobCard