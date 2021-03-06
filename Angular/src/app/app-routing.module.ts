import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CvComponent } from './components/cv/cv.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalerieComponent } from './components/galerie/galerie.component';
import { AboutComponent } from './components/about/about.component';
import { GameComponent } from './components/game/game.component';
import { MusicComponent } from './components/music/music.component';
import { GameMenuComponent } from './components/game-menu/game-menu.component';

//Routing / Navigation
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: { animationState: 'Home' },
      },
      { path: 'cv', 
        component: CvComponent,
        data: { animationState: 'Cv' }
      },
      {
        path: 'contact',
        component: ContactComponent,
        data: { animationState: 'Contact' },
      },
      {
        path: 'galerie',
        component: GalerieComponent,
        data: { animationState: 'Galerie' },
      },
      {
        path: 'about',
        component: AboutComponent,
        data: { animationState: 'About' },
      },
      {
        path: 'game',
        component: GameComponent,
        data: { animationState: 'Game' },
      },
      {
        path: 'gamemenu',
        component: GameMenuComponent,
        data: { animationState: 'GameMenu' },
      },
      {
        path: 'music',
        component: MusicComponent,
        data: { animationState: 'Music' },
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
