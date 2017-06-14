'use strict';

const Header = () => {
  const header = $("<header></header>");
  const title = $("<span>Pokédex</span>");


  header.append(title);

  return header;
}
