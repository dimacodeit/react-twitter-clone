import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

export interface IConfirmDialogProps {
  isOpen: boolean;
  titleText: string;
  bodyText?: string;
  onConfirm: () => void;
  onReject: () => void;
}

export default function ConfirmDialog(props: IConfirmDialogProps) {
  return (
    <Dialog open={props.isOpen}>
      <DialogTitle>{props.titleText}</DialogTitle>
      {props.bodyText ? (
        <DialogContent>
          <DialogContentText>{props.bodyText}</DialogContentText>
        </DialogContent>
      ) : null}
      <DialogActions>
        <Button onClick={props.onReject}>Cancel</Button>
        <Button onClick={props.onConfirm}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
}
