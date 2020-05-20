export type IconPrefix = "fas" | "fab" | "far" | "fal" | "fad";
export type IconPathData = string | string[]

export interface IconLookup {
  prefix: IconPrefix;
  // IconName is defined in the code that will be generated at build time and bundled with this file.
  iconName: IconName;
}

export interface IconDefinition extends IconLookup {
  icon: [
    number, // width
    number, // height
    string[], // ligatures
    string, // unicode
    IconPathData // svgPathData
  ];
}

export interface IconPack {
  [key: string]: IconDefinition;
}

export type IconName = 'album-collection' | 
  'ellipsis-h' | 
  'home-alt' | 
  'search' | 
  'user-circle' | 
  'ellipsis-h' | 
  'heart' | 
  'random' | 
  'repeat-1-alt' | 
  'repeat-alt' | 
  'album-collection' | 
  'heart' | 
  'home-alt' | 
  'search';
