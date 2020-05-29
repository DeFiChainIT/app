export const errorSchema = {
  type: 'object',
  properties: {
    result: {
      type: 'string',
      nullable: true,
    },
    error: {
      type: 'object',
      properties: {
        code: {
          type: 'number',
        },
        message: {
          type: 'string',
        },
      },
      required: ['message'],
    },
    id: {
      type: 'string',
    },
  },
  required: ['error'],
};

export const blockSchema = {
  type: 'object',
  properties: {
    result: {
      type: 'object',
      properties: {
        nonce: {
          type: 'number',
        },
        hash: {
          type: 'string',
        },
        confirmations: {
          type: 'number',
        },
        previousblockhash: {
          type: 'string',
        },
        height: {
          type: 'number',
        },
        strippedsize: {
          type: 'number',
        },
        version: {
          type: 'number',
        },
        time: {
          type: 'number',
        },
        difficulty: {
          type: 'number',
        },
        nTx: {
          type: 'number',
        },
        merkleroot: {
          type: 'string',
        },
        chainwork: {
          type: 'string',
        },
        size: {
          type: 'number',
        },
        nextblockhash: {
          type: 'string',
        },
        bits: {
          type: 'string',
        },
        weight: {
          type: 'number',
        },
        mediantime: {
          type: 'number',
        },
        versionHex: {
          type: 'string',
        },
        tx: {
          type: 'array',
          items: [{ type: 'string' }],
        },
      },
      required: ['hash', 'confirmations', 'time', 'height', 'tx', 'nTx'],
    },
    error: {
      nullable: true,
    },
    id: {
      type: 'string',
    },
  },
  required: ['result'],
};

export const getBalanceSchema = {
  type: 'object',
  properties: {
    result: {
      type: 'number',
      nullable: false,
    },
    error: {
      nullable: true,
    },
    id: {
      type: 'string',
    },
  },
  required: ['result'],
};

export const getBalancesSchema = {
  type: 'object',
  properties: {
    result: {
      type: 'object',
      properties: {
        mine: {
          type: 'object',
          properties: {
            trusted: { type: 'number' },
            untrusted_pending: { type: 'number' },
            immature: { type: 'number' },
          },
          required: ['trusted', 'untrusted_pending', 'immature'],
        },
      },
      required: ['mine'],
    },
    error: {
      nullable: true,
    },
    id: {
      type: 'string',
    },
  },
  required: ['result'],
};

export const getBlockCountSchema = {
  type: 'object',
  properties: {
    result: {
      type: 'number',
      nullable: false,
      minimum: 0,
    },
    error: {
      nullable: true,
    },
    id: {
      type: 'string',
    },
  },
  required: ['result'],
};

export const getPeerInfoSchema = {
  type: 'object',
  properties: {
    result: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'number' },
          addr: { type: 'string' },
          addrlocal: { type: 'string' },
          addrbind: { type: 'string' },
          services: { type: 'string' },
          servicesnames: { type: 'array', items: { type: 'string' } },
          relaytxes: { type: 'boolean' },
          lastsend: { type: 'number' },
          lastrecv: { type: 'number' },
          bytessent: { type: 'number' },
          bytesrecv: { type: 'number' },
          conntime: { type: 'number' },
          timeoffset: { type: 'number' },
          pingtime: { type: 'number' },
          minping: { type: 'number' },
          version: { type: 'number' },
          subver: { type: 'string' },
          inbound: { type: 'boolean' },
          addnode: { type: 'boolean' },
          startingheight: {
            type: 'number',
          },
          banscore: { type: 'number' },
          synced_headers: { type: 'number' },
          synced_blocks: { type: 'number' },
          inflight: { type: 'array', items: { type: 'number' } },
          whitelisted: { type: 'boolean' },
          // permissions: [],
          minfeefilter: { type: 'number' },
          bytessent_per_msg: {
            type: 'object',
            properties: {
              feefilter: { type: 'number' },
              getaddr: { type: 'number' },
              getheaders: { type: 'number' },
              ping: { type: 'number' },
              pong: { type: 'number' },
              sendcmpct: { type: 'number' },
              sendheaders: { type: 'number' },
              verack: { type: 'number' },
              version: { type: 'number' },
            },
          },
          bytesrecv_per_msg: {
            type: 'object',
            properties: {
              addr: { type: 'number' },
              feefilter: { type: 'number' },
              getheaders: { type: 'number' },
              headers: { type: 'number' },
              inv: { type: 'number' },
              ping: { type: 'number' },
              pong: { type: 'number' },
              sendcmpct: { type: 'number' },
              sendheaders: { type: 'number' },
              verack: { type: 'number' },
              version: { type: 'number' },
            },
          },
        },
        required: ['startingheight'],
      },
      minItems: 1,
    },
    error: {
      nullable: true,
    },
    id: {
      type: 'string',
    },
  },
  required: ['result'],
};

