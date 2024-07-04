import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Modal,
  Fade,
  Divider,
  IconButton,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTheme, styled } from '@mui/material/styles';

interface CreateBlockModalProps {
  open: boolean;
  handleClose: () => void;
}

const CustomRadio = styled(Radio)(({ theme }) => ({
  color: theme.palette.text.primary,
  '&.Mui-checked': {
    color: theme.palette.text.primary,
  },
}));

const CreateCenterModal: React.FC<CreateBlockModalProps> = ({
  open,
  handleClose,
}) => {
  const { t } = useTranslation();
  const theme = useTheme<any>();

  const [centerName, setCenterName] = useState<string>('');
  const [centerType, setCenterType] = useState<string>('Regular');

  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCenterName(event.target.value);
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCenterType(event.target.value);
  };

  const handleCreateButtonClick = () => {
    console.log('Entered Center Name:', centerName);
    console.log('Selected Center Type:', centerType);

    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose} closeAfterTransition>
      <Fade in={open}>
        <Box
          sx={{
            backgroundColor: 'white',
            boxShadow: 24,
            maxWidth: 400,
            width: '90%',
            margin: 'auto',
            borderRadius: 3,
            outline: 'none',
            p: 2,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 1,
            }}
          >
            <Typography
              variant="h2"
              gutterBottom
              color={theme?.palette?.text?.primary}
            >
              {t('CENTERS.NEW_CENTER')}
            </Typography>
            <IconButton
              onClick={handleClose}
              sx={{ color: theme?.palette?.text?.primary }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider sx={{ mb: 2, mx: -2 }} />
          <FormControl component="fieldset" sx={{ mb: 2 }}>
            <FormLabel sx={{ fontSize: '12px' }} component="legend">{t('CENTERS.CENTER_TYPE')}</FormLabel>
            <RadioGroup
              row
              value={centerType}
              onChange={handleRadioChange}
            >
              <FormControlLabel
                value="Regular"
                control={<CustomRadio />}
                label={t('CENTERS.REGULAR')}
              />
              <FormControlLabel
                value="Remote"
                control={<CustomRadio />}
                label={t('CENTERS.REMOTE')}
              />
            </RadioGroup>
          </FormControl>
          <TextField
            fullWidth
            label={t('CENTERS.UNIT_NAME')}
            id="outlined-size-normal"
            sx={{ mb: 1, mt: 2 }}
            value={centerName}
            onChange={handleTextFieldChange}
          />
          <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
            {t('CENTERS.NOTE')}
          </Typography>
          <Divider sx={{ mb: 2, mx: -2 }} />
          <Button
            variant="outlined"
            onClick={handleCreateButtonClick}
            sx={{
              width: '100%',
              border: 'none',
              backgroundColor: theme?.palette?.primary?.main,
              mb: 2,
            }}
          >
            {t('BLOCKS.CREATE')}
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
};

export default CreateCenterModal;