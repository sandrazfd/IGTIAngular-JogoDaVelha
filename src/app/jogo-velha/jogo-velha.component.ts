import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';

@Component({
  selector: 'app-jogo-velha',
  templateUrl: './jogo-velha.component.html',
  styleUrls: ['./jogo-velha.component.css']
})
export class JogoVelhaComponent implements OnInit {

  jogador: string = 'O';
  vencedor: string = '';
  tabuleiro: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]

  processarJogada(linha: number, coluna: number) {
    if (this.tabuleiro[linha][coluna] == '' && this.vencedor == '') {
      this.tabuleiro[linha][coluna] = this.jogador;
      if (this.checkVencedor(this.jogador)) {
        this.vencedor = this.jogador;
      }
      if (this.jogador == 'O') {
        this.jogador = 'X'

      } else {
        this.jogador = 'O'
      }

    }

  }

  checkVencedor(jogo: string): boolean {
    for (let i = 0; i < this.tabuleiro.length; i++) {
      if (this.tabuleiro[i][0] == jogo && this.tabuleiro[i][1] == jogo && this.tabuleiro[i][2] == jogo) {
        return true;
      }
    }
    for (let i = 0; i < this.tabuleiro.length; i++) {
      if (this.tabuleiro[0][i] == jogo && this.tabuleiro[1][i] == jogo && this.tabuleiro[2][i] == jogo) {
        return true;
      }
    }
    if (this.tabuleiro[0][0] == jogo && this.tabuleiro[1][1] == jogo && this.tabuleiro[2][2] == jogo) {
      return true;
    }
    if (this.tabuleiro[0][2] == jogo && this.tabuleiro[1][1] == jogo && this.tabuleiro[2][0] == jogo) {
      return true;
    }

    return false;
  }



  reinicia() {
    this.jogador = 'O';
    this.vencedor = '';
    this.tabuleiro = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
  }



  constructor() { }

  ngOnInit(): void { }

}
