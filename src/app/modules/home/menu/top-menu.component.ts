import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/core/services/authorization.service';
import { Router } from '@angular/router';
import { IMenu } from './top-menu';
import { faCoffee, faHome, faFileContract, faShoppingCart, faCoins, faBoxes, faPlus, faSearch, faListUl, faChartBar, faMoneyCheck, faPiggyBank, faWallet, faChartLine, faChartArea, faCreditCard, faFileSignature } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
})
export class TopMenuComponent implements OnInit {

  loggedIn = false;
  MenuTopo: Array<IMenu>;

  constructor(private authService: AuthorizationService) {
  }

  ngOnInit() {
    this.authService.loginChangeEmitter.subscribe(x => {
      this.loggedIn = x !== undefined
    });
    this.MenuTopo = this.carregarMenu();
  }


  private carregarMenu(): Array<IMenu> {
    let menuPrincipal: Array<IMenu>;

    menuPrincipal = [
      {
        nome: "Compras", icone: faShoppingCart,
        subMenu: [
          { nome: "Cadastrar compra", icone: faPlus, url: "compras/novo" },
          { nome: "Consultar compras", icone: faSearch, url: "compras" },
          { separator: true },
          { nome: "Listas de compras", icone: faListUl, url: "compras/listas" },
          { nome: "Cadastrar lista", icone: faPlus, url: "compras/lista/novo" },
          { separator: true },
          { nome: "Estatisticas", icone: faChartBar, url: "compras/stats" },
        ]
      },
      {
        nome: "Contas", icone: faMoneyCheck,
        subMenu: [
          { nome: "Cadastrar conta", icone: faPlus, url: "financesaccount/new" },
          { nome: "Consultar contas", icone: faWallet, url: "financesaccount" },
          { separator: true },
          { nome: "Fluxo mês a mês", icone: faChartLine, url: "financesaccount/stats/month" },
          { separator: true },
          { nome: "Estatisticas", icone: faChartBar, url: "financesaccount/stats" },
        ]
      },
      {
        nome: "Contratos", icone: faFileContract,
        subMenu: [
          { nome: "Cadastrar contrato", icone: faPlus, url: "contratos/novo" },
          { nome: "Consultar contratos", icone: faFileSignature, url: "contratos" },
          { separator: true },
          { nome: "Status mês a mês", icone: faChartArea, url: "contratos/stats/mesames" },
          { separator: true },
          { nome: "Estatisticas", icone: faChartBar, url: "contratos/stats" },
        ]
      },
      {
        nome: "Cartões", icone: faCreditCard,
        subMenu: [
          { nome: "Cadastrar cartão", icone: faPlus, url: "cartoes/novo" },
          { nome: "Consultar cartões", icone: faCreditCard, url: "cartoes" },
          { separator: true },
          { nome: "Estatisticas", icone: faChartBar, url: "cartoes/stats" },
        ]
      }];
    return menuPrincipal;
  }
}