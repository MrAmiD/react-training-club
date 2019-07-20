import styled from 'styled-components';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useFooterStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper
    }
  })
);

export const FooterWrapper = styled.div`
  display: flex;
`;
