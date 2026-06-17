import React, { type SVGProps } from "react";

export const ChatLogo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
    >
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>

      <circle cx="256" cy="256" r="220" fill="url(#g)" />

      <path
        d="M180 180h110c24 0 44 20 44 44s-20 44-44 44h-54l-56 64v-64c-24 0-44-20-44-44s20-44 44-44z"
        fill="white"
        opacity="0.95"
      />

      <path
        d="M332 228h24c20 0 36 16 36 36s-16 36-36 36h-16l-36 40v-40c-20 0-36-16-36-36"
        fill="none"
        stroke="white"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle cx="225" cy="224" r="10" fill="#4F46E5" />
      <circle cx="257" cy="224" r="10" fill="#4F46E5" />
      <circle cx="289" cy="224" r="10" fill="#4F46E5" />
    </svg>
  );
};


export const UnderEye = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>{/* Icon from Material Symbols Light by Google - https://github.com/google/material-design-icons/blob/master/LICENSE */}<path fill="currentColor" d="M12 18.23q-3.39 0-6.084-1.846T2 11.596q1.146-2.863 3.849-4.74Q8.552 4.982 12 4.982q3.41 0 6.093 1.847Q20.777 8.675 22 11.616q-1.146 2.863-3.849 4.739T12 18.23m-7.29 1.68q-.854-.592-1.537-1.299q-.683-.706-1.144-1.56l.884-.488q.42.725 1.013 1.365t1.368 1.165zm1.91 1.033l.488-.905q.88.355 1.87.595q.991.241 2.041.316l-.038 1.02q-1.189-.081-2.274-.34t-2.088-.686M12 15.462q1.587 0 2.716-1.13t1.13-2.716q0-1.606-1.13-2.726T12 7.77T9.284 8.89t-1.13 2.726q0 1.586 1.13 2.716T12 15.462m0-.82q-1.26 0-2.143-.893t-.884-2.133q0-1.26.884-2.144q.883-.883 2.143-.883t2.143.883q.884.884.884 2.144q0 1.24-.884 2.133T12 14.642m1.039 7.327L13 20.95q1.05-.075 2.021-.315t1.871-.596l.489.905q-.914.393-2.04.669q-1.128.276-2.303.356m6.252-2.057l-.584-.823q.775-.545 1.378-1.173q.603-.627 1.003-1.352l.884.469q-.442.834-1.125 1.56q-.682.726-1.555 1.319" /></svg>
  )
}

export const UnderEyeOutline = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>{/* Icon from Material Symbols Light by Google - https://github.com/google/material-design-icons/blob/master/LICENSE */}<path fill="currentColor" d="M12 18.23q-3.39 0-6.084-1.846T2 11.596q1.146-2.863 3.849-4.74Q8.552 4.982 12 4.982q3.41 0 6.093 1.847Q20.777 8.675 22 11.616q-1.146 2.863-3.849 4.739T12 18.23m-7.29 1.68q-.854-.592-1.537-1.299q-.683-.706-1.144-1.56l.884-.488q.42.725 1.013 1.365t1.368 1.165zM12 17.23q2.99 0 5.302-1.504t3.62-4.111q-1.309-2.627-3.62-4.131T12 5.98T6.698 7.485t-3.6 4.13q1.288 2.608 3.6 4.112Q9.009 17.231 12 17.231m-5.38 3.713l.488-.905q.88.355 1.87.595q.991.241 2.041.316l-.038 1.02q-1.189-.081-2.274-.34t-2.088-.686M12 15.462q1.587 0 2.716-1.13t1.13-2.716q0-1.606-1.13-2.726T12 7.77T9.284 8.89t-1.13 2.726q0 1.586 1.13 2.716T12 15.462m0-.82q-1.26 0-2.143-.893t-.884-2.133q0-1.26.884-2.144q.883-.883 2.143-.883t2.143.883q.884.884.884 2.144q0 1.24-.884 2.133T12 14.642m1.039 7.327L13 20.95q1.05-.075 2.021-.315t1.871-.596l.489.905q-.914.393-2.04.669q-1.128.276-2.303.356m6.252-2.057l-.584-.823q.775-.545 1.378-1.173q.603-.627 1.003-1.352l.884.469q-.442.834-1.125 1.56q-.682.726-1.555 1.319M12 11.616" /></svg>
  )
}

export const Search = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>{/* Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE */}<path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14" /></svg>
  )
}


export const Send=(props: SVGProps<SVGSVGElement>) =>{
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>{/* Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE */}<path fill="currentColor" d="M4.4 19.425q-.5.2-.95-.088T3 18.5V14l8-2l-8-2V5.5q0-.55.45-.837t.95-.088l15.4 6.5q.625.275.625.925t-.625.925z" /></svg>
  )
}