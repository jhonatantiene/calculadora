import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora-n',
  templateUrl: './calculadora-n.component.html',
  styleUrls: ['./calculadora-n.component.scss']
})
export class CalculadoraNComponent implements OnInit {
  equacao: any = '';
  resultado: number = 0;
  numeroPego1: any = '';
  numeroPego2: any = '';
  operadorPego: any = '';
  acoesPego: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.valores()

  }

  valores() {
    let botoes: any = document.querySelectorAll('#botao') //// Pegando os múmeros que são clicados
    botoes.forEach((values: any) => {
      values.addEventListener("click", (eBotao: any) => {
        if (this.operadorPego == '') {
          this.numeroPego1 += eBotao.target.innerText
          this.equacao += eBotao.target.innerText
        } else {
          this.numeroPego2 += eBotao.target.innerText
          this.equacao = this.equacao += eBotao.target.innerText
        }
      })
    })


    let operadores: any = document.querySelectorAll('#operadores')//// Pegando os operadores que são clicados
    operadores.forEach((values2: any) => {
      values2.addEventListener("click", (eOperador: any) => {
        this.operadorPego = eOperador.target.innerText
        let operadorAntigo = this.operadorPego
        if (this.operadorPego !== '') {
          if(this.equacao.includes(this.operadorPego) === true) {
            console.log('ja existe')
          } else {
            this.equacao += this.operadorPego
          }

        }
      })
    })

    let acoes = document.querySelectorAll('#acao')//// Pegando as acoes que são clicados
    acoes.forEach((values3: any) => {
      values3.addEventListener("click", (eAcao: any) => {
        this.acoesPego = eAcao.target.innerText
        if (this.acoesPego === 'CE') {
          this.equacao = '';
          this.resultado = 0;
          this.numeroPego1 = '';
          this.numeroPego2 = '';
          this.operadorPego = '';
          this.acoesPego = '';
        }
        if (this.acoesPego === 'DEL') {

          this.equacao = this.equacao.slice(0, this.equacao.length - 1)
          // if (this.numeroPego2 !== '') {
          //   this.numeroPego2 = this.numeroPego2.slice(0, this.numeroPego2.length - 1)
          //   this.equacao = this.equacao.slice(0, this.equacao.length - 1)
          // }
          // if (this.operadorPego !== '') {
          //   this.operadorPego = this.operadorPego.slice(0, this.operadorPego.length - 1)
          //   this.equacao = this.equacao.slice(0, this.equacao.length - 1)
          // }
          // if (this.numeroPego1 !== '') {
          //   this.numeroPego1 = this.numeroPego1.slice(0, this.numeroPego1.length - 1)
          //   this.equacao = this.equacao.slice(0, this.equacao.length - 1)
          // }
        }
      })
    })

  }

  soma() {
    if (this.operadorPego == '+') {
      this.resultado = Number(this.numeroPego1) + Number(this.numeroPego2)
      this.numeroPego1 = this.resultado
      this.numeroPego2 = ''
      this.operadorPego = ''
      this.equacao = this.resultado.toString()

    }

    if (this.operadorPego === '-') {
      this.resultado = Number(this.numeroPego1) - Number(this.numeroPego2)
      this.numeroPego1 = this.resultado
      this.numeroPego2 = ''
      this.operadorPego = ''
      this.equacao = this.resultado.toString()
    }

    if (this.operadorPego === '*') {
      this.resultado = Number(this.numeroPego1) * Number(this.numeroPego2)
    }

    if (this.operadorPego === '/') {
      this.resultado = Number(this.numeroPego1) / Number(this.numeroPego2)
    }

  }

}