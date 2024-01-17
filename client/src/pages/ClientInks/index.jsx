import React from 'react';
import { Container, ContainerMaster, Title } from './style';

import {
  inkJohnDeere,
  inkCaterpillar,
  inkJacto,
  inkCnh,
  inkVolvo,
  inkCrucianelli,
} from '../../data/paints';
import ButtonToCatali from '../../components/ButtonToCatali/ButtonToCatali';

import Header from '../../components/Header';
import { useParams } from 'react-router-dom';

export default function CliientInks() {
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

        case 'jactosherwinprimer':
          setTest('jactosherwinprimer');
          break;

        case 'cnhsherwinesmalte':
          setTest('cnhsherwinesmalte');
          break;

        case 'cnhppgesmalte':
          setTest('cnhppgesmalte');
          break;

        case 'volvosherwinesmalte':
          setTest('volvosherwinesmalte');
          break;

        case 'volvosherwinprimer':
          setTest('volvosherwinprimer');
          break;

        case 'crucianellisherwinesmalte':
          setTest('crucianellisherwinesmalte');
          break;

        case 'crucianellisherwinprimer':
          setTest('crucianellisherwinprimer');
          break;

        default:
          setTest(null);
          break;
      }
    }

    seeInk(parans.id, parans.for, parans.type);
  }, [parans.id, parans.for, parans.type]);

  const inkCrucianelliPrimer = inkCrucianelli[0].sherwin[0].primer.map(
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

  const inkCrucianelliEsmalt = inkCrucianelli[0].sherwin[0].esmalte.map(
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

  const inkJdPpgPrimer = inkJohnDeere[0].ppg[0].primer.map(
    ({ ink, code, color, micras, potlife, catalisador }, i) => {
      <ButtonToCatali
        key={i}
        ink={ink}
        code={code}
        color={color}
        micras={micras}
        potlife={potlife}
        catalisador={catalisador}
      />;
    }
  );

  const inkCnhSherEsmalt = inkCnh[0].sherwin[0].esmalte.map(
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

  const inkCnhPpgEsmalt = inkCnh[0].ppg[0].esmalte.map(
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

  const inkVolvoSherEsmalt = inkVolvo[0].sherwin[0].esmalte.map(
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

  const inkVolvoSherPrimer = inkVolvo[0].sherwin[0].primer.map(
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

  const inkJactoSherPrimer = inkJacto[0].sherwin[0].primer.map(
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
        <Container>{inkJdPpgPrimer}</Container>
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
      ) : test === 'jactosherwinprimer' ? (
        <Container>{inkJactoSherPrimer}</Container>
      ) : test === 'cnhsherwinesmalte' ? (
        <Container>{inkCnhSherEsmalt}</Container>
      ) : test === 'cnhppgesmalte' ? (
        <Container>{inkCnhPpgEsmalt}</Container>
      ) : test === 'volvosherwinesmalte' ? (
        <Container>{inkVolvoSherEsmalt}</Container>
      ) : test === 'volvosherwinprimer' ? (
        <Container>{inkVolvoSherPrimer}</Container>
      ) : test === 'crucianellisherwinesmalte' ? (
        <Container>{inkCrucianelliEsmalt}</Container>
      ) : test === 'crucianellisherwinprimer' ? (
        <Container>{inkCrucianelliPrimer}</Container>
      ) : (
        'sem tinta :('
      )}
    </ContainerMaster>
  );
}
