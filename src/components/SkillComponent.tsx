import * as React from 'react';

export default function SkillComponent(props: any) {
  return (
    <div className="items-center px-4">
      <img src={props.img} className="w-20 max-h-20 mx-auto" alt={props.name}></img>
      <p className='text-gray-300 text-center py-1'>{props.name}</p>
    </div>
  );
}