import { Component, NgZone } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { WatsonService } from '../watson-provider/watson.service';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { matches } from '@ionic/core/dist/types/components/nav/view-controller';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [TextToSpeech, SpeechRecognition]
})
export class HomePage {

  estadoMic: boolean = true;
  estadoOuvindo: boolean = false;
  estadoRespondendo: boolean = false;

  fala: String = ""
  estado = 0;

  constructor(private tts: TextToSpeech, private watsonService: WatsonService, private stt: SpeechRecognition, private zone: NgZone) { }

  ngOnInit() {
    this.funcaoInput("")
  }

  //CHECA SE TEM PERMISSAO
  temPermissao() {
    //  console.log('entrou')
    this.trocarEstadoMic();
    this.stt.hasPermission().then((hasPermission: boolean) => {
      if (!hasPermission) {
        this.stt.requestPermission();
      } else {
        this.comecarOuvir();
      }
    })
  }

  //COMECA A OUVIR A FALA
  comecarOuvir() {
    this.estado = 1
    this.trocarEstadoOuvindo();
    let options = {
      language: 'por-BRA',
      showPopup: false
    }

    this.stt.startListening(options)
      .subscribe(
        (matches: Array<string>) => this.funcaoInput(matches[0]),
        (onerror) => console.log('error:', onerror),
      )
  }

  //WATSON 
  //WATSON ARMAZENA A FALA
  funcaoInput(text) {
    this.fala = text;

    


    const body = {
      apikey: "Vax_WjEo--7rp0r89MEPK4TZYOu_XWdScih6VxNeEhC4",
      workspace_id: "e4266255-f6b8-4004-a4b9-4ef7d4ac91d4",
      url: "https://api.eu-gb.assistant.watson.cloud.ibm.com/instances/824ceef8-2bc4-488f-8878-8de09be26abc",
      input: text,
    }

    this.change()
    this.watsonService.postWatson(body).then(
      (res: any) => {
        console.log(res)
        this.funcaoOutput(res.output.text[0])

      }
    );
  }

  //WATSON FALA
  funcaoOutput(texto) {
    this.trocarEstadoRespondendo()
    this.tts.speak({
      text: texto,
      locale: "por-BRA",
      rate: 1.0
    })
  }

  //PARA DE OUVIR (IOS)
  // paraDeOuvir(){
  //   this.stt.stopListening()
  //   this.trocarEstadoRespondendo()
  // }


  trocarEstadoMic() {
    this.estadoMic ? this.estadoMic = false : this.estadoMic = true;
  }

  trocarEstadoOuvindo() {
    if (this.estadoMic == false) {
      this.estadoOuvindo = true;
    } else {
      this.estadoOuvindo = false;
    }
  }

  trocarEstadoRespondendo() {
    if (this.estadoOuvindo == true) {
      this.estadoRespondendo = true
      this.estadoOuvindo = false
      this.estadoMic = false
    }
    this.trocarEstadoMic()
  }

  change() {
    //ATUALIZA A VIEW (TERCEIRA)
    this.zone.run(
      () => {
        this.estado = 2
      }
    )
  }


}