export const getNewAddressSchema = {
  type: 'object',
  properties: {
    result: {
      type: 'string',
      nullable: false,
    },
    error: {
      nullable: true,
    },
    id: {
      type: 'string',
    },
  },
  required: ['result'],
};

export const blockchainInfoSchema = {
  type: 'object',
  properties: {
    result: {
      type: 'object',
      properties: {
        chain: {
          type: 'string',
        },
        blocks: {
          type: 'number',
        },
        headers: {
          type: 'number',
        },
        bestblockhash: {
          type: 'string',
        },
        difficulty: {
          type: 'number',
        },
        medianTime: {
          type: 'number',
        },
        verificationprogress: {
          type: 'number',
        },
        initialblockdownload: {
          type: 'boolean',
        },
        chainwork: {
          type: 'string',
        },
        size_on_disk: {
          type: 'number',
        },
        pruned: {
          type: 'boolean',
        },
        pruneheight: {
          type: 'number',
        },
        automatic_pruning: {
          type: 'boolean',
        },
        prune_target_size: {
          type: 'number',
        },
        softforks: {
          type: 'object',
        },
        bip9_softforks: {
          type: 'object',
        },
        warnings: {
          type: 'string',
        },
      },
      required: ['initialblockdownload'],
    },
    error: {
      nullable: true,
    },
    id: {
      type: 'string',
    },
  },
  required: ['result'],
};

export const validAddressSchema = {
  type: 'object',
  properties: {
    result: {
      type: 'object',
      properties: {
        isvalid: {
          type: 'boolean',
        },
        address: {
          type: 'string',
        },
        scriptPubKey: {
          type: 'string',
        },
        isscript: {
          type: 'boolean',
        },
        iswitness: {
          type: 'boolean',
        },
        witness_version: {
          type: 'number',
        },
        witness_program: {
          type: 'string',
        },
      },
      required: ['isvalid'],
    },
    error: {
      nullable: true,
    },
    id: {
      type: 'string',
    },
  },
  required: ['result'],
};

export const receiveAddressListSchema = {
  type: 'object',
  properties: {
    result: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          involvesWatchonly: { type: 'boolean' },
          address: { type: 'string' },
          account: { type: 'string' },
          amount: { type: 'number' },
          confirmations: { type: 'number' },
          label: { type: 'string' },
          txids: { type: 'array', items: { type: 'string' } },
        },
        required: ['address', 'amount'],
      },
    },
    error: {
      nullable: true,
    },
    id: {
      type: 'string',
    },
  },
  required: ['result'],
};

