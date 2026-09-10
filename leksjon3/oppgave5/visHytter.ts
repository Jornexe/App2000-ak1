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
        html += `<td style="border: 1px solid black; padding: 8px 12px;">${hytte.navn}</td>`;
        html += `<td style="border: 1px solid black; padding: 8px 12px;">${hytte.beliggenhet.moh} moh ${hytte.beliggenhet.breddegrad} ${hytte.beliggenhet.lengdegrad}</td>`;
        html += `<td style="border: 1px solid black; padding: 8px 12px;">${hytte.type}</td>`;
        html += `<td style="border: 1px solid black; padding: 8px 12px;">${hytte.kapasitet.antallSengeplasser} senger ${hytte.kapasitet.antallRom} rom</td>`;
        html += `<td style="border: 1px solid black; padding: 8px 12px;">${hytte.fasiliteter.join(', ')}</td>`;
        html += `<td style="border: 1px solid black; padding: 8px 12px;">${hytte.kontakt.eier} ${hytte.kontakt.epost}  ${hytte.kontakt.telefonnummer}  ${hytte.kontakt.adresse.gate}  ${hytte.kontakt.adresse.postnummer}</td>`;
        html += `<td style="border: 1px solid black; padding: 8px 12px;">${gjennomsnittAnmeldelse.toFixed(1)}</td>`;
        html += `<td style="border: 1px solid black; padding: 8px 12px;">${hytte.tilknyttedeTurloyper.join(', ')}</td>`;
        html += '</tr>';
        return html;

    }
    const thCSS: string = "border: 1px solid black; padding: 8px 12px;";
    let html: string = '<table style="border: 1px solid black; border-collapse: collapse; max-width: 1000px;">';
    html += '<thead><tr>';
    html += `<th style="${thCSS}">Navn</th><th style="${thCSS}">Beliggenhet</th><th style="${thCSS}">Type</th><th style="${thCSS}">Kapasitet</th><th style="${thCSS}">Fasiliteter</th><th style="${thCSS}">Kontakt</th><th style="${thCSS}">Snitt anmeldelse</th><th style="${thCSS}">Turløyper</th>`;
    html += '</tr></thead><tbody>';

    for (let hytte of hyttearray) {
        html += visHytte(hytte);
    }

    html += '</tbody></table>';
    return html;
}



let html = visHytter(hytteData);