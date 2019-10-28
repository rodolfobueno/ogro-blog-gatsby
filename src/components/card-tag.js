import React from 'react'
import styled from 'styled-components'
import { Tag } from 'styled-icons/boxicons-regular/Tag'

const CardTag = ({ tags }) => (
    <div class="box-tags pt-2">
      <TagIcon />
        {tags.map( tag  => <span>{tag.nome}</span>)}
    </div>
)

export const TagIcon = styled(Tag)`
  display: block;
  margin-right: 5px;
  width: 12px;
`

export default CardTag
