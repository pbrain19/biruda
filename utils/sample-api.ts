import fetch from 'isomorphic-unfetch';
import config from '../common/config';

export async function sampleFetchWrapper(
  input: RequestInfo,
  init?: RequestInit
) {
  try {
    const data = await fetch(
      `${config.host}:${config.port}${input}`,
      init
    ).then(res => res.json());
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}
