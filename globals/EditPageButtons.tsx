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
  CancelButton: {
    ...t.fixed,
    top: 12.5,
    right: 95,
    zIndex: 900,
    transform: 'translateZ(0)'
  },
  SavePageButton: {
    ...t.fixed,
    top: 12.5,
    right: 12.5,
    zIndex: 900,
    transform: 'translateZ(0)'
  }
})

export const EditPageButtons: FC<Props> = ({
  setEditing,
  editing,
  ...rest
}: Props) =>
  <>{editing && 
    <Button
      unicorn={styles.CancelButton}
      compact
      level={1}
      onClick={setEditing}
      size={1}
      font={{
        weight: 300
      }}
      {...rest}
    >
     Cancel
    </Button>
   }
    <Button
        unicorn={styles.SavePageButton}
        compact
        inverted
        level={editing ? 7 : 1}
        onClick={setEditing}
        size={1}
        font={{
          weight: 300
        }}
        {...rest}
      >
        {editing ? 'Publish' : 'Edit Page'}
      </Button>
 </>
