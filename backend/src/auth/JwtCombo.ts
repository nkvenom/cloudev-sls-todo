import { JwtToken } from './JwtToken'
import { JwtHeader } from 'jsonwebtoken'

/**
 * Interface representing a JWT token
 */
export interface JwtCombo {
  header: JwtHeader
  payload: JwtToken
}
