import React from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

import {Photo} from './Photo';

export const SortablePhoto = (props) => {
  const sortable = useSortable({id: props.url});
  const {
    attributes,
    listeners,
    setNodeRef,
  } = sortable;

  return (
    <Photo
      ref={setNodeRef}
      {...props}
      {...attributes}
      {...listeners}
    />
    
  );
}; 
