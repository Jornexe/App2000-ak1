import hytteData from "./hyttedata.json"; 

interface Hytte {
  navn: string;
  beliggenhet: {
    breddegrad: number;
    lengdegrad: number;
    moh: number;
  };
  type: string;
  kapasitet: {
    antallSengeplasser: number;
    antallRom: number;
  };
  fasiliteter: string[];
  kontakt: {
    eier: string;
    telefonnummer: string;
    epost: string;
    adresse: {
      gate: string;
      postnummer: number;
    };
  };
  anmeldelser: number[];
  tilknyttedeTurloyper: string[];
}

function visHytter(hyttearray: Hytte[]): string {

    const visHytte = (hytte: Hytte) :string =>{ //returnerer 0 dersom antall anmeldelser er 0.
        const gjennomsnittAnmeldelse = hytte.anmeldelser.length > 0 ? hytte.anmeldelser.reduce((sum, tall) => sum + tall, 0) / hytte.anmeldelser.length: 0;
        let html :string = '<tr>';
        let tdStyle :string = 'border: 1px solid black; padding: 8px 12px;'; //
        html += `<td style="${tdStyle}">${hytte.navn}</td>`;
        html += `<td style="${tdStyle}">${hytte.beliggenhet.moh} moh ${hytte.beliggenhet.breddegrad} ${hytte.beliggenhet.lengdegrad}</td>`;
        html += `<td style="${tdStyle}">${hytte.type}</td>`;
        html += `<td style="${tdStyle}">${hytte.kapasitet.antallSengeplasser} senger ${hytte.kapasitet.antallRom} rom</td>`;
        html += `<td style="${tdStyle}">${hytte.fasiliteter.join(', ')}</td>`;
        html += `<td style="${tdStyle}">${hytte.kontakt.eier} ${hytte.kontakt.epost}  ${hytte.kontakt.telefonnummer}  ${hytte.kontakt.adresse.gate}  ${hytte.kontakt.adresse.postnummer}</td>`;
        html += `<td style="${tdStyle}">${gjennomsnittAnmeldelse.toFixed(1)}</td>`;
        html += `<td style="${tdStyle}">${hytte.tilknyttedeTurloyper.join(', ')}</td>`;
        html += '</tr>';
        return html;

    }
    const thStyle: string = "border: 1px solid black; padding: 8px 12px;";
    let html: string = '<table style="border: 1px solid black; border-collapse: collapse; max-width: 1000px;">';
    html += '<thead><tr>';
    html += `<th style="${thStyle}">Navn</th><th style="${thStyle}">Beliggenhet</th><th style="${thStyle}">Type</th><th style="${thStyle}">Kapasitet</th><th style="${thStyle}">Fasiliteter</th><th style="${thStyle}">Kontakt</th><th style="${thStyle}">Snitt anmeldelse</th><th style="${thStyle}">Turløyper</th>`;
    html += '</tr></thead><tbody>';

    for (let hytte of hyttearray) {
        html += visHytte(hytte);
    }

    html += '</tbody></table>';
    return html;
}



let html = visHytter(hytteData);