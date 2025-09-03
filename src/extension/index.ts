import { Configschema } from 'src/types/generated';
import { set } from './util/nodecg';
import NodeCG from '@nodecg/types';

export default (nodecg: NodeCG.ServerAPI<Configschema>) => {
  set(nodecg);
  require('./obs');
};