export const txnListSchema = {
  type: 'object',
  properties: {
    result: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          address: { type: 'string' },
          category: { type: 'string' },
          amount: { type: 'number' },
          label: { type: 'string' },
          vout: { type: 'number' },
          fee: { type: 'number' },
          confirmations: { type: 'number' },
          trusted: { type: 'boolean' },
          blockhash: { type: 'string' },
          blockindex: { type: 'number' },
          blocktime: { type: 'number' },
          txid: { type: 'string' },
          time: { type: 'number' },
          timereceived: { type: 'number' },
          comment: { type: 'string' },
          'bip125-replaceable': { type: 'string' },
          abandoned: { type: 'boolean' },
        },
        required: [
          'address',
          'category',
          'amount',
          'confirmations',
          'txid',
          'time',
        ],
      },
    },
    error: {
      nullable: true,
    },
    id: {
      type: 'string',
    },
  },
  required: ['result'],
};

export const walletInfoSchema = {
  type: 'object',
  properties: {
    result: {
      type: 'object',
      properties: {
        walletname: { type: 'string' },
        walletversion: { type: 'number' },
        balance: { type: 'number' },
        unconfirmed_balance: { type: 'number' },
        immature_balance: { type: 'number' },
        txcount: { type: 'number' },
        keypoololdest: { type: 'number' },
        keypoolsize: { type: 'number' },
        keypoolsize_hd_internal: { type: 'number' },
        unlocked_until: { type: 'number' },
        paytxfee: { type: 'number' },
        hdseedid: { type: 'string' },
        private_keys_enabled: { type: 'boolean' },
      },
      required: ['balance', 'txcount'],
    },
    error: {
      nullable: true,
    },
    id: {
      type: 'string',
    },
  },
  required: ['result'],
};

const scriptSigSchema = {
  type: 'object',
  properties: {
    hex: {
      type: 'string',
    },
    asm: {
      type: 'string',
    },
  },
};

const vinInnerSchema = {
  type: 'object',
  properties: {
    coinbase: {
      type: 'string',
    },
    sequence: {
      type: 'number',
    },
    txid: {
      type: 'string',
    },
    txinwitness: {
      type: 'array',
      items: [{ type: 'string' }],
    },
    vout: {
      type: 'number',
    },
    scriptSig: scriptSigSchema,
  },
};

const scriptPubKeySchema1 = {
  type: 'object',
  properties: {
    hex: {
      type: 'string',
    },
    type: {
      type: 'string',
    },
    addresses: {
      type: 'array',
      items: [{ type: 'string' }],
    },
    asm: {
      type: 'string',
    },
    reqSigs: {
      type: 'number',
    },
  },
};

const scriptPubKeySchema2 = {
  type: 'object',
  properties: {
    asm: {
      type: 'string',
    },
    type: {
      type: 'string',
    },
    hex: {
      type: 'string',
    },
  },
};

const voutSchema = {
  type: 'array',
  items: {
    anyOf: [
      {
        properties: {
          value: {
            type: 'number',
          },
          n: {
            type: 'number',
          },
          scriptPubKey: scriptPubKeySchema1,
        },
        required: [],
      },
      {
        properties: {
          n: {
            type: 'number',
          },
          scriptPubKey: scriptPubKeySchema2,
          value: {
            type: 'number',
          },
        },
        required: [],
      },
    ],
  },
};

export const txSchema = {
  type: 'object',
  properties: {
    result: {
      type: 'object',
      properties: {
        hex: {
          type: 'string',
        },
        locktime: {
          type: 'number',
        },
        vsize: {
          type: 'number',
        },
        confirmations: {
          type: 'number',
        },
        blocktime: {
          type: 'number',
        },
        vin: {
          type: 'array',
          items: vinInnerSchema,
        },
        hash: {
          type: 'string',
        },
        blockhash: {
          type: 'string',
        },
        vout: voutSchema,
        version: {
          type: 'number',
        },
        size: {
          type: 'number',
        },
        in_active_chain: {
          type: 'boolean',
        },
        txid: {
          type: 'string',
        },
        time: {
          type: 'number',
        },
        weight: {
          type: 'number',
        },
      },
      required: ['txid', 'hash'],
    },
    error: {
      nullable: true,
    },
    id: {
      type: 'string',
    },
  },
  require: ['result'],
};
