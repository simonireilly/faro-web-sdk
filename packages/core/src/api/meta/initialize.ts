import type { InternalLogger } from '../../internalLogger';
import type { Meta, Metas, MetaUser } from '../../metas';
import type { Transports } from '../../transports';
import type { MetaAPI } from './types';

export function initializeMetaAPI(internalLogger: InternalLogger, _transports: Transports, metas: Metas): MetaAPI {
  internalLogger.debug('Initializing meta API');

  let meta: Meta = {};

  metas.add(() => meta);

  const setUser: MetaAPI['setUser'] = (user: MetaUser | null) => {
    meta = { ...meta, user: user ?? undefined };
  };

  return {
    setUser,
  };
}
