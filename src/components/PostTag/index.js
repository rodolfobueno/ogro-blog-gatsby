import React from 'react'
import styled from 'styled-components'
import { Tag } from 'styled-icons/boxicons-regular/Tag'

const PostTag = ({ tags, ...props }) => (
    <div className={`box-tags ${ props.className ? props.className : ''  } ` }>
      <TagIcon />
        {tags.map( tag  => <span>{tag.nome}</span>)}
    </div>
)

export const TagIcon = styled(Tag)`
  display: block;
  margin-right: 5px;
  width: 12px;
`

export default PostTag
