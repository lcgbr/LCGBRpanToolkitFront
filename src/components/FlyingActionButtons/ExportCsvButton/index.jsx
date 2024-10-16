import React from 'react';
import PropTypes from 'prop-types';
import { CSVLink } from 'react-csv';  // Importa o componente do react-csv
import toast from 'react-hot-toast';
import { ButtonFAB } from './style';
import icons from '../../../assets';

export default function ExportCsvButton(props) {
  const { content, isDisabled, mBox } = props;

  const now = new Date();
  const csvFileName = `${mBox.toLowerCase()}_${now.getTime()}.csv`;

  const csvHeaders = ['priority', 'activity', 'type', 'scheduling', 'experience','audience'];

  // Gerar conteúdo do CSV
  const csvData = content.flatMap((act) =>
    act.options.map((option) => ({
      priority: act.priority || 'not_found',
      activity: act.name || 'not_found',
      type: option.type?.activity || 'not_found',
      scheduling: option.scheduling?.status || 'not_found',
      experience: option.offerDetails?.content?.payload?.nomeOferta || option.offerDetails?.content?.payload?.name || 'not_found',
      audience: option.audienceDetails?.name || 'not_found',
    }))
  );

  const handleClick = () => {
    setTimeout(() => {
      toast.success('Arquivo CSV gerado com sucesso!');
    }, 500);
  };

  if(csvData.length === 0) {
    return (
      <ButtonFAB
        title="Exportar dados para arquivo CSV"
        onClick={() => toast.error('Não há dados para exportar!')}
        disabled={isDisabled}
      >
        <img src={icons.exportCSV} alt="Ícone de exportação de arquivo CSV" />
      </ButtonFAB>
    );
  }

  return (
    <>
      <CSVLink
        headers={csvHeaders}
        data={csvData}
        filename={csvFileName}
        onClick={handleClick}
      >
        <ButtonFAB
          title="Exportar dados para arquivo CSV"
          disabled={isDisabled || content.length === 0 }
        >
          <img src={icons.exportCSV} alt="Ícone de exportação de arquivo CSV" />
        </ButtonFAB>
      </CSVLink>
    </>
  );
}

ExportCsvButton.propTypes = {
  content: PropTypes.array.isRequired,
  isDisabled: PropTypes.bool,
  mBox: PropTypes.string.isRequired,
};
