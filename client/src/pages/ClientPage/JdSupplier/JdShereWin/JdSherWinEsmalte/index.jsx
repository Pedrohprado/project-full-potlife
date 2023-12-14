import React from 'react';
import { Container, ContainerMaster, Title } from './style';

import {
  inkJohnDeere,
  inkCaterpillar,
  inkJacto,
} from '../../../../../data/paints';
import ButtonToCatali from '../../../../../components/ButtonToCatali/ButtonToCatali';

import 'react-confirm-alert/src/react-confirm-alert.css';

import Header from '../../../../../components/Header';
import { useParams } from 'react-router-dom';

export default function JdSherWinEsmalte() {
  const parans = useParams();

  const [test, setTest] = React.useState(null);

  React.useEffect(() => {
    function seeInk(_client, _for, _type) {
      switch (_client + _for + _type) {
        case 'johndeeresherwinesmalte':
          setTest('johndeeresherwinesmalte');
          break;

        case 'johndeeresherwinprimer':
          setTest('johndeeresherwinprimer');
          break;

        case 'johndeereppgesmalte':
          setTest('johndeereppgesmalte');
          break;

        case 'johndeereppgprimer':
          setTest('johndeereppgprimer');
          break;

        case 'caterpillarsherwinesmalte':
          setTest('caterpillarsherwinesmalte');
          break;

        case 'caterpillarsherwinprimer':
          setTest('caterpillarsherwinprimer');
          break;

        case 'caterpillarppgesmalte':
          setTest('caterpillarppgesmalte');
          break;
        case 'caterpillarppgprimer':
          setTest('caterpillarppgprimer');
          break;

        case 'jactosherwinesmalte':
          setTest('jactosherwinesmalte');
          break;

        default:
          setTest(null);
          break;
      }
    }

    seeInk(parans.id, parans.for, parans.type);
  }, [parans.id, parans.for, parans.type]);

  const inkJdSherEsmalt = inkJohnDeere[0].sherwin[0].esmalte.map(
    ({ ink, code, color, micras, potlife, catalisador }, i) => (
      <ButtonToCatali
        key={i}
        ink={ink}
        code={code}
        color={color}
        micras={micras}
        potlife={potlife}
        catalisador={catalisador}
      />
    )
  );

  const inkJdSherPrimer = inkJohnDeere[0].sherwin[0].primer.map(
    ({ ink, code, color, micras, potlife, catalisador }, i) => (
      <ButtonToCatali
        key={i}
        ink={ink}
        code={code}
        color={color}
        micras={micras}
        potlife={potlife}
        catalisador={catalisador}
      />
    )
  );

  const inkJdPpgEsmalt = inkJohnDeere[0].ppg[0].esmalte.map(
    ({ ink, code, color, micras, potlife, catalisador }, i) => (
      <ButtonToCatali
        key={i}
        ink={ink}
        code={code}
        color={color}
        micras={micras}
        potlife={potlife}
        catalisador={catalisador}
      />
    )
  );

  const inkCatSherEsmalt = inkCaterpillar[0].sherwin[0].esmalte.map(
    ({ ink, code, color, micras, potlife, catalisador }, i) => (
      <ButtonToCatali
        key={i}
        ink={ink}
        code={code}
        color={color}
        micras={micras}
        potlife={potlife}
        catalisador={catalisador}
      />
    )
  );

  const inkCatSherPrimer = inkCaterpillar[0].sherwin[0].primer.map(
    ({ ink, code, color, micras, potlife, catalisador }, i) => (
      <ButtonToCatali
        key={i}
        ink={ink}
        code={code}
        color={color}
        micras={micras}
        potlife={potlife}
        catalisador={catalisador}
      />
    )
  );

  const inkCatPpgEsmalt = inkCaterpillar[0].ppg[0].esmalte.map(
    ({ ink, code, color, micras, potlife, catalisador }, i) => (
      <ButtonToCatali
        key={i}
        ink={ink}
        code={code}
        color={color}
        micras={micras}
        potlife={potlife}
        catalisador={catalisador}
      />
    )
  );

  const inkCatPpgPrimer = inkCaterpillar[0].ppg[0].primer.map(
    ({ ink, code, color, micras, potlife, catalisador }, i) => (
      <ButtonToCatali
        key={i}
        ink={ink}
        code={code}
        color={color}
        micras={micras}
        potlife={potlife}
        catalisador={catalisador}
      />
    )
  );

  const inkJactoSherEsmalt = inkJacto[0].sherwin[0].esmalte.map(
    ({ ink, code, color, micras, potlife, catalisador }, i) => (
      <ButtonToCatali
        key={i}
        ink={ink}
        code={code}
        color={color}
        micras={micras}
        potlife={potlife}
        catalisador={catalisador}
      />
    )
  );

  return (
    <ContainerMaster>
      <Header />
      <Title>Selecione a tinta</Title>
      {test === 'johndeeresherwinesmalte' ? (
        <Container>{inkJdSherEsmalt}</Container>
      ) : test === 'johndeeresherwinprimer' ? (
        <Container>{inkJdSherPrimer}</Container>
      ) : test === 'johndeereppgesmalte' ? (
        <Container>{inkJdPpgEsmalt}</Container>
      ) : test === 'johndeereppgprimer' ? (
        'Sem tinta aqui!'
      ) : test === 'caterpillarsherwinesmalte' ? (
        <Container>{inkCatSherEsmalt}</Container>
      ) : test === 'caterpillarsherwinprimer' ? (
        <Container>{inkCatSherPrimer}</Container>
      ) : test === 'caterpillarppgesmalte' ? (
        <Container>{inkCatPpgEsmalt}</Container>
      ) : test === 'caterpillarppgprimer' ? (
        <Container>{inkCatPpgPrimer}</Container>
      ) : test === 'jactosherwinesmalte' ? (
        <Container>{inkJactoSherEsmalt}</Container>
      ) : (
        'sem tinta'
      )}
    </ContainerMaster>
  );
}
