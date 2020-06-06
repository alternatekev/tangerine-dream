import {FC} from 'react'

import {Button, ButtonProps} from '@td/components'
import {
  t, 
  prepareStyles
} from '@td/styles'

interface Props extends ButtonProps {
  editing?: boolean
  setEditing(): void
}

const styles = prepareStyles({
  EditPageButton: {
    ...t.fixed,
    top: 10,
    right: 10
  }
})

export const EditPageButton: FC<Props> = ({
  setEditing,
  editing,
  ...rest
}: Props) =>
  <Button
    unicorn={styles.EditPageButton}
    compact
    level={1}
    onClick={setEditing}
    size={1}
    font={{
      weight: 300
    }}
    {...rest}
  >
    {editing ? 'Cancel' : 'Edit Page'}
  </Button>
