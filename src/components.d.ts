/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface AeDevlistComponent {}
  interface AeDevlistComponentAttributes extends StencilHTMLAttributes {
    'onOnToggle'?: (event: CustomEvent) => void;
  }

  interface AeIconsComponent {
    'color': string;
    'name': string;
    'size': string;
  }
  interface AeIconsComponentAttributes extends StencilHTMLAttributes {
    'color'?: string;
    'name'?: string;
    'size'?: string;
  }

  interface AeLogoComponent {
    'firstcolor': string;
    'secondcolor': string;
  }
  interface AeLogoComponentAttributes extends StencilHTMLAttributes {
    'firstcolor'?: string;
    'secondcolor'?: string;
  }

  interface AeSpinnerComponent {
    'color': string;
    'colortwo': string;
    'type': string;
  }
  interface AeSpinnerComponentAttributes extends StencilHTMLAttributes {
    'color'?: string;
    'colortwo'?: string;
    'type'?: string;
  }

  interface AeSvgComponent {
    'id': string;
    'url': string;
    'wide': string;
  }
  interface AeSvgComponentAttributes extends StencilHTMLAttributes {
    'id'?: string;
    'url'?: string;
    'wide'?: string;
  }

  interface AeSvgcssComponent {
    'color': string;
    'colortwo': string;
    'type': string;
  }
  interface AeSvgcssComponentAttributes extends StencilHTMLAttributes {
    'color'?: string;
    'colortwo'?: string;
    'type'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AeDevlistComponent': Components.AeDevlistComponent;
    'AeIconsComponent': Components.AeIconsComponent;
    'AeLogoComponent': Components.AeLogoComponent;
    'AeSpinnerComponent': Components.AeSpinnerComponent;
    'AeSvgComponent': Components.AeSvgComponent;
    'AeSvgcssComponent': Components.AeSvgcssComponent;
  }

  interface StencilIntrinsicElements {
    'ae-devlist-component': Components.AeDevlistComponentAttributes;
    'ae-icons-component': Components.AeIconsComponentAttributes;
    'ae-logo-component': Components.AeLogoComponentAttributes;
    'ae-spinner-component': Components.AeSpinnerComponentAttributes;
    'ae-svg-component': Components.AeSvgComponentAttributes;
    'ae-svgcss-component': Components.AeSvgcssComponentAttributes;
  }


  interface HTMLAeDevlistComponentElement extends Components.AeDevlistComponent, HTMLStencilElement {}
  var HTMLAeDevlistComponentElement: {
    prototype: HTMLAeDevlistComponentElement;
    new (): HTMLAeDevlistComponentElement;
  };

  interface HTMLAeIconsComponentElement extends Components.AeIconsComponent, HTMLStencilElement {}
  var HTMLAeIconsComponentElement: {
    prototype: HTMLAeIconsComponentElement;
    new (): HTMLAeIconsComponentElement;
  };

  interface HTMLAeLogoComponentElement extends Components.AeLogoComponent, HTMLStencilElement {}
  var HTMLAeLogoComponentElement: {
    prototype: HTMLAeLogoComponentElement;
    new (): HTMLAeLogoComponentElement;
  };

  interface HTMLAeSpinnerComponentElement extends Components.AeSpinnerComponent, HTMLStencilElement {}
  var HTMLAeSpinnerComponentElement: {
    prototype: HTMLAeSpinnerComponentElement;
    new (): HTMLAeSpinnerComponentElement;
  };

  interface HTMLAeSvgComponentElement extends Components.AeSvgComponent, HTMLStencilElement {}
  var HTMLAeSvgComponentElement: {
    prototype: HTMLAeSvgComponentElement;
    new (): HTMLAeSvgComponentElement;
  };

  interface HTMLAeSvgcssComponentElement extends Components.AeSvgcssComponent, HTMLStencilElement {}
  var HTMLAeSvgcssComponentElement: {
    prototype: HTMLAeSvgcssComponentElement;
    new (): HTMLAeSvgcssComponentElement;
  };

  interface HTMLElementTagNameMap {
    'ae-devlist-component': HTMLAeDevlistComponentElement
    'ae-icons-component': HTMLAeIconsComponentElement
    'ae-logo-component': HTMLAeLogoComponentElement
    'ae-spinner-component': HTMLAeSpinnerComponentElement
    'ae-svg-component': HTMLAeSvgComponentElement
    'ae-svgcss-component': HTMLAeSvgcssComponentElement
  }

  interface ElementTagNameMap {
    'ae-devlist-component': HTMLAeDevlistComponentElement;
    'ae-icons-component': HTMLAeIconsComponentElement;
    'ae-logo-component': HTMLAeLogoComponentElement;
    'ae-spinner-component': HTMLAeSpinnerComponentElement;
    'ae-svg-component': HTMLAeSvgComponentElement;
    'ae-svgcss-component': HTMLAeSvgcssComponentElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
