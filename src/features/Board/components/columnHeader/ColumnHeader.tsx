import { OutlinedButton } from '../../../../components/button';

type Props = {
  handleAddColumn: () => void;
};

export const ColumnHeader = ({ handleAddColumn }: Props) => (
  <OutlinedButton handleAddColumn={handleAddColumn}>
    + Add column
  </OutlinedButton>
);
