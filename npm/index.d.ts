declare module '@apiverve/spellchecker' {
  export interface spellcheckerOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface spellcheckerResponse {
    status: string;
    error: string | null;
    data: SpellCheckerData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface SpellCheckerData {
      spellPass:        boolean | null;
      mispellingsFound: number | null;
      corrections:      Correction[];
  }
  
  interface Correction {
      word:        null | string;
      suggestions: (null | string)[];
  }

  export default class spellcheckerWrapper {
    constructor(options: spellcheckerOptions);

    execute(callback: (error: any, data: spellcheckerResponse | null) => void): Promise<spellcheckerResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: spellcheckerResponse | null) => void): Promise<spellcheckerResponse>;
    execute(query?: Record<string, any>): Promise<spellcheckerResponse>;
  }
}
