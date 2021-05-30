import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import React from 'react';

type MyFunctionType = () => void;

type Props = {
  handleClose: MyFunctionType;
  open: boolean;
};

const Modal: React.FunctionComponent<Props> = ({ handleClose, open }) => {
  const [name, setName] = React.useState<string>('');
  const [email, setEmail] = React.useState('');
  const [description, setDescription] = React.useState('');
  const submitForm = async () => {
    const payload = {
      text:
        `${'お問い合わせがありました\n' + 'お名前: '}${name}\n` +
        `メールアドレス: ${email}\n` +
        `【問い合わせ内容】\n${description}`,
    };

    await fetch(
      'https://hooks.slack.com/services/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',
      {
        method: 'POST',
        body: JSON.stringify(payload),
      },
    ).then(() => {
      alert('送信が完了しました、追ってご連絡します');
      setName('');
      setEmail('');
      setDescription('');

      return handleClose;
    });
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">お問い合わせフォーム</DialogTitle>
        <DialogContent>
          <DialogContentText>
            お問い合わせがある場合は以下のフォームに記入をお願いします。
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="名前"
            fullWidth
            type="name"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email アドレス"
            type="email"
            fullWidth
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <TextField
            autoFocus
            margin="dense"
            id="content"
            label="お問い合わせ内容"
            type="text"
            fullWidth
            multiline
            rows={5}
            value={description}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDescription(e.target.value)
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            キャンセル
          </Button>
          <Button onClick={submitForm} color="primary">
            送信
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Modal;
