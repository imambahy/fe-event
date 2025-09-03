
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model TicketType
 * 
 */
export type TicketType = $Result.DefaultSelection<Prisma.$TicketTypePayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model Voucher
 * 
 */
export type Voucher = $Result.DefaultSelection<Prisma.$VoucherPayload>
/**
 * Model Coupon
 * 
 */
export type Coupon = $Result.DefaultSelection<Prisma.$CouponPayload>
/**
 * Model UserVoucher
 * 
 */
export type UserVoucher = $Result.DefaultSelection<Prisma.$UserVoucherPayload>
/**
 * Model UserCoupon
 * 
 */
export type UserCoupon = $Result.DefaultSelection<Prisma.$UserCouponPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  CUSTOMER: 'CUSTOMER',
  ORGANIZER: 'ORGANIZER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const TransactionStatus: {
  WAITING_FOR_PAYMENT: 'WAITING_FOR_PAYMENT',
  WAITING_FOR_CONFIRMATION: 'WAITING_FOR_CONFIRMATION',
  DONE: 'DONE',
  REJECTED: 'REJECTED',
  EXPIRED: 'EXPIRED',
  CANCELLED: 'CANCELLED'
};

export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus]


export const VoucherStatus: {
  ACTIVE: 'ACTIVE',
  USED: 'USED',
  EXPIRED: 'EXPIRED'
};

export type VoucherStatus = (typeof VoucherStatus)[keyof typeof VoucherStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type TransactionStatus = $Enums.TransactionStatus

export const TransactionStatus: typeof $Enums.TransactionStatus

export type VoucherStatus = $Enums.VoucherStatus

export const VoucherStatus: typeof $Enums.VoucherStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticketType`: Exposes CRUD operations for the **TicketType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketTypes
    * const ticketTypes = await prisma.ticketType.findMany()
    * ```
    */
  get ticketType(): Prisma.TicketTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.voucher`: Exposes CRUD operations for the **Voucher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vouchers
    * const vouchers = await prisma.voucher.findMany()
    * ```
    */
  get voucher(): Prisma.VoucherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coupon`: Exposes CRUD operations for the **Coupon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Coupons
    * const coupons = await prisma.coupon.findMany()
    * ```
    */
  get coupon(): Prisma.CouponDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userVoucher`: Exposes CRUD operations for the **UserVoucher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserVouchers
    * const userVouchers = await prisma.userVoucher.findMany()
    * ```
    */
  get userVoucher(): Prisma.UserVoucherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userCoupon`: Exposes CRUD operations for the **UserCoupon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCoupons
    * const userCoupons = await prisma.userCoupon.findMany()
    * ```
    */
  get userCoupon(): Prisma.UserCouponDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Event: 'Event',
    TicketType: 'TicketType',
    Review: 'Review',
    Transaction: 'Transaction',
    Voucher: 'Voucher',
    Coupon: 'Coupon',
    UserVoucher: 'UserVoucher',
    UserCoupon: 'UserCoupon'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "event" | "ticketType" | "review" | "transaction" | "voucher" | "coupon" | "userVoucher" | "userCoupon"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      TicketType: {
        payload: Prisma.$TicketTypePayload<ExtArgs>
        fields: Prisma.TicketTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>
          }
          findFirst: {
            args: Prisma.TicketTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>
          }
          findMany: {
            args: Prisma.TicketTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>[]
          }
          create: {
            args: Prisma.TicketTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>
          }
          createMany: {
            args: Prisma.TicketTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>[]
          }
          delete: {
            args: Prisma.TicketTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>
          }
          update: {
            args: Prisma.TicketTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>
          }
          deleteMany: {
            args: Prisma.TicketTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>[]
          }
          upsert: {
            args: Prisma.TicketTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>
          }
          aggregate: {
            args: Prisma.TicketTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketType>
          }
          groupBy: {
            args: Prisma.TicketTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketTypeCountArgs<ExtArgs>
            result: $Utils.Optional<TicketTypeCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      Voucher: {
        payload: Prisma.$VoucherPayload<ExtArgs>
        fields: Prisma.VoucherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoucherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoucherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          findFirst: {
            args: Prisma.VoucherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoucherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          findMany: {
            args: Prisma.VoucherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>[]
          }
          create: {
            args: Prisma.VoucherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          createMany: {
            args: Prisma.VoucherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VoucherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>[]
          }
          delete: {
            args: Prisma.VoucherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          update: {
            args: Prisma.VoucherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          deleteMany: {
            args: Prisma.VoucherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoucherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VoucherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>[]
          }
          upsert: {
            args: Prisma.VoucherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          aggregate: {
            args: Prisma.VoucherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVoucher>
          }
          groupBy: {
            args: Prisma.VoucherGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoucherGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoucherCountArgs<ExtArgs>
            result: $Utils.Optional<VoucherCountAggregateOutputType> | number
          }
        }
      }
      Coupon: {
        payload: Prisma.$CouponPayload<ExtArgs>
        fields: Prisma.CouponFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CouponFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CouponFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          findFirst: {
            args: Prisma.CouponFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CouponFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          findMany: {
            args: Prisma.CouponFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>[]
          }
          create: {
            args: Prisma.CouponCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          createMany: {
            args: Prisma.CouponCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CouponCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>[]
          }
          delete: {
            args: Prisma.CouponDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          update: {
            args: Prisma.CouponUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          deleteMany: {
            args: Prisma.CouponDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CouponUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CouponUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>[]
          }
          upsert: {
            args: Prisma.CouponUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          aggregate: {
            args: Prisma.CouponAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoupon>
          }
          groupBy: {
            args: Prisma.CouponGroupByArgs<ExtArgs>
            result: $Utils.Optional<CouponGroupByOutputType>[]
          }
          count: {
            args: Prisma.CouponCountArgs<ExtArgs>
            result: $Utils.Optional<CouponCountAggregateOutputType> | number
          }
        }
      }
      UserVoucher: {
        payload: Prisma.$UserVoucherPayload<ExtArgs>
        fields: Prisma.UserVoucherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserVoucherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVoucherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserVoucherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVoucherPayload>
          }
          findFirst: {
            args: Prisma.UserVoucherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVoucherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserVoucherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVoucherPayload>
          }
          findMany: {
            args: Prisma.UserVoucherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVoucherPayload>[]
          }
          create: {
            args: Prisma.UserVoucherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVoucherPayload>
          }
          createMany: {
            args: Prisma.UserVoucherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserVoucherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVoucherPayload>[]
          }
          delete: {
            args: Prisma.UserVoucherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVoucherPayload>
          }
          update: {
            args: Prisma.UserVoucherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVoucherPayload>
          }
          deleteMany: {
            args: Prisma.UserVoucherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserVoucherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserVoucherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVoucherPayload>[]
          }
          upsert: {
            args: Prisma.UserVoucherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVoucherPayload>
          }
          aggregate: {
            args: Prisma.UserVoucherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserVoucher>
          }
          groupBy: {
            args: Prisma.UserVoucherGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserVoucherGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserVoucherCountArgs<ExtArgs>
            result: $Utils.Optional<UserVoucherCountAggregateOutputType> | number
          }
        }
      }
      UserCoupon: {
        payload: Prisma.$UserCouponPayload<ExtArgs>
        fields: Prisma.UserCouponFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserCouponFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCouponPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserCouponFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCouponPayload>
          }
          findFirst: {
            args: Prisma.UserCouponFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCouponPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserCouponFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCouponPayload>
          }
          findMany: {
            args: Prisma.UserCouponFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCouponPayload>[]
          }
          create: {
            args: Prisma.UserCouponCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCouponPayload>
          }
          createMany: {
            args: Prisma.UserCouponCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCouponCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCouponPayload>[]
          }
          delete: {
            args: Prisma.UserCouponDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCouponPayload>
          }
          update: {
            args: Prisma.UserCouponUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCouponPayload>
          }
          deleteMany: {
            args: Prisma.UserCouponDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserCouponUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserCouponUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCouponPayload>[]
          }
          upsert: {
            args: Prisma.UserCouponUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCouponPayload>
          }
          aggregate: {
            args: Prisma.UserCouponAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserCoupon>
          }
          groupBy: {
            args: Prisma.UserCouponGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserCouponGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCouponCountArgs<ExtArgs>
            result: $Utils.Optional<UserCouponCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    event?: EventOmit
    ticketType?: TicketTypeOmit
    review?: ReviewOmit
    transaction?: TransactionOmit
    voucher?: VoucherOmit
    coupon?: CouponOmit
    userVoucher?: UserVoucherOmit
    userCoupon?: UserCouponOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    organizedEvents: number
    reviews: number
    organizerTransactions: number
    userTransactions: number
    userCoupons: number
    userVouchers: number
    referrals: number
    vouchers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizedEvents?: boolean | UserCountOutputTypeCountOrganizedEventsArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
    organizerTransactions?: boolean | UserCountOutputTypeCountOrganizerTransactionsArgs
    userTransactions?: boolean | UserCountOutputTypeCountUserTransactionsArgs
    userCoupons?: boolean | UserCountOutputTypeCountUserCouponsArgs
    userVouchers?: boolean | UserCountOutputTypeCountUserVouchersArgs
    referrals?: boolean | UserCountOutputTypeCountReferralsArgs
    vouchers?: boolean | UserCountOutputTypeCountVouchersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrganizedEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrganizerTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserCouponsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCouponWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserVouchersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserVoucherWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReferralsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVouchersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoucherWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    reviews: number
    ticketTypes: number
    transactions: number
    vouchers: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | EventCountOutputTypeCountReviewsArgs
    ticketTypes?: boolean | EventCountOutputTypeCountTicketTypesArgs
    transactions?: boolean | EventCountOutputTypeCountTransactionsArgs
    vouchers?: boolean | EventCountOutputTypeCountVouchersArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountTicketTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketTypeWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountVouchersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoucherWhereInput
  }


  /**
   * Count Type TicketTypeCountOutputType
   */

  export type TicketTypeCountOutputType = {
    transactions: number
  }

  export type TicketTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | TicketTypeCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * TicketTypeCountOutputType without action
   */
  export type TicketTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTypeCountOutputType
     */
    select?: TicketTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketTypeCountOutputType without action
   */
  export type TicketTypeCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type VoucherCountOutputType
   */

  export type VoucherCountOutputType = {
    transactions: number
    userVouchers: number
  }

  export type VoucherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | VoucherCountOutputTypeCountTransactionsArgs
    userVouchers?: boolean | VoucherCountOutputTypeCountUserVouchersArgs
  }

  // Custom InputTypes
  /**
   * VoucherCountOutputType without action
   */
  export type VoucherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoucherCountOutputType
     */
    select?: VoucherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VoucherCountOutputType without action
   */
  export type VoucherCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * VoucherCountOutputType without action
   */
  export type VoucherCountOutputTypeCountUserVouchersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserVoucherWhereInput
  }


  /**
   * Count Type CouponCountOutputType
   */

  export type CouponCountOutputType = {
    transactions: number
    userCoupons: number
  }

  export type CouponCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | CouponCountOutputTypeCountTransactionsArgs
    userCoupons?: boolean | CouponCountOutputTypeCountUserCouponsArgs
  }

  // Custom InputTypes
  /**
   * CouponCountOutputType without action
   */
  export type CouponCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponCountOutputType
     */
    select?: CouponCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CouponCountOutputType without action
   */
  export type CouponCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * CouponCountOutputType without action
   */
  export type CouponCountOutputTypeCountUserCouponsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCouponWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    referredById: number | null
    points: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    referredById: number | null
    points: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    referralCode: string | null
    referredById: number | null
    points: number | null
    pointsExpiry: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    referralCode: string | null
    referredById: number | null
    points: number | null
    pointsExpiry: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    referralCode: number
    referredById: number
    points: number
    pointsExpiry: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    referredById?: true
    points?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    referredById?: true
    points?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    referralCode?: true
    referredById?: true
    points?: true
    pointsExpiry?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    referralCode?: true
    referredById?: true
    points?: true
    pointsExpiry?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    referralCode?: true
    referredById?: true
    points?: true
    pointsExpiry?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    referralCode: string | null
    referredById: number | null
    points: number
    pointsExpiry: Date | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    referralCode?: boolean
    referredById?: boolean
    points?: boolean
    pointsExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    organizedEvents?: boolean | User$organizedEventsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    organizerTransactions?: boolean | User$organizerTransactionsArgs<ExtArgs>
    userTransactions?: boolean | User$userTransactionsArgs<ExtArgs>
    userCoupons?: boolean | User$userCouponsArgs<ExtArgs>
    userVouchers?: boolean | User$userVouchersArgs<ExtArgs>
    referredBy?: boolean | User$referredByArgs<ExtArgs>
    referrals?: boolean | User$referralsArgs<ExtArgs>
    vouchers?: boolean | User$vouchersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    referralCode?: boolean
    referredById?: boolean
    points?: boolean
    pointsExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    referredBy?: boolean | User$referredByArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    referralCode?: boolean
    referredById?: boolean
    points?: boolean
    pointsExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    referredBy?: boolean | User$referredByArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    referralCode?: boolean
    referredById?: boolean
    points?: boolean
    pointsExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "referralCode" | "referredById" | "points" | "pointsExpiry" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizedEvents?: boolean | User$organizedEventsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    organizerTransactions?: boolean | User$organizerTransactionsArgs<ExtArgs>
    userTransactions?: boolean | User$userTransactionsArgs<ExtArgs>
    userCoupons?: boolean | User$userCouponsArgs<ExtArgs>
    userVouchers?: boolean | User$userVouchersArgs<ExtArgs>
    referredBy?: boolean | User$referredByArgs<ExtArgs>
    referrals?: boolean | User$referralsArgs<ExtArgs>
    vouchers?: boolean | User$vouchersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referredBy?: boolean | User$referredByArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referredBy?: boolean | User$referredByArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      organizedEvents: Prisma.$EventPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      organizerTransactions: Prisma.$TransactionPayload<ExtArgs>[]
      userTransactions: Prisma.$TransactionPayload<ExtArgs>[]
      userCoupons: Prisma.$UserCouponPayload<ExtArgs>[]
      userVouchers: Prisma.$UserVoucherPayload<ExtArgs>[]
      referredBy: Prisma.$UserPayload<ExtArgs> | null
      referrals: Prisma.$UserPayload<ExtArgs>[]
      vouchers: Prisma.$VoucherPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      role: $Enums.Role
      referralCode: string | null
      referredById: number | null
      points: number
      pointsExpiry: Date | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organizedEvents<T extends User$organizedEventsArgs<ExtArgs> = {}>(args?: Subset<T, User$organizedEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    organizerTransactions<T extends User$organizerTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$organizerTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userTransactions<T extends User$userTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$userTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userCoupons<T extends User$userCouponsArgs<ExtArgs> = {}>(args?: Subset<T, User$userCouponsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userVouchers<T extends User$userVouchersArgs<ExtArgs> = {}>(args?: Subset<T, User$userVouchersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserVoucherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    referredBy<T extends User$referredByArgs<ExtArgs> = {}>(args?: Subset<T, User$referredByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    referrals<T extends User$referralsArgs<ExtArgs> = {}>(args?: Subset<T, User$referralsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vouchers<T extends User$vouchersArgs<ExtArgs> = {}>(args?: Subset<T, User$vouchersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly referralCode: FieldRef<"User", 'String'>
    readonly referredById: FieldRef<"User", 'Int'>
    readonly points: FieldRef<"User", 'Int'>
    readonly pointsExpiry: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.organizedEvents
   */
  export type User$organizedEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.organizerTransactions
   */
  export type User$organizerTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.userTransactions
   */
  export type User$userTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.userCoupons
   */
  export type User$userCouponsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCoupon
     */
    omit?: UserCouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
    where?: UserCouponWhereInput
    orderBy?: UserCouponOrderByWithRelationInput | UserCouponOrderByWithRelationInput[]
    cursor?: UserCouponWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCouponScalarFieldEnum | UserCouponScalarFieldEnum[]
  }

  /**
   * User.userVouchers
   */
  export type User$userVouchersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVoucher
     */
    select?: UserVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVoucher
     */
    omit?: UserVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVoucherInclude<ExtArgs> | null
    where?: UserVoucherWhereInput
    orderBy?: UserVoucherOrderByWithRelationInput | UserVoucherOrderByWithRelationInput[]
    cursor?: UserVoucherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserVoucherScalarFieldEnum | UserVoucherScalarFieldEnum[]
  }

  /**
   * User.referredBy
   */
  export type User$referredByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * User.referrals
   */
  export type User$referralsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.vouchers
   */
  export type User$vouchersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    where?: VoucherWhereInput
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    cursor?: VoucherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    id: number | null
    organizerId: number | null
  }

  export type EventSumAggregateOutputType = {
    id: number | null
    organizerId: number | null
  }

  export type EventMinAggregateOutputType = {
    id: number | null
    organizerId: number | null
    title: string | null
    slug: string | null
    description: string | null
    category: string | null
    location: string | null
    startDate: Date | null
    endDate: Date | null
    published: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: number | null
    organizerId: number | null
    title: string | null
    slug: string | null
    description: string | null
    category: string | null
    location: string | null
    startDate: Date | null
    endDate: Date | null
    published: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    organizerId: number
    title: number
    slug: number
    description: number
    category: number
    location: number
    startDate: number
    endDate: number
    published: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    id?: true
    organizerId?: true
  }

  export type EventSumAggregateInputType = {
    id?: true
    organizerId?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    organizerId?: true
    title?: true
    slug?: true
    description?: true
    category?: true
    location?: true
    startDate?: true
    endDate?: true
    published?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    organizerId?: true
    title?: true
    slug?: true
    description?: true
    category?: true
    location?: true
    startDate?: true
    endDate?: true
    published?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    organizerId?: true
    title?: true
    slug?: true
    description?: true
    category?: true
    location?: true
    startDate?: true
    endDate?: true
    published?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: number
    organizerId: number
    title: string
    slug: string
    description: string
    category: string
    location: string
    startDate: Date
    endDate: Date
    published: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizerId?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    category?: boolean
    location?: boolean
    startDate?: boolean
    endDate?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    organizer?: boolean | UserDefaultArgs<ExtArgs>
    reviews?: boolean | Event$reviewsArgs<ExtArgs>
    ticketTypes?: boolean | Event$ticketTypesArgs<ExtArgs>
    transactions?: boolean | Event$transactionsArgs<ExtArgs>
    vouchers?: boolean | Event$vouchersArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizerId?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    category?: boolean
    location?: boolean
    startDate?: boolean
    endDate?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    organizer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizerId?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    category?: boolean
    location?: boolean
    startDate?: boolean
    endDate?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    organizer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    organizerId?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    category?: boolean
    location?: boolean
    startDate?: boolean
    endDate?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizerId" | "title" | "slug" | "description" | "category" | "location" | "startDate" | "endDate" | "published" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizer?: boolean | UserDefaultArgs<ExtArgs>
    reviews?: boolean | Event$reviewsArgs<ExtArgs>
    ticketTypes?: boolean | Event$ticketTypesArgs<ExtArgs>
    transactions?: boolean | Event$transactionsArgs<ExtArgs>
    vouchers?: boolean | Event$vouchersArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizer?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      organizer: Prisma.$UserPayload<ExtArgs>
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      ticketTypes: Prisma.$TicketTypePayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      vouchers: Prisma.$VoucherPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      organizerId: number
      title: string
      slug: string
      description: string
      category: string
      location: string
      startDate: Date
      endDate: Date
      published: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organizer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviews<T extends Event$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Event$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ticketTypes<T extends Event$ticketTypesArgs<ExtArgs> = {}>(args?: Subset<T, Event$ticketTypesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends Event$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Event$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vouchers<T extends Event$vouchersArgs<ExtArgs> = {}>(args?: Subset<T, Event$vouchersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'Int'>
    readonly organizerId: FieldRef<"Event", 'Int'>
    readonly title: FieldRef<"Event", 'String'>
    readonly slug: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly category: FieldRef<"Event", 'String'>
    readonly location: FieldRef<"Event", 'String'>
    readonly startDate: FieldRef<"Event", 'DateTime'>
    readonly endDate: FieldRef<"Event", 'DateTime'>
    readonly published: FieldRef<"Event", 'Boolean'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
    readonly deletedAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.reviews
   */
  export type Event$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Event.ticketTypes
   */
  export type Event$ticketTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    where?: TicketTypeWhereInput
    orderBy?: TicketTypeOrderByWithRelationInput | TicketTypeOrderByWithRelationInput[]
    cursor?: TicketTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketTypeScalarFieldEnum | TicketTypeScalarFieldEnum[]
  }

  /**
   * Event.transactions
   */
  export type Event$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Event.vouchers
   */
  export type Event$vouchersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    where?: VoucherWhereInput
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    cursor?: VoucherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model TicketType
   */

  export type AggregateTicketType = {
    _count: TicketTypeCountAggregateOutputType | null
    _avg: TicketTypeAvgAggregateOutputType | null
    _sum: TicketTypeSumAggregateOutputType | null
    _min: TicketTypeMinAggregateOutputType | null
    _max: TicketTypeMaxAggregateOutputType | null
  }

  export type TicketTypeAvgAggregateOutputType = {
    id: number | null
    eventId: number | null
    price: number | null
    totalSeats: number | null
    availableSeats: number | null
  }

  export type TicketTypeSumAggregateOutputType = {
    id: number | null
    eventId: number | null
    price: number | null
    totalSeats: number | null
    availableSeats: number | null
  }

  export type TicketTypeMinAggregateOutputType = {
    id: number | null
    eventId: number | null
    name: string | null
    price: number | null
    totalSeats: number | null
    availableSeats: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type TicketTypeMaxAggregateOutputType = {
    id: number | null
    eventId: number | null
    name: string | null
    price: number | null
    totalSeats: number | null
    availableSeats: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type TicketTypeCountAggregateOutputType = {
    id: number
    eventId: number
    name: number
    price: number
    totalSeats: number
    availableSeats: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type TicketTypeAvgAggregateInputType = {
    id?: true
    eventId?: true
    price?: true
    totalSeats?: true
    availableSeats?: true
  }

  export type TicketTypeSumAggregateInputType = {
    id?: true
    eventId?: true
    price?: true
    totalSeats?: true
    availableSeats?: true
  }

  export type TicketTypeMinAggregateInputType = {
    id?: true
    eventId?: true
    name?: true
    price?: true
    totalSeats?: true
    availableSeats?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type TicketTypeMaxAggregateInputType = {
    id?: true
    eventId?: true
    name?: true
    price?: true
    totalSeats?: true
    availableSeats?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type TicketTypeCountAggregateInputType = {
    id?: true
    eventId?: true
    name?: true
    price?: true
    totalSeats?: true
    availableSeats?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type TicketTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketType to aggregate.
     */
    where?: TicketTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketTypes to fetch.
     */
    orderBy?: TicketTypeOrderByWithRelationInput | TicketTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketTypes
    **/
    _count?: true | TicketTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketTypeMaxAggregateInputType
  }

  export type GetTicketTypeAggregateType<T extends TicketTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketType[P]>
      : GetScalarType<T[P], AggregateTicketType[P]>
  }




  export type TicketTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketTypeWhereInput
    orderBy?: TicketTypeOrderByWithAggregationInput | TicketTypeOrderByWithAggregationInput[]
    by: TicketTypeScalarFieldEnum[] | TicketTypeScalarFieldEnum
    having?: TicketTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketTypeCountAggregateInputType | true
    _avg?: TicketTypeAvgAggregateInputType
    _sum?: TicketTypeSumAggregateInputType
    _min?: TicketTypeMinAggregateInputType
    _max?: TicketTypeMaxAggregateInputType
  }

  export type TicketTypeGroupByOutputType = {
    id: number
    eventId: number
    name: string
    price: number
    totalSeats: number
    availableSeats: number
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: TicketTypeCountAggregateOutputType | null
    _avg: TicketTypeAvgAggregateOutputType | null
    _sum: TicketTypeSumAggregateOutputType | null
    _min: TicketTypeMinAggregateOutputType | null
    _max: TicketTypeMaxAggregateOutputType | null
  }

  type GetTicketTypeGroupByPayload<T extends TicketTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketTypeGroupByOutputType[P]>
            : GetScalarType<T[P], TicketTypeGroupByOutputType[P]>
        }
      >
    >


  export type TicketTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    name?: boolean
    price?: boolean
    totalSeats?: boolean
    availableSeats?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    transactions?: boolean | TicketType$transactionsArgs<ExtArgs>
    _count?: boolean | TicketTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketType"]>

  export type TicketTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    name?: boolean
    price?: boolean
    totalSeats?: boolean
    availableSeats?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketType"]>

  export type TicketTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    name?: boolean
    price?: boolean
    totalSeats?: boolean
    availableSeats?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketType"]>

  export type TicketTypeSelectScalar = {
    id?: boolean
    eventId?: boolean
    name?: boolean
    price?: boolean
    totalSeats?: boolean
    availableSeats?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type TicketTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "name" | "price" | "totalSeats" | "availableSeats" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["ticketType"]>
  export type TicketTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    transactions?: boolean | TicketType$transactionsArgs<ExtArgs>
    _count?: boolean | TicketTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TicketTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type TicketTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $TicketTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketType"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      eventId: number
      name: string
      price: number
      totalSeats: number
      availableSeats: number
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["ticketType"]>
    composites: {}
  }

  type TicketTypeGetPayload<S extends boolean | null | undefined | TicketTypeDefaultArgs> = $Result.GetResult<Prisma.$TicketTypePayload, S>

  type TicketTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketTypeCountAggregateInputType | true
    }

  export interface TicketTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketType'], meta: { name: 'TicketType' } }
    /**
     * Find zero or one TicketType that matches the filter.
     * @param {TicketTypeFindUniqueArgs} args - Arguments to find a TicketType
     * @example
     * // Get one TicketType
     * const ticketType = await prisma.ticketType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketTypeFindUniqueArgs>(args: SelectSubset<T, TicketTypeFindUniqueArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TicketType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketTypeFindUniqueOrThrowArgs} args - Arguments to find a TicketType
     * @example
     * // Get one TicketType
     * const ticketType = await prisma.ticketType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeFindFirstArgs} args - Arguments to find a TicketType
     * @example
     * // Get one TicketType
     * const ticketType = await prisma.ticketType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketTypeFindFirstArgs>(args?: SelectSubset<T, TicketTypeFindFirstArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeFindFirstOrThrowArgs} args - Arguments to find a TicketType
     * @example
     * // Get one TicketType
     * const ticketType = await prisma.ticketType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TicketTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketTypes
     * const ticketTypes = await prisma.ticketType.findMany()
     * 
     * // Get first 10 TicketTypes
     * const ticketTypes = await prisma.ticketType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketTypeWithIdOnly = await prisma.ticketType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketTypeFindManyArgs>(args?: SelectSubset<T, TicketTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TicketType.
     * @param {TicketTypeCreateArgs} args - Arguments to create a TicketType.
     * @example
     * // Create one TicketType
     * const TicketType = await prisma.ticketType.create({
     *   data: {
     *     // ... data to create a TicketType
     *   }
     * })
     * 
     */
    create<T extends TicketTypeCreateArgs>(args: SelectSubset<T, TicketTypeCreateArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TicketTypes.
     * @param {TicketTypeCreateManyArgs} args - Arguments to create many TicketTypes.
     * @example
     * // Create many TicketTypes
     * const ticketType = await prisma.ticketType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketTypeCreateManyArgs>(args?: SelectSubset<T, TicketTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TicketTypes and returns the data saved in the database.
     * @param {TicketTypeCreateManyAndReturnArgs} args - Arguments to create many TicketTypes.
     * @example
     * // Create many TicketTypes
     * const ticketType = await prisma.ticketType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TicketTypes and only return the `id`
     * const ticketTypeWithIdOnly = await prisma.ticketType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TicketType.
     * @param {TicketTypeDeleteArgs} args - Arguments to delete one TicketType.
     * @example
     * // Delete one TicketType
     * const TicketType = await prisma.ticketType.delete({
     *   where: {
     *     // ... filter to delete one TicketType
     *   }
     * })
     * 
     */
    delete<T extends TicketTypeDeleteArgs>(args: SelectSubset<T, TicketTypeDeleteArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TicketType.
     * @param {TicketTypeUpdateArgs} args - Arguments to update one TicketType.
     * @example
     * // Update one TicketType
     * const ticketType = await prisma.ticketType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketTypeUpdateArgs>(args: SelectSubset<T, TicketTypeUpdateArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TicketTypes.
     * @param {TicketTypeDeleteManyArgs} args - Arguments to filter TicketTypes to delete.
     * @example
     * // Delete a few TicketTypes
     * const { count } = await prisma.ticketType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketTypeDeleteManyArgs>(args?: SelectSubset<T, TicketTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketTypes
     * const ticketType = await prisma.ticketType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketTypeUpdateManyArgs>(args: SelectSubset<T, TicketTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketTypes and returns the data updated in the database.
     * @param {TicketTypeUpdateManyAndReturnArgs} args - Arguments to update many TicketTypes.
     * @example
     * // Update many TicketTypes
     * const ticketType = await prisma.ticketType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TicketTypes and only return the `id`
     * const ticketTypeWithIdOnly = await prisma.ticketType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TicketType.
     * @param {TicketTypeUpsertArgs} args - Arguments to update or create a TicketType.
     * @example
     * // Update or create a TicketType
     * const ticketType = await prisma.ticketType.upsert({
     *   create: {
     *     // ... data to create a TicketType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketType we want to update
     *   }
     * })
     */
    upsert<T extends TicketTypeUpsertArgs>(args: SelectSubset<T, TicketTypeUpsertArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TicketTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeCountArgs} args - Arguments to filter TicketTypes to count.
     * @example
     * // Count the number of TicketTypes
     * const count = await prisma.ticketType.count({
     *   where: {
     *     // ... the filter for the TicketTypes we want to count
     *   }
     * })
    **/
    count<T extends TicketTypeCountArgs>(
      args?: Subset<T, TicketTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketTypeAggregateArgs>(args: Subset<T, TicketTypeAggregateArgs>): Prisma.PrismaPromise<GetTicketTypeAggregateType<T>>

    /**
     * Group by TicketType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketTypeGroupByArgs['orderBy'] }
        : { orderBy?: TicketTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketType model
   */
  readonly fields: TicketTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends TicketType$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, TicketType$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TicketType model
   */
  interface TicketTypeFieldRefs {
    readonly id: FieldRef<"TicketType", 'Int'>
    readonly eventId: FieldRef<"TicketType", 'Int'>
    readonly name: FieldRef<"TicketType", 'String'>
    readonly price: FieldRef<"TicketType", 'Int'>
    readonly totalSeats: FieldRef<"TicketType", 'Int'>
    readonly availableSeats: FieldRef<"TicketType", 'Int'>
    readonly createdAt: FieldRef<"TicketType", 'DateTime'>
    readonly updatedAt: FieldRef<"TicketType", 'DateTime'>
    readonly deletedAt: FieldRef<"TicketType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TicketType findUnique
   */
  export type TicketTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * Filter, which TicketType to fetch.
     */
    where: TicketTypeWhereUniqueInput
  }

  /**
   * TicketType findUniqueOrThrow
   */
  export type TicketTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * Filter, which TicketType to fetch.
     */
    where: TicketTypeWhereUniqueInput
  }

  /**
   * TicketType findFirst
   */
  export type TicketTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * Filter, which TicketType to fetch.
     */
    where?: TicketTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketTypes to fetch.
     */
    orderBy?: TicketTypeOrderByWithRelationInput | TicketTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketTypes.
     */
    cursor?: TicketTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketTypes.
     */
    distinct?: TicketTypeScalarFieldEnum | TicketTypeScalarFieldEnum[]
  }

  /**
   * TicketType findFirstOrThrow
   */
  export type TicketTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * Filter, which TicketType to fetch.
     */
    where?: TicketTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketTypes to fetch.
     */
    orderBy?: TicketTypeOrderByWithRelationInput | TicketTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketTypes.
     */
    cursor?: TicketTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketTypes.
     */
    distinct?: TicketTypeScalarFieldEnum | TicketTypeScalarFieldEnum[]
  }

  /**
   * TicketType findMany
   */
  export type TicketTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * Filter, which TicketTypes to fetch.
     */
    where?: TicketTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketTypes to fetch.
     */
    orderBy?: TicketTypeOrderByWithRelationInput | TicketTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketTypes.
     */
    cursor?: TicketTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketTypes.
     */
    skip?: number
    distinct?: TicketTypeScalarFieldEnum | TicketTypeScalarFieldEnum[]
  }

  /**
   * TicketType create
   */
  export type TicketTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketType.
     */
    data: XOR<TicketTypeCreateInput, TicketTypeUncheckedCreateInput>
  }

  /**
   * TicketType createMany
   */
  export type TicketTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketTypes.
     */
    data: TicketTypeCreateManyInput | TicketTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketType createManyAndReturn
   */
  export type TicketTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * The data used to create many TicketTypes.
     */
    data: TicketTypeCreateManyInput | TicketTypeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketType update
   */
  export type TicketTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketType.
     */
    data: XOR<TicketTypeUpdateInput, TicketTypeUncheckedUpdateInput>
    /**
     * Choose, which TicketType to update.
     */
    where: TicketTypeWhereUniqueInput
  }

  /**
   * TicketType updateMany
   */
  export type TicketTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketTypes.
     */
    data: XOR<TicketTypeUpdateManyMutationInput, TicketTypeUncheckedUpdateManyInput>
    /**
     * Filter which TicketTypes to update
     */
    where?: TicketTypeWhereInput
    /**
     * Limit how many TicketTypes to update.
     */
    limit?: number
  }

  /**
   * TicketType updateManyAndReturn
   */
  export type TicketTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * The data used to update TicketTypes.
     */
    data: XOR<TicketTypeUpdateManyMutationInput, TicketTypeUncheckedUpdateManyInput>
    /**
     * Filter which TicketTypes to update
     */
    where?: TicketTypeWhereInput
    /**
     * Limit how many TicketTypes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketType upsert
   */
  export type TicketTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketType to update in case it exists.
     */
    where: TicketTypeWhereUniqueInput
    /**
     * In case the TicketType found by the `where` argument doesn't exist, create a new TicketType with this data.
     */
    create: XOR<TicketTypeCreateInput, TicketTypeUncheckedCreateInput>
    /**
     * In case the TicketType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketTypeUpdateInput, TicketTypeUncheckedUpdateInput>
  }

  /**
   * TicketType delete
   */
  export type TicketTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * Filter which TicketType to delete.
     */
    where: TicketTypeWhereUniqueInput
  }

  /**
   * TicketType deleteMany
   */
  export type TicketTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketTypes to delete
     */
    where?: TicketTypeWhereInput
    /**
     * Limit how many TicketTypes to delete.
     */
    limit?: number
  }

  /**
   * TicketType.transactions
   */
  export type TicketType$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * TicketType without action
   */
  export type TicketTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    eventId: number | null
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    userId: number | null
    eventId: number | null
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    userId: number | null
    eventId: number | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    eventId: number | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    userId: number
    eventId: number
    rating: number
    comment: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    userId: number
    eventId: number
    rating: number
    comment: string
    createdAt: Date
    updatedAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    userId?: boolean
    eventId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "eventId" | "rating" | "comment" | "createdAt" | "updatedAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      eventId: number
      rating: number
      comment: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly userId: FieldRef<"Review", 'Int'>
    readonly eventId: FieldRef<"Review", 'Int'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    organizerId: number | null
    eventId: number | null
    ticketTypeId: number | null
    quantity: number | null
    unitPrice: number | null
    totalAmount: number | null
    pointsUsed: number | null
    couponId: number | null
    voucherId: number | null
    finalAmount: number | null
  }

  export type TransactionSumAggregateOutputType = {
    id: number | null
    userId: number | null
    organizerId: number | null
    eventId: number | null
    ticketTypeId: number | null
    quantity: number | null
    unitPrice: number | null
    totalAmount: number | null
    pointsUsed: number | null
    couponId: number | null
    voucherId: number | null
    finalAmount: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: number | null
    userId: number | null
    organizerId: number | null
    eventId: number | null
    status: $Enums.TransactionStatus | null
    ticketTypeId: number | null
    quantity: number | null
    unitPrice: number | null
    totalAmount: number | null
    pointsUsed: number | null
    couponId: number | null
    voucherId: number | null
    finalAmount: number | null
    paymentProof: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    organizerId: number | null
    eventId: number | null
    status: $Enums.TransactionStatus | null
    ticketTypeId: number | null
    quantity: number | null
    unitPrice: number | null
    totalAmount: number | null
    pointsUsed: number | null
    couponId: number | null
    voucherId: number | null
    finalAmount: number | null
    paymentProof: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    userId: number
    organizerId: number
    eventId: number
    status: number
    ticketTypeId: number
    quantity: number
    unitPrice: number
    totalAmount: number
    pointsUsed: number
    couponId: number
    voucherId: number
    finalAmount: number
    paymentProof: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    id?: true
    userId?: true
    organizerId?: true
    eventId?: true
    ticketTypeId?: true
    quantity?: true
    unitPrice?: true
    totalAmount?: true
    pointsUsed?: true
    couponId?: true
    voucherId?: true
    finalAmount?: true
  }

  export type TransactionSumAggregateInputType = {
    id?: true
    userId?: true
    organizerId?: true
    eventId?: true
    ticketTypeId?: true
    quantity?: true
    unitPrice?: true
    totalAmount?: true
    pointsUsed?: true
    couponId?: true
    voucherId?: true
    finalAmount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    userId?: true
    organizerId?: true
    eventId?: true
    status?: true
    ticketTypeId?: true
    quantity?: true
    unitPrice?: true
    totalAmount?: true
    pointsUsed?: true
    couponId?: true
    voucherId?: true
    finalAmount?: true
    paymentProof?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    userId?: true
    organizerId?: true
    eventId?: true
    status?: true
    ticketTypeId?: true
    quantity?: true
    unitPrice?: true
    totalAmount?: true
    pointsUsed?: true
    couponId?: true
    voucherId?: true
    finalAmount?: true
    paymentProof?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    userId?: true
    organizerId?: true
    eventId?: true
    status?: true
    ticketTypeId?: true
    quantity?: true
    unitPrice?: true
    totalAmount?: true
    pointsUsed?: true
    couponId?: true
    voucherId?: true
    finalAmount?: true
    paymentProof?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: number
    userId: number
    organizerId: number
    eventId: number
    status: $Enums.TransactionStatus
    ticketTypeId: number
    quantity: number
    unitPrice: number
    totalAmount: number
    pointsUsed: number
    couponId: number | null
    voucherId: number | null
    finalAmount: number
    paymentProof: string | null
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizerId?: boolean
    eventId?: boolean
    status?: boolean
    ticketTypeId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalAmount?: boolean
    pointsUsed?: boolean
    couponId?: boolean
    voucherId?: boolean
    finalAmount?: boolean
    paymentProof?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    coupon?: boolean | Transaction$couponArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
    organizer?: boolean | UserDefaultArgs<ExtArgs>
    ticketType?: boolean | TicketTypeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    voucher?: boolean | Transaction$voucherArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizerId?: boolean
    eventId?: boolean
    status?: boolean
    ticketTypeId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalAmount?: boolean
    pointsUsed?: boolean
    couponId?: boolean
    voucherId?: boolean
    finalAmount?: boolean
    paymentProof?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    coupon?: boolean | Transaction$couponArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
    organizer?: boolean | UserDefaultArgs<ExtArgs>
    ticketType?: boolean | TicketTypeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    voucher?: boolean | Transaction$voucherArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizerId?: boolean
    eventId?: boolean
    status?: boolean
    ticketTypeId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalAmount?: boolean
    pointsUsed?: boolean
    couponId?: boolean
    voucherId?: boolean
    finalAmount?: boolean
    paymentProof?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    coupon?: boolean | Transaction$couponArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
    organizer?: boolean | UserDefaultArgs<ExtArgs>
    ticketType?: boolean | TicketTypeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    voucher?: boolean | Transaction$voucherArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    userId?: boolean
    organizerId?: boolean
    eventId?: boolean
    status?: boolean
    ticketTypeId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalAmount?: boolean
    pointsUsed?: boolean
    couponId?: boolean
    voucherId?: boolean
    finalAmount?: boolean
    paymentProof?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "organizerId" | "eventId" | "status" | "ticketTypeId" | "quantity" | "unitPrice" | "totalAmount" | "pointsUsed" | "couponId" | "voucherId" | "finalAmount" | "paymentProof" | "expiresAt" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coupon?: boolean | Transaction$couponArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
    organizer?: boolean | UserDefaultArgs<ExtArgs>
    ticketType?: boolean | TicketTypeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    voucher?: boolean | Transaction$voucherArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coupon?: boolean | Transaction$couponArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
    organizer?: boolean | UserDefaultArgs<ExtArgs>
    ticketType?: boolean | TicketTypeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    voucher?: boolean | Transaction$voucherArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coupon?: boolean | Transaction$couponArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
    organizer?: boolean | UserDefaultArgs<ExtArgs>
    ticketType?: boolean | TicketTypeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    voucher?: boolean | Transaction$voucherArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      coupon: Prisma.$CouponPayload<ExtArgs> | null
      event: Prisma.$EventPayload<ExtArgs>
      organizer: Prisma.$UserPayload<ExtArgs>
      ticketType: Prisma.$TicketTypePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      voucher: Prisma.$VoucherPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      organizerId: number
      eventId: number
      status: $Enums.TransactionStatus
      ticketTypeId: number
      quantity: number
      unitPrice: number
      totalAmount: number
      pointsUsed: number
      couponId: number | null
      voucherId: number | null
      finalAmount: number
      paymentProof: string | null
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    coupon<T extends Transaction$couponArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$couponArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    organizer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ticketType<T extends TicketTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketTypeDefaultArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    voucher<T extends Transaction$voucherArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$voucherArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'Int'>
    readonly userId: FieldRef<"Transaction", 'Int'>
    readonly organizerId: FieldRef<"Transaction", 'Int'>
    readonly eventId: FieldRef<"Transaction", 'Int'>
    readonly status: FieldRef<"Transaction", 'TransactionStatus'>
    readonly ticketTypeId: FieldRef<"Transaction", 'Int'>
    readonly quantity: FieldRef<"Transaction", 'Int'>
    readonly unitPrice: FieldRef<"Transaction", 'Int'>
    readonly totalAmount: FieldRef<"Transaction", 'Int'>
    readonly pointsUsed: FieldRef<"Transaction", 'Int'>
    readonly couponId: FieldRef<"Transaction", 'Int'>
    readonly voucherId: FieldRef<"Transaction", 'Int'>
    readonly finalAmount: FieldRef<"Transaction", 'Int'>
    readonly paymentProof: FieldRef<"Transaction", 'String'>
    readonly expiresAt: FieldRef<"Transaction", 'DateTime'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
    readonly updatedAt: FieldRef<"Transaction", 'DateTime'>
    readonly deletedAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction.coupon
   */
  export type Transaction$couponArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    where?: CouponWhereInput
  }

  /**
   * Transaction.voucher
   */
  export type Transaction$voucherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    where?: VoucherWhereInput
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model Voucher
   */

  export type AggregateVoucher = {
    _count: VoucherCountAggregateOutputType | null
    _avg: VoucherAvgAggregateOutputType | null
    _sum: VoucherSumAggregateOutputType | null
    _min: VoucherMinAggregateOutputType | null
    _max: VoucherMaxAggregateOutputType | null
  }

  export type VoucherAvgAggregateOutputType = {
    id: number | null
    organizerId: number | null
    discountValue: number | null
    eventId: number | null
    usageLimit: number | null
  }

  export type VoucherSumAggregateOutputType = {
    id: number | null
    organizerId: number | null
    discountValue: number | null
    eventId: number | null
    usageLimit: number | null
  }

  export type VoucherMinAggregateOutputType = {
    id: number | null
    organizerId: number | null
    code: string | null
    discountValue: number | null
    eventId: number | null
    usageLimit: number | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type VoucherMaxAggregateOutputType = {
    id: number | null
    organizerId: number | null
    code: string | null
    discountValue: number | null
    eventId: number | null
    usageLimit: number | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type VoucherCountAggregateOutputType = {
    id: number
    organizerId: number
    code: number
    discountValue: number
    eventId: number
    usageLimit: number
    startDate: number
    endDate: number
    createdAt: number
    deletedAt: number
    _all: number
  }


  export type VoucherAvgAggregateInputType = {
    id?: true
    organizerId?: true
    discountValue?: true
    eventId?: true
    usageLimit?: true
  }

  export type VoucherSumAggregateInputType = {
    id?: true
    organizerId?: true
    discountValue?: true
    eventId?: true
    usageLimit?: true
  }

  export type VoucherMinAggregateInputType = {
    id?: true
    organizerId?: true
    code?: true
    discountValue?: true
    eventId?: true
    usageLimit?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    deletedAt?: true
  }

  export type VoucherMaxAggregateInputType = {
    id?: true
    organizerId?: true
    code?: true
    discountValue?: true
    eventId?: true
    usageLimit?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    deletedAt?: true
  }

  export type VoucherCountAggregateInputType = {
    id?: true
    organizerId?: true
    code?: true
    discountValue?: true
    eventId?: true
    usageLimit?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    deletedAt?: true
    _all?: true
  }

  export type VoucherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Voucher to aggregate.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vouchers
    **/
    _count?: true | VoucherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VoucherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VoucherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoucherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoucherMaxAggregateInputType
  }

  export type GetVoucherAggregateType<T extends VoucherAggregateArgs> = {
        [P in keyof T & keyof AggregateVoucher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVoucher[P]>
      : GetScalarType<T[P], AggregateVoucher[P]>
  }




  export type VoucherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoucherWhereInput
    orderBy?: VoucherOrderByWithAggregationInput | VoucherOrderByWithAggregationInput[]
    by: VoucherScalarFieldEnum[] | VoucherScalarFieldEnum
    having?: VoucherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoucherCountAggregateInputType | true
    _avg?: VoucherAvgAggregateInputType
    _sum?: VoucherSumAggregateInputType
    _min?: VoucherMinAggregateInputType
    _max?: VoucherMaxAggregateInputType
  }

  export type VoucherGroupByOutputType = {
    id: number
    organizerId: number
    code: string
    discountValue: number
    eventId: number
    usageLimit: number
    startDate: Date
    endDate: Date
    createdAt: Date
    deletedAt: Date | null
    _count: VoucherCountAggregateOutputType | null
    _avg: VoucherAvgAggregateOutputType | null
    _sum: VoucherSumAggregateOutputType | null
    _min: VoucherMinAggregateOutputType | null
    _max: VoucherMaxAggregateOutputType | null
  }

  type GetVoucherGroupByPayload<T extends VoucherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoucherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoucherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoucherGroupByOutputType[P]>
            : GetScalarType<T[P], VoucherGroupByOutputType[P]>
        }
      >
    >


  export type VoucherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizerId?: boolean
    code?: boolean
    discountValue?: boolean
    eventId?: boolean
    usageLimit?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    transactions?: boolean | Voucher$transactionsArgs<ExtArgs>
    userVouchers?: boolean | Voucher$userVouchersArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
    organizer?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | VoucherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voucher"]>

  export type VoucherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizerId?: boolean
    code?: boolean
    discountValue?: boolean
    eventId?: boolean
    usageLimit?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    organizer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voucher"]>

  export type VoucherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizerId?: boolean
    code?: boolean
    discountValue?: boolean
    eventId?: boolean
    usageLimit?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    organizer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voucher"]>

  export type VoucherSelectScalar = {
    id?: boolean
    organizerId?: boolean
    code?: boolean
    discountValue?: boolean
    eventId?: boolean
    usageLimit?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    deletedAt?: boolean
  }

  export type VoucherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizerId" | "code" | "discountValue" | "eventId" | "usageLimit" | "startDate" | "endDate" | "createdAt" | "deletedAt", ExtArgs["result"]["voucher"]>
  export type VoucherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | Voucher$transactionsArgs<ExtArgs>
    userVouchers?: boolean | Voucher$userVouchersArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
    organizer?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | VoucherCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VoucherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    organizer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VoucherIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    organizer?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VoucherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Voucher"
    objects: {
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      userVouchers: Prisma.$UserVoucherPayload<ExtArgs>[]
      event: Prisma.$EventPayload<ExtArgs>
      organizer: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      organizerId: number
      code: string
      discountValue: number
      eventId: number
      usageLimit: number
      startDate: Date
      endDate: Date
      createdAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["voucher"]>
    composites: {}
  }

  type VoucherGetPayload<S extends boolean | null | undefined | VoucherDefaultArgs> = $Result.GetResult<Prisma.$VoucherPayload, S>

  type VoucherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VoucherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoucherCountAggregateInputType | true
    }

  export interface VoucherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Voucher'], meta: { name: 'Voucher' } }
    /**
     * Find zero or one Voucher that matches the filter.
     * @param {VoucherFindUniqueArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoucherFindUniqueArgs>(args: SelectSubset<T, VoucherFindUniqueArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Voucher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VoucherFindUniqueOrThrowArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoucherFindUniqueOrThrowArgs>(args: SelectSubset<T, VoucherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voucher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherFindFirstArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoucherFindFirstArgs>(args?: SelectSubset<T, VoucherFindFirstArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voucher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherFindFirstOrThrowArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoucherFindFirstOrThrowArgs>(args?: SelectSubset<T, VoucherFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vouchers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vouchers
     * const vouchers = await prisma.voucher.findMany()
     * 
     * // Get first 10 Vouchers
     * const vouchers = await prisma.voucher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voucherWithIdOnly = await prisma.voucher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VoucherFindManyArgs>(args?: SelectSubset<T, VoucherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Voucher.
     * @param {VoucherCreateArgs} args - Arguments to create a Voucher.
     * @example
     * // Create one Voucher
     * const Voucher = await prisma.voucher.create({
     *   data: {
     *     // ... data to create a Voucher
     *   }
     * })
     * 
     */
    create<T extends VoucherCreateArgs>(args: SelectSubset<T, VoucherCreateArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vouchers.
     * @param {VoucherCreateManyArgs} args - Arguments to create many Vouchers.
     * @example
     * // Create many Vouchers
     * const voucher = await prisma.voucher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoucherCreateManyArgs>(args?: SelectSubset<T, VoucherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vouchers and returns the data saved in the database.
     * @param {VoucherCreateManyAndReturnArgs} args - Arguments to create many Vouchers.
     * @example
     * // Create many Vouchers
     * const voucher = await prisma.voucher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vouchers and only return the `id`
     * const voucherWithIdOnly = await prisma.voucher.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VoucherCreateManyAndReturnArgs>(args?: SelectSubset<T, VoucherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Voucher.
     * @param {VoucherDeleteArgs} args - Arguments to delete one Voucher.
     * @example
     * // Delete one Voucher
     * const Voucher = await prisma.voucher.delete({
     *   where: {
     *     // ... filter to delete one Voucher
     *   }
     * })
     * 
     */
    delete<T extends VoucherDeleteArgs>(args: SelectSubset<T, VoucherDeleteArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Voucher.
     * @param {VoucherUpdateArgs} args - Arguments to update one Voucher.
     * @example
     * // Update one Voucher
     * const voucher = await prisma.voucher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoucherUpdateArgs>(args: SelectSubset<T, VoucherUpdateArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vouchers.
     * @param {VoucherDeleteManyArgs} args - Arguments to filter Vouchers to delete.
     * @example
     * // Delete a few Vouchers
     * const { count } = await prisma.voucher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoucherDeleteManyArgs>(args?: SelectSubset<T, VoucherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vouchers
     * const voucher = await prisma.voucher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoucherUpdateManyArgs>(args: SelectSubset<T, VoucherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vouchers and returns the data updated in the database.
     * @param {VoucherUpdateManyAndReturnArgs} args - Arguments to update many Vouchers.
     * @example
     * // Update many Vouchers
     * const voucher = await prisma.voucher.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vouchers and only return the `id`
     * const voucherWithIdOnly = await prisma.voucher.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VoucherUpdateManyAndReturnArgs>(args: SelectSubset<T, VoucherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Voucher.
     * @param {VoucherUpsertArgs} args - Arguments to update or create a Voucher.
     * @example
     * // Update or create a Voucher
     * const voucher = await prisma.voucher.upsert({
     *   create: {
     *     // ... data to create a Voucher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Voucher we want to update
     *   }
     * })
     */
    upsert<T extends VoucherUpsertArgs>(args: SelectSubset<T, VoucherUpsertArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherCountArgs} args - Arguments to filter Vouchers to count.
     * @example
     * // Count the number of Vouchers
     * const count = await prisma.voucher.count({
     *   where: {
     *     // ... the filter for the Vouchers we want to count
     *   }
     * })
    **/
    count<T extends VoucherCountArgs>(
      args?: Subset<T, VoucherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoucherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Voucher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VoucherAggregateArgs>(args: Subset<T, VoucherAggregateArgs>): Prisma.PrismaPromise<GetVoucherAggregateType<T>>

    /**
     * Group by Voucher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VoucherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoucherGroupByArgs['orderBy'] }
        : { orderBy?: VoucherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VoucherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoucherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Voucher model
   */
  readonly fields: VoucherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Voucher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoucherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transactions<T extends Voucher$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Voucher$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userVouchers<T extends Voucher$userVouchersArgs<ExtArgs> = {}>(args?: Subset<T, Voucher$userVouchersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserVoucherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    organizer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Voucher model
   */
  interface VoucherFieldRefs {
    readonly id: FieldRef<"Voucher", 'Int'>
    readonly organizerId: FieldRef<"Voucher", 'Int'>
    readonly code: FieldRef<"Voucher", 'String'>
    readonly discountValue: FieldRef<"Voucher", 'Int'>
    readonly eventId: FieldRef<"Voucher", 'Int'>
    readonly usageLimit: FieldRef<"Voucher", 'Int'>
    readonly startDate: FieldRef<"Voucher", 'DateTime'>
    readonly endDate: FieldRef<"Voucher", 'DateTime'>
    readonly createdAt: FieldRef<"Voucher", 'DateTime'>
    readonly deletedAt: FieldRef<"Voucher", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Voucher findUnique
   */
  export type VoucherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher findUniqueOrThrow
   */
  export type VoucherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher findFirst
   */
  export type VoucherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vouchers.
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vouchers.
     */
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * Voucher findFirstOrThrow
   */
  export type VoucherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vouchers.
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vouchers.
     */
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * Voucher findMany
   */
  export type VoucherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Vouchers to fetch.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vouchers.
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * Voucher create
   */
  export type VoucherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * The data needed to create a Voucher.
     */
    data: XOR<VoucherCreateInput, VoucherUncheckedCreateInput>
  }

  /**
   * Voucher createMany
   */
  export type VoucherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vouchers.
     */
    data: VoucherCreateManyInput | VoucherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Voucher createManyAndReturn
   */
  export type VoucherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * The data used to create many Vouchers.
     */
    data: VoucherCreateManyInput | VoucherCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Voucher update
   */
  export type VoucherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * The data needed to update a Voucher.
     */
    data: XOR<VoucherUpdateInput, VoucherUncheckedUpdateInput>
    /**
     * Choose, which Voucher to update.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher updateMany
   */
  export type VoucherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vouchers.
     */
    data: XOR<VoucherUpdateManyMutationInput, VoucherUncheckedUpdateManyInput>
    /**
     * Filter which Vouchers to update
     */
    where?: VoucherWhereInput
    /**
     * Limit how many Vouchers to update.
     */
    limit?: number
  }

  /**
   * Voucher updateManyAndReturn
   */
  export type VoucherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * The data used to update Vouchers.
     */
    data: XOR<VoucherUpdateManyMutationInput, VoucherUncheckedUpdateManyInput>
    /**
     * Filter which Vouchers to update
     */
    where?: VoucherWhereInput
    /**
     * Limit how many Vouchers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Voucher upsert
   */
  export type VoucherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * The filter to search for the Voucher to update in case it exists.
     */
    where: VoucherWhereUniqueInput
    /**
     * In case the Voucher found by the `where` argument doesn't exist, create a new Voucher with this data.
     */
    create: XOR<VoucherCreateInput, VoucherUncheckedCreateInput>
    /**
     * In case the Voucher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoucherUpdateInput, VoucherUncheckedUpdateInput>
  }

  /**
   * Voucher delete
   */
  export type VoucherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter which Voucher to delete.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher deleteMany
   */
  export type VoucherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vouchers to delete
     */
    where?: VoucherWhereInput
    /**
     * Limit how many Vouchers to delete.
     */
    limit?: number
  }

  /**
   * Voucher.transactions
   */
  export type Voucher$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Voucher.userVouchers
   */
  export type Voucher$userVouchersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVoucher
     */
    select?: UserVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVoucher
     */
    omit?: UserVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVoucherInclude<ExtArgs> | null
    where?: UserVoucherWhereInput
    orderBy?: UserVoucherOrderByWithRelationInput | UserVoucherOrderByWithRelationInput[]
    cursor?: UserVoucherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserVoucherScalarFieldEnum | UserVoucherScalarFieldEnum[]
  }

  /**
   * Voucher without action
   */
  export type VoucherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
  }


  /**
   * Model Coupon
   */

  export type AggregateCoupon = {
    _count: CouponCountAggregateOutputType | null
    _avg: CouponAvgAggregateOutputType | null
    _sum: CouponSumAggregateOutputType | null
    _min: CouponMinAggregateOutputType | null
    _max: CouponMaxAggregateOutputType | null
  }

  export type CouponAvgAggregateOutputType = {
    id: number | null
    discountValue: number | null
    usageLimit: number | null
  }

  export type CouponSumAggregateOutputType = {
    id: number | null
    discountValue: number | null
    usageLimit: number | null
  }

  export type CouponMinAggregateOutputType = {
    id: number | null
    code: string | null
    discountValue: number | null
    usageLimit: number | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type CouponMaxAggregateOutputType = {
    id: number | null
    code: string | null
    discountValue: number | null
    usageLimit: number | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type CouponCountAggregateOutputType = {
    id: number
    code: number
    discountValue: number
    usageLimit: number
    startDate: number
    endDate: number
    createdAt: number
    deletedAt: number
    _all: number
  }


  export type CouponAvgAggregateInputType = {
    id?: true
    discountValue?: true
    usageLimit?: true
  }

  export type CouponSumAggregateInputType = {
    id?: true
    discountValue?: true
    usageLimit?: true
  }

  export type CouponMinAggregateInputType = {
    id?: true
    code?: true
    discountValue?: true
    usageLimit?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    deletedAt?: true
  }

  export type CouponMaxAggregateInputType = {
    id?: true
    code?: true
    discountValue?: true
    usageLimit?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    deletedAt?: true
  }

  export type CouponCountAggregateInputType = {
    id?: true
    code?: true
    discountValue?: true
    usageLimit?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    deletedAt?: true
    _all?: true
  }

  export type CouponAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coupon to aggregate.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Coupons
    **/
    _count?: true | CouponCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CouponAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CouponSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CouponMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CouponMaxAggregateInputType
  }

  export type GetCouponAggregateType<T extends CouponAggregateArgs> = {
        [P in keyof T & keyof AggregateCoupon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoupon[P]>
      : GetScalarType<T[P], AggregateCoupon[P]>
  }




  export type CouponGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CouponWhereInput
    orderBy?: CouponOrderByWithAggregationInput | CouponOrderByWithAggregationInput[]
    by: CouponScalarFieldEnum[] | CouponScalarFieldEnum
    having?: CouponScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CouponCountAggregateInputType | true
    _avg?: CouponAvgAggregateInputType
    _sum?: CouponSumAggregateInputType
    _min?: CouponMinAggregateInputType
    _max?: CouponMaxAggregateInputType
  }

  export type CouponGroupByOutputType = {
    id: number
    code: string
    discountValue: number
    usageLimit: number
    startDate: Date
    endDate: Date
    createdAt: Date
    deletedAt: Date | null
    _count: CouponCountAggregateOutputType | null
    _avg: CouponAvgAggregateOutputType | null
    _sum: CouponSumAggregateOutputType | null
    _min: CouponMinAggregateOutputType | null
    _max: CouponMaxAggregateOutputType | null
  }

  type GetCouponGroupByPayload<T extends CouponGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CouponGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CouponGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CouponGroupByOutputType[P]>
            : GetScalarType<T[P], CouponGroupByOutputType[P]>
        }
      >
    >


  export type CouponSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    discountValue?: boolean
    usageLimit?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    transactions?: boolean | Coupon$transactionsArgs<ExtArgs>
    userCoupons?: boolean | Coupon$userCouponsArgs<ExtArgs>
    _count?: boolean | CouponCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coupon"]>

  export type CouponSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    discountValue?: boolean
    usageLimit?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["coupon"]>

  export type CouponSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    discountValue?: boolean
    usageLimit?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["coupon"]>

  export type CouponSelectScalar = {
    id?: boolean
    code?: boolean
    discountValue?: boolean
    usageLimit?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    deletedAt?: boolean
  }

  export type CouponOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "discountValue" | "usageLimit" | "startDate" | "endDate" | "createdAt" | "deletedAt", ExtArgs["result"]["coupon"]>
  export type CouponInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | Coupon$transactionsArgs<ExtArgs>
    userCoupons?: boolean | Coupon$userCouponsArgs<ExtArgs>
    _count?: boolean | CouponCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CouponIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CouponIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CouponPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Coupon"
    objects: {
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      userCoupons: Prisma.$UserCouponPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      discountValue: number
      usageLimit: number
      startDate: Date
      endDate: Date
      createdAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["coupon"]>
    composites: {}
  }

  type CouponGetPayload<S extends boolean | null | undefined | CouponDefaultArgs> = $Result.GetResult<Prisma.$CouponPayload, S>

  type CouponCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CouponFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CouponCountAggregateInputType | true
    }

  export interface CouponDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Coupon'], meta: { name: 'Coupon' } }
    /**
     * Find zero or one Coupon that matches the filter.
     * @param {CouponFindUniqueArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CouponFindUniqueArgs>(args: SelectSubset<T, CouponFindUniqueArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Coupon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CouponFindUniqueOrThrowArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CouponFindUniqueOrThrowArgs>(args: SelectSubset<T, CouponFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coupon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindFirstArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CouponFindFirstArgs>(args?: SelectSubset<T, CouponFindFirstArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coupon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindFirstOrThrowArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CouponFindFirstOrThrowArgs>(args?: SelectSubset<T, CouponFindFirstOrThrowArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Coupons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coupons
     * const coupons = await prisma.coupon.findMany()
     * 
     * // Get first 10 Coupons
     * const coupons = await prisma.coupon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const couponWithIdOnly = await prisma.coupon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CouponFindManyArgs>(args?: SelectSubset<T, CouponFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Coupon.
     * @param {CouponCreateArgs} args - Arguments to create a Coupon.
     * @example
     * // Create one Coupon
     * const Coupon = await prisma.coupon.create({
     *   data: {
     *     // ... data to create a Coupon
     *   }
     * })
     * 
     */
    create<T extends CouponCreateArgs>(args: SelectSubset<T, CouponCreateArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Coupons.
     * @param {CouponCreateManyArgs} args - Arguments to create many Coupons.
     * @example
     * // Create many Coupons
     * const coupon = await prisma.coupon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CouponCreateManyArgs>(args?: SelectSubset<T, CouponCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Coupons and returns the data saved in the database.
     * @param {CouponCreateManyAndReturnArgs} args - Arguments to create many Coupons.
     * @example
     * // Create many Coupons
     * const coupon = await prisma.coupon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Coupons and only return the `id`
     * const couponWithIdOnly = await prisma.coupon.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CouponCreateManyAndReturnArgs>(args?: SelectSubset<T, CouponCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Coupon.
     * @param {CouponDeleteArgs} args - Arguments to delete one Coupon.
     * @example
     * // Delete one Coupon
     * const Coupon = await prisma.coupon.delete({
     *   where: {
     *     // ... filter to delete one Coupon
     *   }
     * })
     * 
     */
    delete<T extends CouponDeleteArgs>(args: SelectSubset<T, CouponDeleteArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Coupon.
     * @param {CouponUpdateArgs} args - Arguments to update one Coupon.
     * @example
     * // Update one Coupon
     * const coupon = await prisma.coupon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CouponUpdateArgs>(args: SelectSubset<T, CouponUpdateArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Coupons.
     * @param {CouponDeleteManyArgs} args - Arguments to filter Coupons to delete.
     * @example
     * // Delete a few Coupons
     * const { count } = await prisma.coupon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CouponDeleteManyArgs>(args?: SelectSubset<T, CouponDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coupons
     * const coupon = await prisma.coupon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CouponUpdateManyArgs>(args: SelectSubset<T, CouponUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coupons and returns the data updated in the database.
     * @param {CouponUpdateManyAndReturnArgs} args - Arguments to update many Coupons.
     * @example
     * // Update many Coupons
     * const coupon = await prisma.coupon.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Coupons and only return the `id`
     * const couponWithIdOnly = await prisma.coupon.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CouponUpdateManyAndReturnArgs>(args: SelectSubset<T, CouponUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Coupon.
     * @param {CouponUpsertArgs} args - Arguments to update or create a Coupon.
     * @example
     * // Update or create a Coupon
     * const coupon = await prisma.coupon.upsert({
     *   create: {
     *     // ... data to create a Coupon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coupon we want to update
     *   }
     * })
     */
    upsert<T extends CouponUpsertArgs>(args: SelectSubset<T, CouponUpsertArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponCountArgs} args - Arguments to filter Coupons to count.
     * @example
     * // Count the number of Coupons
     * const count = await prisma.coupon.count({
     *   where: {
     *     // ... the filter for the Coupons we want to count
     *   }
     * })
    **/
    count<T extends CouponCountArgs>(
      args?: Subset<T, CouponCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CouponCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CouponAggregateArgs>(args: Subset<T, CouponAggregateArgs>): Prisma.PrismaPromise<GetCouponAggregateType<T>>

    /**
     * Group by Coupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CouponGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CouponGroupByArgs['orderBy'] }
        : { orderBy?: CouponGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CouponGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCouponGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Coupon model
   */
  readonly fields: CouponFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Coupon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CouponClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transactions<T extends Coupon$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Coupon$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userCoupons<T extends Coupon$userCouponsArgs<ExtArgs> = {}>(args?: Subset<T, Coupon$userCouponsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Coupon model
   */
  interface CouponFieldRefs {
    readonly id: FieldRef<"Coupon", 'Int'>
    readonly code: FieldRef<"Coupon", 'String'>
    readonly discountValue: FieldRef<"Coupon", 'Int'>
    readonly usageLimit: FieldRef<"Coupon", 'Int'>
    readonly startDate: FieldRef<"Coupon", 'DateTime'>
    readonly endDate: FieldRef<"Coupon", 'DateTime'>
    readonly createdAt: FieldRef<"Coupon", 'DateTime'>
    readonly deletedAt: FieldRef<"Coupon", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Coupon findUnique
   */
  export type CouponFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon findUniqueOrThrow
   */
  export type CouponFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon findFirst
   */
  export type CouponFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coupons.
     */
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * Coupon findFirstOrThrow
   */
  export type CouponFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coupons.
     */
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * Coupon findMany
   */
  export type CouponFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupons to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * Coupon create
   */
  export type CouponCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * The data needed to create a Coupon.
     */
    data: XOR<CouponCreateInput, CouponUncheckedCreateInput>
  }

  /**
   * Coupon createMany
   */
  export type CouponCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Coupons.
     */
    data: CouponCreateManyInput | CouponCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Coupon createManyAndReturn
   */
  export type CouponCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * The data used to create many Coupons.
     */
    data: CouponCreateManyInput | CouponCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Coupon update
   */
  export type CouponUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * The data needed to update a Coupon.
     */
    data: XOR<CouponUpdateInput, CouponUncheckedUpdateInput>
    /**
     * Choose, which Coupon to update.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon updateMany
   */
  export type CouponUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Coupons.
     */
    data: XOR<CouponUpdateManyMutationInput, CouponUncheckedUpdateManyInput>
    /**
     * Filter which Coupons to update
     */
    where?: CouponWhereInput
    /**
     * Limit how many Coupons to update.
     */
    limit?: number
  }

  /**
   * Coupon updateManyAndReturn
   */
  export type CouponUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * The data used to update Coupons.
     */
    data: XOR<CouponUpdateManyMutationInput, CouponUncheckedUpdateManyInput>
    /**
     * Filter which Coupons to update
     */
    where?: CouponWhereInput
    /**
     * Limit how many Coupons to update.
     */
    limit?: number
  }

  /**
   * Coupon upsert
   */
  export type CouponUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * The filter to search for the Coupon to update in case it exists.
     */
    where: CouponWhereUniqueInput
    /**
     * In case the Coupon found by the `where` argument doesn't exist, create a new Coupon with this data.
     */
    create: XOR<CouponCreateInput, CouponUncheckedCreateInput>
    /**
     * In case the Coupon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CouponUpdateInput, CouponUncheckedUpdateInput>
  }

  /**
   * Coupon delete
   */
  export type CouponDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter which Coupon to delete.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon deleteMany
   */
  export type CouponDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coupons to delete
     */
    where?: CouponWhereInput
    /**
     * Limit how many Coupons to delete.
     */
    limit?: number
  }

  /**
   * Coupon.transactions
   */
  export type Coupon$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Coupon.userCoupons
   */
  export type Coupon$userCouponsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCoupon
     */
    omit?: UserCouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
    where?: UserCouponWhereInput
    orderBy?: UserCouponOrderByWithRelationInput | UserCouponOrderByWithRelationInput[]
    cursor?: UserCouponWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCouponScalarFieldEnum | UserCouponScalarFieldEnum[]
  }

  /**
   * Coupon without action
   */
  export type CouponDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
  }


  /**
   * Model UserVoucher
   */

  export type AggregateUserVoucher = {
    _count: UserVoucherCountAggregateOutputType | null
    _avg: UserVoucherAvgAggregateOutputType | null
    _sum: UserVoucherSumAggregateOutputType | null
    _min: UserVoucherMinAggregateOutputType | null
    _max: UserVoucherMaxAggregateOutputType | null
  }

  export type UserVoucherAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    voucherId: number | null
  }

  export type UserVoucherSumAggregateOutputType = {
    id: number | null
    userId: number | null
    voucherId: number | null
  }

  export type UserVoucherMinAggregateOutputType = {
    id: number | null
    userId: number | null
    voucherId: number | null
    status: $Enums.VoucherStatus | null
    usedAt: Date | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type UserVoucherMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    voucherId: number | null
    status: $Enums.VoucherStatus | null
    usedAt: Date | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type UserVoucherCountAggregateOutputType = {
    id: number
    userId: number
    voucherId: number
    status: number
    usedAt: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type UserVoucherAvgAggregateInputType = {
    id?: true
    userId?: true
    voucherId?: true
  }

  export type UserVoucherSumAggregateInputType = {
    id?: true
    userId?: true
    voucherId?: true
  }

  export type UserVoucherMinAggregateInputType = {
    id?: true
    userId?: true
    voucherId?: true
    status?: true
    usedAt?: true
    expiresAt?: true
    createdAt?: true
  }

  export type UserVoucherMaxAggregateInputType = {
    id?: true
    userId?: true
    voucherId?: true
    status?: true
    usedAt?: true
    expiresAt?: true
    createdAt?: true
  }

  export type UserVoucherCountAggregateInputType = {
    id?: true
    userId?: true
    voucherId?: true
    status?: true
    usedAt?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type UserVoucherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserVoucher to aggregate.
     */
    where?: UserVoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVouchers to fetch.
     */
    orderBy?: UserVoucherOrderByWithRelationInput | UserVoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserVoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserVouchers
    **/
    _count?: true | UserVoucherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserVoucherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserVoucherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserVoucherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserVoucherMaxAggregateInputType
  }

  export type GetUserVoucherAggregateType<T extends UserVoucherAggregateArgs> = {
        [P in keyof T & keyof AggregateUserVoucher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserVoucher[P]>
      : GetScalarType<T[P], AggregateUserVoucher[P]>
  }




  export type UserVoucherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserVoucherWhereInput
    orderBy?: UserVoucherOrderByWithAggregationInput | UserVoucherOrderByWithAggregationInput[]
    by: UserVoucherScalarFieldEnum[] | UserVoucherScalarFieldEnum
    having?: UserVoucherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserVoucherCountAggregateInputType | true
    _avg?: UserVoucherAvgAggregateInputType
    _sum?: UserVoucherSumAggregateInputType
    _min?: UserVoucherMinAggregateInputType
    _max?: UserVoucherMaxAggregateInputType
  }

  export type UserVoucherGroupByOutputType = {
    id: number
    userId: number
    voucherId: number
    status: $Enums.VoucherStatus
    usedAt: Date | null
    expiresAt: Date
    createdAt: Date
    _count: UserVoucherCountAggregateOutputType | null
    _avg: UserVoucherAvgAggregateOutputType | null
    _sum: UserVoucherSumAggregateOutputType | null
    _min: UserVoucherMinAggregateOutputType | null
    _max: UserVoucherMaxAggregateOutputType | null
  }

  type GetUserVoucherGroupByPayload<T extends UserVoucherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserVoucherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserVoucherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserVoucherGroupByOutputType[P]>
            : GetScalarType<T[P], UserVoucherGroupByOutputType[P]>
        }
      >
    >


  export type UserVoucherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    voucherId?: boolean
    status?: boolean
    usedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    voucher?: boolean | VoucherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userVoucher"]>

  export type UserVoucherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    voucherId?: boolean
    status?: boolean
    usedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    voucher?: boolean | VoucherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userVoucher"]>

  export type UserVoucherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    voucherId?: boolean
    status?: boolean
    usedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    voucher?: boolean | VoucherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userVoucher"]>

  export type UserVoucherSelectScalar = {
    id?: boolean
    userId?: boolean
    voucherId?: boolean
    status?: boolean
    usedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type UserVoucherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "voucherId" | "status" | "usedAt" | "expiresAt" | "createdAt", ExtArgs["result"]["userVoucher"]>
  export type UserVoucherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    voucher?: boolean | VoucherDefaultArgs<ExtArgs>
  }
  export type UserVoucherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    voucher?: boolean | VoucherDefaultArgs<ExtArgs>
  }
  export type UserVoucherIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    voucher?: boolean | VoucherDefaultArgs<ExtArgs>
  }

  export type $UserVoucherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserVoucher"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      voucher: Prisma.$VoucherPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      voucherId: number
      status: $Enums.VoucherStatus
      usedAt: Date | null
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["userVoucher"]>
    composites: {}
  }

  type UserVoucherGetPayload<S extends boolean | null | undefined | UserVoucherDefaultArgs> = $Result.GetResult<Prisma.$UserVoucherPayload, S>

  type UserVoucherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserVoucherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserVoucherCountAggregateInputType | true
    }

  export interface UserVoucherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserVoucher'], meta: { name: 'UserVoucher' } }
    /**
     * Find zero or one UserVoucher that matches the filter.
     * @param {UserVoucherFindUniqueArgs} args - Arguments to find a UserVoucher
     * @example
     * // Get one UserVoucher
     * const userVoucher = await prisma.userVoucher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserVoucherFindUniqueArgs>(args: SelectSubset<T, UserVoucherFindUniqueArgs<ExtArgs>>): Prisma__UserVoucherClient<$Result.GetResult<Prisma.$UserVoucherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserVoucher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserVoucherFindUniqueOrThrowArgs} args - Arguments to find a UserVoucher
     * @example
     * // Get one UserVoucher
     * const userVoucher = await prisma.userVoucher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserVoucherFindUniqueOrThrowArgs>(args: SelectSubset<T, UserVoucherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserVoucherClient<$Result.GetResult<Prisma.$UserVoucherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserVoucher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVoucherFindFirstArgs} args - Arguments to find a UserVoucher
     * @example
     * // Get one UserVoucher
     * const userVoucher = await prisma.userVoucher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserVoucherFindFirstArgs>(args?: SelectSubset<T, UserVoucherFindFirstArgs<ExtArgs>>): Prisma__UserVoucherClient<$Result.GetResult<Prisma.$UserVoucherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserVoucher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVoucherFindFirstOrThrowArgs} args - Arguments to find a UserVoucher
     * @example
     * // Get one UserVoucher
     * const userVoucher = await prisma.userVoucher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserVoucherFindFirstOrThrowArgs>(args?: SelectSubset<T, UserVoucherFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserVoucherClient<$Result.GetResult<Prisma.$UserVoucherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserVouchers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVoucherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserVouchers
     * const userVouchers = await prisma.userVoucher.findMany()
     * 
     * // Get first 10 UserVouchers
     * const userVouchers = await prisma.userVoucher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userVoucherWithIdOnly = await prisma.userVoucher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserVoucherFindManyArgs>(args?: SelectSubset<T, UserVoucherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserVoucherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserVoucher.
     * @param {UserVoucherCreateArgs} args - Arguments to create a UserVoucher.
     * @example
     * // Create one UserVoucher
     * const UserVoucher = await prisma.userVoucher.create({
     *   data: {
     *     // ... data to create a UserVoucher
     *   }
     * })
     * 
     */
    create<T extends UserVoucherCreateArgs>(args: SelectSubset<T, UserVoucherCreateArgs<ExtArgs>>): Prisma__UserVoucherClient<$Result.GetResult<Prisma.$UserVoucherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserVouchers.
     * @param {UserVoucherCreateManyArgs} args - Arguments to create many UserVouchers.
     * @example
     * // Create many UserVouchers
     * const userVoucher = await prisma.userVoucher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserVoucherCreateManyArgs>(args?: SelectSubset<T, UserVoucherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserVouchers and returns the data saved in the database.
     * @param {UserVoucherCreateManyAndReturnArgs} args - Arguments to create many UserVouchers.
     * @example
     * // Create many UserVouchers
     * const userVoucher = await prisma.userVoucher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserVouchers and only return the `id`
     * const userVoucherWithIdOnly = await prisma.userVoucher.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserVoucherCreateManyAndReturnArgs>(args?: SelectSubset<T, UserVoucherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserVoucherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserVoucher.
     * @param {UserVoucherDeleteArgs} args - Arguments to delete one UserVoucher.
     * @example
     * // Delete one UserVoucher
     * const UserVoucher = await prisma.userVoucher.delete({
     *   where: {
     *     // ... filter to delete one UserVoucher
     *   }
     * })
     * 
     */
    delete<T extends UserVoucherDeleteArgs>(args: SelectSubset<T, UserVoucherDeleteArgs<ExtArgs>>): Prisma__UserVoucherClient<$Result.GetResult<Prisma.$UserVoucherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserVoucher.
     * @param {UserVoucherUpdateArgs} args - Arguments to update one UserVoucher.
     * @example
     * // Update one UserVoucher
     * const userVoucher = await prisma.userVoucher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserVoucherUpdateArgs>(args: SelectSubset<T, UserVoucherUpdateArgs<ExtArgs>>): Prisma__UserVoucherClient<$Result.GetResult<Prisma.$UserVoucherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserVouchers.
     * @param {UserVoucherDeleteManyArgs} args - Arguments to filter UserVouchers to delete.
     * @example
     * // Delete a few UserVouchers
     * const { count } = await prisma.userVoucher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserVoucherDeleteManyArgs>(args?: SelectSubset<T, UserVoucherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserVouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVoucherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserVouchers
     * const userVoucher = await prisma.userVoucher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserVoucherUpdateManyArgs>(args: SelectSubset<T, UserVoucherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserVouchers and returns the data updated in the database.
     * @param {UserVoucherUpdateManyAndReturnArgs} args - Arguments to update many UserVouchers.
     * @example
     * // Update many UserVouchers
     * const userVoucher = await prisma.userVoucher.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserVouchers and only return the `id`
     * const userVoucherWithIdOnly = await prisma.userVoucher.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserVoucherUpdateManyAndReturnArgs>(args: SelectSubset<T, UserVoucherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserVoucherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserVoucher.
     * @param {UserVoucherUpsertArgs} args - Arguments to update or create a UserVoucher.
     * @example
     * // Update or create a UserVoucher
     * const userVoucher = await prisma.userVoucher.upsert({
     *   create: {
     *     // ... data to create a UserVoucher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserVoucher we want to update
     *   }
     * })
     */
    upsert<T extends UserVoucherUpsertArgs>(args: SelectSubset<T, UserVoucherUpsertArgs<ExtArgs>>): Prisma__UserVoucherClient<$Result.GetResult<Prisma.$UserVoucherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserVouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVoucherCountArgs} args - Arguments to filter UserVouchers to count.
     * @example
     * // Count the number of UserVouchers
     * const count = await prisma.userVoucher.count({
     *   where: {
     *     // ... the filter for the UserVouchers we want to count
     *   }
     * })
    **/
    count<T extends UserVoucherCountArgs>(
      args?: Subset<T, UserVoucherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserVoucherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserVoucher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVoucherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserVoucherAggregateArgs>(args: Subset<T, UserVoucherAggregateArgs>): Prisma.PrismaPromise<GetUserVoucherAggregateType<T>>

    /**
     * Group by UserVoucher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVoucherGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserVoucherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserVoucherGroupByArgs['orderBy'] }
        : { orderBy?: UserVoucherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserVoucherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserVoucherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserVoucher model
   */
  readonly fields: UserVoucherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserVoucher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserVoucherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    voucher<T extends VoucherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VoucherDefaultArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserVoucher model
   */
  interface UserVoucherFieldRefs {
    readonly id: FieldRef<"UserVoucher", 'Int'>
    readonly userId: FieldRef<"UserVoucher", 'Int'>
    readonly voucherId: FieldRef<"UserVoucher", 'Int'>
    readonly status: FieldRef<"UserVoucher", 'VoucherStatus'>
    readonly usedAt: FieldRef<"UserVoucher", 'DateTime'>
    readonly expiresAt: FieldRef<"UserVoucher", 'DateTime'>
    readonly createdAt: FieldRef<"UserVoucher", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserVoucher findUnique
   */
  export type UserVoucherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVoucher
     */
    select?: UserVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVoucher
     */
    omit?: UserVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVoucherInclude<ExtArgs> | null
    /**
     * Filter, which UserVoucher to fetch.
     */
    where: UserVoucherWhereUniqueInput
  }

  /**
   * UserVoucher findUniqueOrThrow
   */
  export type UserVoucherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVoucher
     */
    select?: UserVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVoucher
     */
    omit?: UserVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVoucherInclude<ExtArgs> | null
    /**
     * Filter, which UserVoucher to fetch.
     */
    where: UserVoucherWhereUniqueInput
  }

  /**
   * UserVoucher findFirst
   */
  export type UserVoucherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVoucher
     */
    select?: UserVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVoucher
     */
    omit?: UserVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVoucherInclude<ExtArgs> | null
    /**
     * Filter, which UserVoucher to fetch.
     */
    where?: UserVoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVouchers to fetch.
     */
    orderBy?: UserVoucherOrderByWithRelationInput | UserVoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserVouchers.
     */
    cursor?: UserVoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserVouchers.
     */
    distinct?: UserVoucherScalarFieldEnum | UserVoucherScalarFieldEnum[]
  }

  /**
   * UserVoucher findFirstOrThrow
   */
  export type UserVoucherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVoucher
     */
    select?: UserVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVoucher
     */
    omit?: UserVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVoucherInclude<ExtArgs> | null
    /**
     * Filter, which UserVoucher to fetch.
     */
    where?: UserVoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVouchers to fetch.
     */
    orderBy?: UserVoucherOrderByWithRelationInput | UserVoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserVouchers.
     */
    cursor?: UserVoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserVouchers.
     */
    distinct?: UserVoucherScalarFieldEnum | UserVoucherScalarFieldEnum[]
  }

  /**
   * UserVoucher findMany
   */
  export type UserVoucherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVoucher
     */
    select?: UserVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVoucher
     */
    omit?: UserVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVoucherInclude<ExtArgs> | null
    /**
     * Filter, which UserVouchers to fetch.
     */
    where?: UserVoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVouchers to fetch.
     */
    orderBy?: UserVoucherOrderByWithRelationInput | UserVoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserVouchers.
     */
    cursor?: UserVoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVouchers.
     */
    skip?: number
    distinct?: UserVoucherScalarFieldEnum | UserVoucherScalarFieldEnum[]
  }

  /**
   * UserVoucher create
   */
  export type UserVoucherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVoucher
     */
    select?: UserVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVoucher
     */
    omit?: UserVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVoucherInclude<ExtArgs> | null
    /**
     * The data needed to create a UserVoucher.
     */
    data: XOR<UserVoucherCreateInput, UserVoucherUncheckedCreateInput>
  }

  /**
   * UserVoucher createMany
   */
  export type UserVoucherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserVouchers.
     */
    data: UserVoucherCreateManyInput | UserVoucherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserVoucher createManyAndReturn
   */
  export type UserVoucherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVoucher
     */
    select?: UserVoucherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserVoucher
     */
    omit?: UserVoucherOmit<ExtArgs> | null
    /**
     * The data used to create many UserVouchers.
     */
    data: UserVoucherCreateManyInput | UserVoucherCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVoucherIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserVoucher update
   */
  export type UserVoucherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVoucher
     */
    select?: UserVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVoucher
     */
    omit?: UserVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVoucherInclude<ExtArgs> | null
    /**
     * The data needed to update a UserVoucher.
     */
    data: XOR<UserVoucherUpdateInput, UserVoucherUncheckedUpdateInput>
    /**
     * Choose, which UserVoucher to update.
     */
    where: UserVoucherWhereUniqueInput
  }

  /**
   * UserVoucher updateMany
   */
  export type UserVoucherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserVouchers.
     */
    data: XOR<UserVoucherUpdateManyMutationInput, UserVoucherUncheckedUpdateManyInput>
    /**
     * Filter which UserVouchers to update
     */
    where?: UserVoucherWhereInput
    /**
     * Limit how many UserVouchers to update.
     */
    limit?: number
  }

  /**
   * UserVoucher updateManyAndReturn
   */
  export type UserVoucherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVoucher
     */
    select?: UserVoucherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserVoucher
     */
    omit?: UserVoucherOmit<ExtArgs> | null
    /**
     * The data used to update UserVouchers.
     */
    data: XOR<UserVoucherUpdateManyMutationInput, UserVoucherUncheckedUpdateManyInput>
    /**
     * Filter which UserVouchers to update
     */
    where?: UserVoucherWhereInput
    /**
     * Limit how many UserVouchers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVoucherIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserVoucher upsert
   */
  export type UserVoucherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVoucher
     */
    select?: UserVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVoucher
     */
    omit?: UserVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVoucherInclude<ExtArgs> | null
    /**
     * The filter to search for the UserVoucher to update in case it exists.
     */
    where: UserVoucherWhereUniqueInput
    /**
     * In case the UserVoucher found by the `where` argument doesn't exist, create a new UserVoucher with this data.
     */
    create: XOR<UserVoucherCreateInput, UserVoucherUncheckedCreateInput>
    /**
     * In case the UserVoucher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserVoucherUpdateInput, UserVoucherUncheckedUpdateInput>
  }

  /**
   * UserVoucher delete
   */
  export type UserVoucherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVoucher
     */
    select?: UserVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVoucher
     */
    omit?: UserVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVoucherInclude<ExtArgs> | null
    /**
     * Filter which UserVoucher to delete.
     */
    where: UserVoucherWhereUniqueInput
  }

  /**
   * UserVoucher deleteMany
   */
  export type UserVoucherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserVouchers to delete
     */
    where?: UserVoucherWhereInput
    /**
     * Limit how many UserVouchers to delete.
     */
    limit?: number
  }

  /**
   * UserVoucher without action
   */
  export type UserVoucherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVoucher
     */
    select?: UserVoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVoucher
     */
    omit?: UserVoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVoucherInclude<ExtArgs> | null
  }


  /**
   * Model UserCoupon
   */

  export type AggregateUserCoupon = {
    _count: UserCouponCountAggregateOutputType | null
    _avg: UserCouponAvgAggregateOutputType | null
    _sum: UserCouponSumAggregateOutputType | null
    _min: UserCouponMinAggregateOutputType | null
    _max: UserCouponMaxAggregateOutputType | null
  }

  export type UserCouponAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    couponId: number | null
  }

  export type UserCouponSumAggregateOutputType = {
    id: number | null
    userId: number | null
    couponId: number | null
  }

  export type UserCouponMinAggregateOutputType = {
    id: number | null
    userId: number | null
    couponId: number | null
    status: $Enums.VoucherStatus | null
    usedAt: Date | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type UserCouponMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    couponId: number | null
    status: $Enums.VoucherStatus | null
    usedAt: Date | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type UserCouponCountAggregateOutputType = {
    id: number
    userId: number
    couponId: number
    status: number
    usedAt: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type UserCouponAvgAggregateInputType = {
    id?: true
    userId?: true
    couponId?: true
  }

  export type UserCouponSumAggregateInputType = {
    id?: true
    userId?: true
    couponId?: true
  }

  export type UserCouponMinAggregateInputType = {
    id?: true
    userId?: true
    couponId?: true
    status?: true
    usedAt?: true
    expiresAt?: true
    createdAt?: true
  }

  export type UserCouponMaxAggregateInputType = {
    id?: true
    userId?: true
    couponId?: true
    status?: true
    usedAt?: true
    expiresAt?: true
    createdAt?: true
  }

  export type UserCouponCountAggregateInputType = {
    id?: true
    userId?: true
    couponId?: true
    status?: true
    usedAt?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type UserCouponAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCoupon to aggregate.
     */
    where?: UserCouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCoupons to fetch.
     */
    orderBy?: UserCouponOrderByWithRelationInput | UserCouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserCouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCoupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCoupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserCoupons
    **/
    _count?: true | UserCouponCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserCouponAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserCouponSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCouponMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCouponMaxAggregateInputType
  }

  export type GetUserCouponAggregateType<T extends UserCouponAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCoupon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCoupon[P]>
      : GetScalarType<T[P], AggregateUserCoupon[P]>
  }




  export type UserCouponGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCouponWhereInput
    orderBy?: UserCouponOrderByWithAggregationInput | UserCouponOrderByWithAggregationInput[]
    by: UserCouponScalarFieldEnum[] | UserCouponScalarFieldEnum
    having?: UserCouponScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCouponCountAggregateInputType | true
    _avg?: UserCouponAvgAggregateInputType
    _sum?: UserCouponSumAggregateInputType
    _min?: UserCouponMinAggregateInputType
    _max?: UserCouponMaxAggregateInputType
  }

  export type UserCouponGroupByOutputType = {
    id: number
    userId: number
    couponId: number
    status: $Enums.VoucherStatus
    usedAt: Date | null
    expiresAt: Date
    createdAt: Date
    _count: UserCouponCountAggregateOutputType | null
    _avg: UserCouponAvgAggregateOutputType | null
    _sum: UserCouponSumAggregateOutputType | null
    _min: UserCouponMinAggregateOutputType | null
    _max: UserCouponMaxAggregateOutputType | null
  }

  type GetUserCouponGroupByPayload<T extends UserCouponGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCouponGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCouponGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCouponGroupByOutputType[P]>
            : GetScalarType<T[P], UserCouponGroupByOutputType[P]>
        }
      >
    >


  export type UserCouponSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    couponId?: boolean
    status?: boolean
    usedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    coupon?: boolean | CouponDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCoupon"]>

  export type UserCouponSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    couponId?: boolean
    status?: boolean
    usedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    coupon?: boolean | CouponDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCoupon"]>

  export type UserCouponSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    couponId?: boolean
    status?: boolean
    usedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    coupon?: boolean | CouponDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCoupon"]>

  export type UserCouponSelectScalar = {
    id?: boolean
    userId?: boolean
    couponId?: boolean
    status?: boolean
    usedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type UserCouponOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "couponId" | "status" | "usedAt" | "expiresAt" | "createdAt", ExtArgs["result"]["userCoupon"]>
  export type UserCouponInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coupon?: boolean | CouponDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserCouponIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coupon?: boolean | CouponDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserCouponIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coupon?: boolean | CouponDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserCouponPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCoupon"
    objects: {
      coupon: Prisma.$CouponPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      couponId: number
      status: $Enums.VoucherStatus
      usedAt: Date | null
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["userCoupon"]>
    composites: {}
  }

  type UserCouponGetPayload<S extends boolean | null | undefined | UserCouponDefaultArgs> = $Result.GetResult<Prisma.$UserCouponPayload, S>

  type UserCouponCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserCouponFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCouponCountAggregateInputType | true
    }

  export interface UserCouponDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserCoupon'], meta: { name: 'UserCoupon' } }
    /**
     * Find zero or one UserCoupon that matches the filter.
     * @param {UserCouponFindUniqueArgs} args - Arguments to find a UserCoupon
     * @example
     * // Get one UserCoupon
     * const userCoupon = await prisma.userCoupon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserCouponFindUniqueArgs>(args: SelectSubset<T, UserCouponFindUniqueArgs<ExtArgs>>): Prisma__UserCouponClient<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserCoupon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserCouponFindUniqueOrThrowArgs} args - Arguments to find a UserCoupon
     * @example
     * // Get one UserCoupon
     * const userCoupon = await prisma.userCoupon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserCouponFindUniqueOrThrowArgs>(args: SelectSubset<T, UserCouponFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserCouponClient<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCoupon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCouponFindFirstArgs} args - Arguments to find a UserCoupon
     * @example
     * // Get one UserCoupon
     * const userCoupon = await prisma.userCoupon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserCouponFindFirstArgs>(args?: SelectSubset<T, UserCouponFindFirstArgs<ExtArgs>>): Prisma__UserCouponClient<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCoupon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCouponFindFirstOrThrowArgs} args - Arguments to find a UserCoupon
     * @example
     * // Get one UserCoupon
     * const userCoupon = await prisma.userCoupon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserCouponFindFirstOrThrowArgs>(args?: SelectSubset<T, UserCouponFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserCouponClient<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserCoupons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCouponFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCoupons
     * const userCoupons = await prisma.userCoupon.findMany()
     * 
     * // Get first 10 UserCoupons
     * const userCoupons = await prisma.userCoupon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userCouponWithIdOnly = await prisma.userCoupon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserCouponFindManyArgs>(args?: SelectSubset<T, UserCouponFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserCoupon.
     * @param {UserCouponCreateArgs} args - Arguments to create a UserCoupon.
     * @example
     * // Create one UserCoupon
     * const UserCoupon = await prisma.userCoupon.create({
     *   data: {
     *     // ... data to create a UserCoupon
     *   }
     * })
     * 
     */
    create<T extends UserCouponCreateArgs>(args: SelectSubset<T, UserCouponCreateArgs<ExtArgs>>): Prisma__UserCouponClient<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserCoupons.
     * @param {UserCouponCreateManyArgs} args - Arguments to create many UserCoupons.
     * @example
     * // Create many UserCoupons
     * const userCoupon = await prisma.userCoupon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCouponCreateManyArgs>(args?: SelectSubset<T, UserCouponCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserCoupons and returns the data saved in the database.
     * @param {UserCouponCreateManyAndReturnArgs} args - Arguments to create many UserCoupons.
     * @example
     * // Create many UserCoupons
     * const userCoupon = await prisma.userCoupon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserCoupons and only return the `id`
     * const userCouponWithIdOnly = await prisma.userCoupon.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCouponCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCouponCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserCoupon.
     * @param {UserCouponDeleteArgs} args - Arguments to delete one UserCoupon.
     * @example
     * // Delete one UserCoupon
     * const UserCoupon = await prisma.userCoupon.delete({
     *   where: {
     *     // ... filter to delete one UserCoupon
     *   }
     * })
     * 
     */
    delete<T extends UserCouponDeleteArgs>(args: SelectSubset<T, UserCouponDeleteArgs<ExtArgs>>): Prisma__UserCouponClient<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserCoupon.
     * @param {UserCouponUpdateArgs} args - Arguments to update one UserCoupon.
     * @example
     * // Update one UserCoupon
     * const userCoupon = await prisma.userCoupon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserCouponUpdateArgs>(args: SelectSubset<T, UserCouponUpdateArgs<ExtArgs>>): Prisma__UserCouponClient<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserCoupons.
     * @param {UserCouponDeleteManyArgs} args - Arguments to filter UserCoupons to delete.
     * @example
     * // Delete a few UserCoupons
     * const { count } = await prisma.userCoupon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserCouponDeleteManyArgs>(args?: SelectSubset<T, UserCouponDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCoupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCouponUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCoupons
     * const userCoupon = await prisma.userCoupon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserCouponUpdateManyArgs>(args: SelectSubset<T, UserCouponUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCoupons and returns the data updated in the database.
     * @param {UserCouponUpdateManyAndReturnArgs} args - Arguments to update many UserCoupons.
     * @example
     * // Update many UserCoupons
     * const userCoupon = await prisma.userCoupon.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserCoupons and only return the `id`
     * const userCouponWithIdOnly = await prisma.userCoupon.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserCouponUpdateManyAndReturnArgs>(args: SelectSubset<T, UserCouponUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserCoupon.
     * @param {UserCouponUpsertArgs} args - Arguments to update or create a UserCoupon.
     * @example
     * // Update or create a UserCoupon
     * const userCoupon = await prisma.userCoupon.upsert({
     *   create: {
     *     // ... data to create a UserCoupon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCoupon we want to update
     *   }
     * })
     */
    upsert<T extends UserCouponUpsertArgs>(args: SelectSubset<T, UserCouponUpsertArgs<ExtArgs>>): Prisma__UserCouponClient<$Result.GetResult<Prisma.$UserCouponPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserCoupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCouponCountArgs} args - Arguments to filter UserCoupons to count.
     * @example
     * // Count the number of UserCoupons
     * const count = await prisma.userCoupon.count({
     *   where: {
     *     // ... the filter for the UserCoupons we want to count
     *   }
     * })
    **/
    count<T extends UserCouponCountArgs>(
      args?: Subset<T, UserCouponCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCouponCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCoupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCouponAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserCouponAggregateArgs>(args: Subset<T, UserCouponAggregateArgs>): Prisma.PrismaPromise<GetUserCouponAggregateType<T>>

    /**
     * Group by UserCoupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCouponGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserCouponGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCouponGroupByArgs['orderBy'] }
        : { orderBy?: UserCouponGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserCouponGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCouponGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserCoupon model
   */
  readonly fields: UserCouponFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCoupon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserCouponClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    coupon<T extends CouponDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CouponDefaultArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserCoupon model
   */
  interface UserCouponFieldRefs {
    readonly id: FieldRef<"UserCoupon", 'Int'>
    readonly userId: FieldRef<"UserCoupon", 'Int'>
    readonly couponId: FieldRef<"UserCoupon", 'Int'>
    readonly status: FieldRef<"UserCoupon", 'VoucherStatus'>
    readonly usedAt: FieldRef<"UserCoupon", 'DateTime'>
    readonly expiresAt: FieldRef<"UserCoupon", 'DateTime'>
    readonly createdAt: FieldRef<"UserCoupon", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserCoupon findUnique
   */
  export type UserCouponFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCoupon
     */
    omit?: UserCouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
    /**
     * Filter, which UserCoupon to fetch.
     */
    where: UserCouponWhereUniqueInput
  }

  /**
   * UserCoupon findUniqueOrThrow
   */
  export type UserCouponFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCoupon
     */
    omit?: UserCouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
    /**
     * Filter, which UserCoupon to fetch.
     */
    where: UserCouponWhereUniqueInput
  }

  /**
   * UserCoupon findFirst
   */
  export type UserCouponFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCoupon
     */
    omit?: UserCouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
    /**
     * Filter, which UserCoupon to fetch.
     */
    where?: UserCouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCoupons to fetch.
     */
    orderBy?: UserCouponOrderByWithRelationInput | UserCouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCoupons.
     */
    cursor?: UserCouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCoupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCoupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCoupons.
     */
    distinct?: UserCouponScalarFieldEnum | UserCouponScalarFieldEnum[]
  }

  /**
   * UserCoupon findFirstOrThrow
   */
  export type UserCouponFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCoupon
     */
    omit?: UserCouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
    /**
     * Filter, which UserCoupon to fetch.
     */
    where?: UserCouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCoupons to fetch.
     */
    orderBy?: UserCouponOrderByWithRelationInput | UserCouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCoupons.
     */
    cursor?: UserCouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCoupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCoupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCoupons.
     */
    distinct?: UserCouponScalarFieldEnum | UserCouponScalarFieldEnum[]
  }

  /**
   * UserCoupon findMany
   */
  export type UserCouponFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCoupon
     */
    omit?: UserCouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
    /**
     * Filter, which UserCoupons to fetch.
     */
    where?: UserCouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCoupons to fetch.
     */
    orderBy?: UserCouponOrderByWithRelationInput | UserCouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserCoupons.
     */
    cursor?: UserCouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCoupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCoupons.
     */
    skip?: number
    distinct?: UserCouponScalarFieldEnum | UserCouponScalarFieldEnum[]
  }

  /**
   * UserCoupon create
   */
  export type UserCouponCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCoupon
     */
    omit?: UserCouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
    /**
     * The data needed to create a UserCoupon.
     */
    data: XOR<UserCouponCreateInput, UserCouponUncheckedCreateInput>
  }

  /**
   * UserCoupon createMany
   */
  export type UserCouponCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserCoupons.
     */
    data: UserCouponCreateManyInput | UserCouponCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserCoupon createManyAndReturn
   */
  export type UserCouponCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserCoupon
     */
    omit?: UserCouponOmit<ExtArgs> | null
    /**
     * The data used to create many UserCoupons.
     */
    data: UserCouponCreateManyInput | UserCouponCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserCoupon update
   */
  export type UserCouponUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCoupon
     */
    omit?: UserCouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
    /**
     * The data needed to update a UserCoupon.
     */
    data: XOR<UserCouponUpdateInput, UserCouponUncheckedUpdateInput>
    /**
     * Choose, which UserCoupon to update.
     */
    where: UserCouponWhereUniqueInput
  }

  /**
   * UserCoupon updateMany
   */
  export type UserCouponUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserCoupons.
     */
    data: XOR<UserCouponUpdateManyMutationInput, UserCouponUncheckedUpdateManyInput>
    /**
     * Filter which UserCoupons to update
     */
    where?: UserCouponWhereInput
    /**
     * Limit how many UserCoupons to update.
     */
    limit?: number
  }

  /**
   * UserCoupon updateManyAndReturn
   */
  export type UserCouponUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserCoupon
     */
    omit?: UserCouponOmit<ExtArgs> | null
    /**
     * The data used to update UserCoupons.
     */
    data: XOR<UserCouponUpdateManyMutationInput, UserCouponUncheckedUpdateManyInput>
    /**
     * Filter which UserCoupons to update
     */
    where?: UserCouponWhereInput
    /**
     * Limit how many UserCoupons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserCoupon upsert
   */
  export type UserCouponUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCoupon
     */
    omit?: UserCouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
    /**
     * The filter to search for the UserCoupon to update in case it exists.
     */
    where: UserCouponWhereUniqueInput
    /**
     * In case the UserCoupon found by the `where` argument doesn't exist, create a new UserCoupon with this data.
     */
    create: XOR<UserCouponCreateInput, UserCouponUncheckedCreateInput>
    /**
     * In case the UserCoupon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserCouponUpdateInput, UserCouponUncheckedUpdateInput>
  }

  /**
   * UserCoupon delete
   */
  export type UserCouponDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCoupon
     */
    omit?: UserCouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
    /**
     * Filter which UserCoupon to delete.
     */
    where: UserCouponWhereUniqueInput
  }

  /**
   * UserCoupon deleteMany
   */
  export type UserCouponDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCoupons to delete
     */
    where?: UserCouponWhereInput
    /**
     * Limit how many UserCoupons to delete.
     */
    limit?: number
  }

  /**
   * UserCoupon without action
   */
  export type UserCouponDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCoupon
     */
    select?: UserCouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCoupon
     */
    omit?: UserCouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCouponInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    referralCode: 'referralCode',
    referredById: 'referredById',
    points: 'points',
    pointsExpiry: 'pointsExpiry',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    organizerId: 'organizerId',
    title: 'title',
    slug: 'slug',
    description: 'description',
    category: 'category',
    location: 'location',
    startDate: 'startDate',
    endDate: 'endDate',
    published: 'published',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const TicketTypeScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    name: 'name',
    price: 'price',
    totalSeats: 'totalSeats',
    availableSeats: 'availableSeats',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type TicketTypeScalarFieldEnum = (typeof TicketTypeScalarFieldEnum)[keyof typeof TicketTypeScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    eventId: 'eventId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    organizerId: 'organizerId',
    eventId: 'eventId',
    status: 'status',
    ticketTypeId: 'ticketTypeId',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    totalAmount: 'totalAmount',
    pointsUsed: 'pointsUsed',
    couponId: 'couponId',
    voucherId: 'voucherId',
    finalAmount: 'finalAmount',
    paymentProof: 'paymentProof',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const VoucherScalarFieldEnum: {
    id: 'id',
    organizerId: 'organizerId',
    code: 'code',
    discountValue: 'discountValue',
    eventId: 'eventId',
    usageLimit: 'usageLimit',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt'
  };

  export type VoucherScalarFieldEnum = (typeof VoucherScalarFieldEnum)[keyof typeof VoucherScalarFieldEnum]


  export const CouponScalarFieldEnum: {
    id: 'id',
    code: 'code',
    discountValue: 'discountValue',
    usageLimit: 'usageLimit',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt'
  };

  export type CouponScalarFieldEnum = (typeof CouponScalarFieldEnum)[keyof typeof CouponScalarFieldEnum]


  export const UserVoucherScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    voucherId: 'voucherId',
    status: 'status',
    usedAt: 'usedAt',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type UserVoucherScalarFieldEnum = (typeof UserVoucherScalarFieldEnum)[keyof typeof UserVoucherScalarFieldEnum]


  export const UserCouponScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    couponId: 'couponId',
    status: 'status',
    usedAt: 'usedAt',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type UserCouponScalarFieldEnum = (typeof UserCouponScalarFieldEnum)[keyof typeof UserCouponScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TransactionStatus'
   */
  export type EnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus'>
    


  /**
   * Reference to a field of type 'TransactionStatus[]'
   */
  export type ListEnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus[]'>
    


  /**
   * Reference to a field of type 'VoucherStatus'
   */
  export type EnumVoucherStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VoucherStatus'>
    


  /**
   * Reference to a field of type 'VoucherStatus[]'
   */
  export type ListEnumVoucherStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VoucherStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    referralCode?: StringNullableFilter<"User"> | string | null
    referredById?: IntNullableFilter<"User"> | number | null
    points?: IntFilter<"User"> | number
    pointsExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    organizedEvents?: EventListRelationFilter
    reviews?: ReviewListRelationFilter
    organizerTransactions?: TransactionListRelationFilter
    userTransactions?: TransactionListRelationFilter
    userCoupons?: UserCouponListRelationFilter
    userVouchers?: UserVoucherListRelationFilter
    referredBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    referrals?: UserListRelationFilter
    vouchers?: VoucherListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    referralCode?: SortOrderInput | SortOrder
    referredById?: SortOrderInput | SortOrder
    points?: SortOrder
    pointsExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    organizedEvents?: EventOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    organizerTransactions?: TransactionOrderByRelationAggregateInput
    userTransactions?: TransactionOrderByRelationAggregateInput
    userCoupons?: UserCouponOrderByRelationAggregateInput
    userVouchers?: UserVoucherOrderByRelationAggregateInput
    referredBy?: UserOrderByWithRelationInput
    referrals?: UserOrderByRelationAggregateInput
    vouchers?: VoucherOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    referralCode?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    referredById?: IntNullableFilter<"User"> | number | null
    points?: IntFilter<"User"> | number
    pointsExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    organizedEvents?: EventListRelationFilter
    reviews?: ReviewListRelationFilter
    organizerTransactions?: TransactionListRelationFilter
    userTransactions?: TransactionListRelationFilter
    userCoupons?: UserCouponListRelationFilter
    userVouchers?: UserVoucherListRelationFilter
    referredBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    referrals?: UserListRelationFilter
    vouchers?: VoucherListRelationFilter
  }, "id" | "email" | "referralCode">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    referralCode?: SortOrderInput | SortOrder
    referredById?: SortOrderInput | SortOrder
    points?: SortOrder
    pointsExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    referralCode?: StringNullableWithAggregatesFilter<"User"> | string | null
    referredById?: IntNullableWithAggregatesFilter<"User"> | number | null
    points?: IntWithAggregatesFilter<"User"> | number
    pointsExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: IntFilter<"Event"> | number
    organizerId?: IntFilter<"Event"> | number
    title?: StringFilter<"Event"> | string
    slug?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    category?: StringFilter<"Event"> | string
    location?: StringFilter<"Event"> | string
    startDate?: DateTimeFilter<"Event"> | Date | string
    endDate?: DateTimeFilter<"Event"> | Date | string
    published?: BoolFilter<"Event"> | boolean
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Event"> | Date | string | null
    organizer?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviews?: ReviewListRelationFilter
    ticketTypes?: TicketTypeListRelationFilter
    transactions?: TransactionListRelationFilter
    vouchers?: VoucherListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    organizerId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    category?: SortOrder
    location?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    organizer?: UserOrderByWithRelationInput
    reviews?: ReviewOrderByRelationAggregateInput
    ticketTypes?: TicketTypeOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    vouchers?: VoucherOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    organizerId?: IntFilter<"Event"> | number
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    category?: StringFilter<"Event"> | string
    location?: StringFilter<"Event"> | string
    startDate?: DateTimeFilter<"Event"> | Date | string
    endDate?: DateTimeFilter<"Event"> | Date | string
    published?: BoolFilter<"Event"> | boolean
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Event"> | Date | string | null
    organizer?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviews?: ReviewListRelationFilter
    ticketTypes?: TicketTypeListRelationFilter
    transactions?: TransactionListRelationFilter
    vouchers?: VoucherListRelationFilter
  }, "id" | "slug">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    organizerId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    category?: SortOrder
    location?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Event"> | number
    organizerId?: IntWithAggregatesFilter<"Event"> | number
    title?: StringWithAggregatesFilter<"Event"> | string
    slug?: StringWithAggregatesFilter<"Event"> | string
    description?: StringWithAggregatesFilter<"Event"> | string
    category?: StringWithAggregatesFilter<"Event"> | string
    location?: StringWithAggregatesFilter<"Event"> | string
    startDate?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    published?: BoolWithAggregatesFilter<"Event"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Event"> | Date | string | null
  }

  export type TicketTypeWhereInput = {
    AND?: TicketTypeWhereInput | TicketTypeWhereInput[]
    OR?: TicketTypeWhereInput[]
    NOT?: TicketTypeWhereInput | TicketTypeWhereInput[]
    id?: IntFilter<"TicketType"> | number
    eventId?: IntFilter<"TicketType"> | number
    name?: StringFilter<"TicketType"> | string
    price?: IntFilter<"TicketType"> | number
    totalSeats?: IntFilter<"TicketType"> | number
    availableSeats?: IntFilter<"TicketType"> | number
    createdAt?: DateTimeFilter<"TicketType"> | Date | string
    updatedAt?: DateTimeFilter<"TicketType"> | Date | string
    deletedAt?: DateTimeNullableFilter<"TicketType"> | Date | string | null
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    transactions?: TransactionListRelationFilter
  }

  export type TicketTypeOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    totalSeats?: SortOrder
    availableSeats?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    event?: EventOrderByWithRelationInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type TicketTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TicketTypeWhereInput | TicketTypeWhereInput[]
    OR?: TicketTypeWhereInput[]
    NOT?: TicketTypeWhereInput | TicketTypeWhereInput[]
    eventId?: IntFilter<"TicketType"> | number
    name?: StringFilter<"TicketType"> | string
    price?: IntFilter<"TicketType"> | number
    totalSeats?: IntFilter<"TicketType"> | number
    availableSeats?: IntFilter<"TicketType"> | number
    createdAt?: DateTimeFilter<"TicketType"> | Date | string
    updatedAt?: DateTimeFilter<"TicketType"> | Date | string
    deletedAt?: DateTimeNullableFilter<"TicketType"> | Date | string | null
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    transactions?: TransactionListRelationFilter
  }, "id">

  export type TicketTypeOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    totalSeats?: SortOrder
    availableSeats?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: TicketTypeCountOrderByAggregateInput
    _avg?: TicketTypeAvgOrderByAggregateInput
    _max?: TicketTypeMaxOrderByAggregateInput
    _min?: TicketTypeMinOrderByAggregateInput
    _sum?: TicketTypeSumOrderByAggregateInput
  }

  export type TicketTypeScalarWhereWithAggregatesInput = {
    AND?: TicketTypeScalarWhereWithAggregatesInput | TicketTypeScalarWhereWithAggregatesInput[]
    OR?: TicketTypeScalarWhereWithAggregatesInput[]
    NOT?: TicketTypeScalarWhereWithAggregatesInput | TicketTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TicketType"> | number
    eventId?: IntWithAggregatesFilter<"TicketType"> | number
    name?: StringWithAggregatesFilter<"TicketType"> | string
    price?: IntWithAggregatesFilter<"TicketType"> | number
    totalSeats?: IntWithAggregatesFilter<"TicketType"> | number
    availableSeats?: IntWithAggregatesFilter<"TicketType"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TicketType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TicketType"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"TicketType"> | Date | string | null
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
    eventId?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    event?: EventOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    userId?: IntFilter<"Review"> | number
    eventId?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    userId?: IntWithAggregatesFilter<"Review"> | number
    eventId?: IntWithAggregatesFilter<"Review"> | number
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringWithAggregatesFilter<"Review"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: IntFilter<"Transaction"> | number
    userId?: IntFilter<"Transaction"> | number
    organizerId?: IntFilter<"Transaction"> | number
    eventId?: IntFilter<"Transaction"> | number
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    ticketTypeId?: IntFilter<"Transaction"> | number
    quantity?: IntFilter<"Transaction"> | number
    unitPrice?: IntFilter<"Transaction"> | number
    totalAmount?: IntFilter<"Transaction"> | number
    pointsUsed?: IntFilter<"Transaction"> | number
    couponId?: IntNullableFilter<"Transaction"> | number | null
    voucherId?: IntNullableFilter<"Transaction"> | number | null
    finalAmount?: IntFilter<"Transaction"> | number
    paymentProof?: StringNullableFilter<"Transaction"> | string | null
    expiresAt?: DateTimeFilter<"Transaction"> | Date | string
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Transaction"> | Date | string | null
    coupon?: XOR<CouponNullableScalarRelationFilter, CouponWhereInput> | null
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    organizer?: XOR<UserScalarRelationFilter, UserWhereInput>
    ticketType?: XOR<TicketTypeScalarRelationFilter, TicketTypeWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    voucher?: XOR<VoucherNullableScalarRelationFilter, VoucherWhereInput> | null
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizerId?: SortOrder
    eventId?: SortOrder
    status?: SortOrder
    ticketTypeId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalAmount?: SortOrder
    pointsUsed?: SortOrder
    couponId?: SortOrderInput | SortOrder
    voucherId?: SortOrderInput | SortOrder
    finalAmount?: SortOrder
    paymentProof?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    coupon?: CouponOrderByWithRelationInput
    event?: EventOrderByWithRelationInput
    organizer?: UserOrderByWithRelationInput
    ticketType?: TicketTypeOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    voucher?: VoucherOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    userId?: IntFilter<"Transaction"> | number
    organizerId?: IntFilter<"Transaction"> | number
    eventId?: IntFilter<"Transaction"> | number
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    ticketTypeId?: IntFilter<"Transaction"> | number
    quantity?: IntFilter<"Transaction"> | number
    unitPrice?: IntFilter<"Transaction"> | number
    totalAmount?: IntFilter<"Transaction"> | number
    pointsUsed?: IntFilter<"Transaction"> | number
    couponId?: IntNullableFilter<"Transaction"> | number | null
    voucherId?: IntNullableFilter<"Transaction"> | number | null
    finalAmount?: IntFilter<"Transaction"> | number
    paymentProof?: StringNullableFilter<"Transaction"> | string | null
    expiresAt?: DateTimeFilter<"Transaction"> | Date | string
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Transaction"> | Date | string | null
    coupon?: XOR<CouponNullableScalarRelationFilter, CouponWhereInput> | null
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    organizer?: XOR<UserScalarRelationFilter, UserWhereInput>
    ticketType?: XOR<TicketTypeScalarRelationFilter, TicketTypeWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    voucher?: XOR<VoucherNullableScalarRelationFilter, VoucherWhereInput> | null
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizerId?: SortOrder
    eventId?: SortOrder
    status?: SortOrder
    ticketTypeId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalAmount?: SortOrder
    pointsUsed?: SortOrder
    couponId?: SortOrderInput | SortOrder
    voucherId?: SortOrderInput | SortOrder
    finalAmount?: SortOrder
    paymentProof?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transaction"> | number
    userId?: IntWithAggregatesFilter<"Transaction"> | number
    organizerId?: IntWithAggregatesFilter<"Transaction"> | number
    eventId?: IntWithAggregatesFilter<"Transaction"> | number
    status?: EnumTransactionStatusWithAggregatesFilter<"Transaction"> | $Enums.TransactionStatus
    ticketTypeId?: IntWithAggregatesFilter<"Transaction"> | number
    quantity?: IntWithAggregatesFilter<"Transaction"> | number
    unitPrice?: IntWithAggregatesFilter<"Transaction"> | number
    totalAmount?: IntWithAggregatesFilter<"Transaction"> | number
    pointsUsed?: IntWithAggregatesFilter<"Transaction"> | number
    couponId?: IntNullableWithAggregatesFilter<"Transaction"> | number | null
    voucherId?: IntNullableWithAggregatesFilter<"Transaction"> | number | null
    finalAmount?: IntWithAggregatesFilter<"Transaction"> | number
    paymentProof?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    expiresAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Transaction"> | Date | string | null
  }

  export type VoucherWhereInput = {
    AND?: VoucherWhereInput | VoucherWhereInput[]
    OR?: VoucherWhereInput[]
    NOT?: VoucherWhereInput | VoucherWhereInput[]
    id?: IntFilter<"Voucher"> | number
    organizerId?: IntFilter<"Voucher"> | number
    code?: StringFilter<"Voucher"> | string
    discountValue?: IntFilter<"Voucher"> | number
    eventId?: IntFilter<"Voucher"> | number
    usageLimit?: IntFilter<"Voucher"> | number
    startDate?: DateTimeFilter<"Voucher"> | Date | string
    endDate?: DateTimeFilter<"Voucher"> | Date | string
    createdAt?: DateTimeFilter<"Voucher"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Voucher"> | Date | string | null
    transactions?: TransactionListRelationFilter
    userVouchers?: UserVoucherListRelationFilter
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    organizer?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type VoucherOrderByWithRelationInput = {
    id?: SortOrder
    organizerId?: SortOrder
    code?: SortOrder
    discountValue?: SortOrder
    eventId?: SortOrder
    usageLimit?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    transactions?: TransactionOrderByRelationAggregateInput
    userVouchers?: UserVoucherOrderByRelationAggregateInput
    event?: EventOrderByWithRelationInput
    organizer?: UserOrderByWithRelationInput
  }

  export type VoucherWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: VoucherWhereInput | VoucherWhereInput[]
    OR?: VoucherWhereInput[]
    NOT?: VoucherWhereInput | VoucherWhereInput[]
    organizerId?: IntFilter<"Voucher"> | number
    discountValue?: IntFilter<"Voucher"> | number
    eventId?: IntFilter<"Voucher"> | number
    usageLimit?: IntFilter<"Voucher"> | number
    startDate?: DateTimeFilter<"Voucher"> | Date | string
    endDate?: DateTimeFilter<"Voucher"> | Date | string
    createdAt?: DateTimeFilter<"Voucher"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Voucher"> | Date | string | null
    transactions?: TransactionListRelationFilter
    userVouchers?: UserVoucherListRelationFilter
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    organizer?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "code">

  export type VoucherOrderByWithAggregationInput = {
    id?: SortOrder
    organizerId?: SortOrder
    code?: SortOrder
    discountValue?: SortOrder
    eventId?: SortOrder
    usageLimit?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: VoucherCountOrderByAggregateInput
    _avg?: VoucherAvgOrderByAggregateInput
    _max?: VoucherMaxOrderByAggregateInput
    _min?: VoucherMinOrderByAggregateInput
    _sum?: VoucherSumOrderByAggregateInput
  }

  export type VoucherScalarWhereWithAggregatesInput = {
    AND?: VoucherScalarWhereWithAggregatesInput | VoucherScalarWhereWithAggregatesInput[]
    OR?: VoucherScalarWhereWithAggregatesInput[]
    NOT?: VoucherScalarWhereWithAggregatesInput | VoucherScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Voucher"> | number
    organizerId?: IntWithAggregatesFilter<"Voucher"> | number
    code?: StringWithAggregatesFilter<"Voucher"> | string
    discountValue?: IntWithAggregatesFilter<"Voucher"> | number
    eventId?: IntWithAggregatesFilter<"Voucher"> | number
    usageLimit?: IntWithAggregatesFilter<"Voucher"> | number
    startDate?: DateTimeWithAggregatesFilter<"Voucher"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Voucher"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Voucher"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Voucher"> | Date | string | null
  }

  export type CouponWhereInput = {
    AND?: CouponWhereInput | CouponWhereInput[]
    OR?: CouponWhereInput[]
    NOT?: CouponWhereInput | CouponWhereInput[]
    id?: IntFilter<"Coupon"> | number
    code?: StringFilter<"Coupon"> | string
    discountValue?: IntFilter<"Coupon"> | number
    usageLimit?: IntFilter<"Coupon"> | number
    startDate?: DateTimeFilter<"Coupon"> | Date | string
    endDate?: DateTimeFilter<"Coupon"> | Date | string
    createdAt?: DateTimeFilter<"Coupon"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Coupon"> | Date | string | null
    transactions?: TransactionListRelationFilter
    userCoupons?: UserCouponListRelationFilter
  }

  export type CouponOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    discountValue?: SortOrder
    usageLimit?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    transactions?: TransactionOrderByRelationAggregateInput
    userCoupons?: UserCouponOrderByRelationAggregateInput
  }

  export type CouponWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: CouponWhereInput | CouponWhereInput[]
    OR?: CouponWhereInput[]
    NOT?: CouponWhereInput | CouponWhereInput[]
    discountValue?: IntFilter<"Coupon"> | number
    usageLimit?: IntFilter<"Coupon"> | number
    startDate?: DateTimeFilter<"Coupon"> | Date | string
    endDate?: DateTimeFilter<"Coupon"> | Date | string
    createdAt?: DateTimeFilter<"Coupon"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Coupon"> | Date | string | null
    transactions?: TransactionListRelationFilter
    userCoupons?: UserCouponListRelationFilter
  }, "id" | "code">

  export type CouponOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    discountValue?: SortOrder
    usageLimit?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: CouponCountOrderByAggregateInput
    _avg?: CouponAvgOrderByAggregateInput
    _max?: CouponMaxOrderByAggregateInput
    _min?: CouponMinOrderByAggregateInput
    _sum?: CouponSumOrderByAggregateInput
  }

  export type CouponScalarWhereWithAggregatesInput = {
    AND?: CouponScalarWhereWithAggregatesInput | CouponScalarWhereWithAggregatesInput[]
    OR?: CouponScalarWhereWithAggregatesInput[]
    NOT?: CouponScalarWhereWithAggregatesInput | CouponScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Coupon"> | number
    code?: StringWithAggregatesFilter<"Coupon"> | string
    discountValue?: IntWithAggregatesFilter<"Coupon"> | number
    usageLimit?: IntWithAggregatesFilter<"Coupon"> | number
    startDate?: DateTimeWithAggregatesFilter<"Coupon"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Coupon"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Coupon"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Coupon"> | Date | string | null
  }

  export type UserVoucherWhereInput = {
    AND?: UserVoucherWhereInput | UserVoucherWhereInput[]
    OR?: UserVoucherWhereInput[]
    NOT?: UserVoucherWhereInput | UserVoucherWhereInput[]
    id?: IntFilter<"UserVoucher"> | number
    userId?: IntFilter<"UserVoucher"> | number
    voucherId?: IntFilter<"UserVoucher"> | number
    status?: EnumVoucherStatusFilter<"UserVoucher"> | $Enums.VoucherStatus
    usedAt?: DateTimeNullableFilter<"UserVoucher"> | Date | string | null
    expiresAt?: DateTimeFilter<"UserVoucher"> | Date | string
    createdAt?: DateTimeFilter<"UserVoucher"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    voucher?: XOR<VoucherScalarRelationFilter, VoucherWhereInput>
  }

  export type UserVoucherOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    voucherId?: SortOrder
    status?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    voucher?: VoucherOrderByWithRelationInput
  }

  export type UserVoucherWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserVoucherWhereInput | UserVoucherWhereInput[]
    OR?: UserVoucherWhereInput[]
    NOT?: UserVoucherWhereInput | UserVoucherWhereInput[]
    userId?: IntFilter<"UserVoucher"> | number
    voucherId?: IntFilter<"UserVoucher"> | number
    status?: EnumVoucherStatusFilter<"UserVoucher"> | $Enums.VoucherStatus
    usedAt?: DateTimeNullableFilter<"UserVoucher"> | Date | string | null
    expiresAt?: DateTimeFilter<"UserVoucher"> | Date | string
    createdAt?: DateTimeFilter<"UserVoucher"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    voucher?: XOR<VoucherScalarRelationFilter, VoucherWhereInput>
  }, "id">

  export type UserVoucherOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    voucherId?: SortOrder
    status?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: UserVoucherCountOrderByAggregateInput
    _avg?: UserVoucherAvgOrderByAggregateInput
    _max?: UserVoucherMaxOrderByAggregateInput
    _min?: UserVoucherMinOrderByAggregateInput
    _sum?: UserVoucherSumOrderByAggregateInput
  }

  export type UserVoucherScalarWhereWithAggregatesInput = {
    AND?: UserVoucherScalarWhereWithAggregatesInput | UserVoucherScalarWhereWithAggregatesInput[]
    OR?: UserVoucherScalarWhereWithAggregatesInput[]
    NOT?: UserVoucherScalarWhereWithAggregatesInput | UserVoucherScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserVoucher"> | number
    userId?: IntWithAggregatesFilter<"UserVoucher"> | number
    voucherId?: IntWithAggregatesFilter<"UserVoucher"> | number
    status?: EnumVoucherStatusWithAggregatesFilter<"UserVoucher"> | $Enums.VoucherStatus
    usedAt?: DateTimeNullableWithAggregatesFilter<"UserVoucher"> | Date | string | null
    expiresAt?: DateTimeWithAggregatesFilter<"UserVoucher"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"UserVoucher"> | Date | string
  }

  export type UserCouponWhereInput = {
    AND?: UserCouponWhereInput | UserCouponWhereInput[]
    OR?: UserCouponWhereInput[]
    NOT?: UserCouponWhereInput | UserCouponWhereInput[]
    id?: IntFilter<"UserCoupon"> | number
    userId?: IntFilter<"UserCoupon"> | number
    couponId?: IntFilter<"UserCoupon"> | number
    status?: EnumVoucherStatusFilter<"UserCoupon"> | $Enums.VoucherStatus
    usedAt?: DateTimeNullableFilter<"UserCoupon"> | Date | string | null
    expiresAt?: DateTimeFilter<"UserCoupon"> | Date | string
    createdAt?: DateTimeFilter<"UserCoupon"> | Date | string
    coupon?: XOR<CouponScalarRelationFilter, CouponWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserCouponOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    couponId?: SortOrder
    status?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    coupon?: CouponOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type UserCouponWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserCouponWhereInput | UserCouponWhereInput[]
    OR?: UserCouponWhereInput[]
    NOT?: UserCouponWhereInput | UserCouponWhereInput[]
    userId?: IntFilter<"UserCoupon"> | number
    couponId?: IntFilter<"UserCoupon"> | number
    status?: EnumVoucherStatusFilter<"UserCoupon"> | $Enums.VoucherStatus
    usedAt?: DateTimeNullableFilter<"UserCoupon"> | Date | string | null
    expiresAt?: DateTimeFilter<"UserCoupon"> | Date | string
    createdAt?: DateTimeFilter<"UserCoupon"> | Date | string
    coupon?: XOR<CouponScalarRelationFilter, CouponWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserCouponOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    couponId?: SortOrder
    status?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: UserCouponCountOrderByAggregateInput
    _avg?: UserCouponAvgOrderByAggregateInput
    _max?: UserCouponMaxOrderByAggregateInput
    _min?: UserCouponMinOrderByAggregateInput
    _sum?: UserCouponSumOrderByAggregateInput
  }

  export type UserCouponScalarWhereWithAggregatesInput = {
    AND?: UserCouponScalarWhereWithAggregatesInput | UserCouponScalarWhereWithAggregatesInput[]
    OR?: UserCouponScalarWhereWithAggregatesInput[]
    NOT?: UserCouponScalarWhereWithAggregatesInput | UserCouponScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserCoupon"> | number
    userId?: IntWithAggregatesFilter<"UserCoupon"> | number
    couponId?: IntWithAggregatesFilter<"UserCoupon"> | number
    status?: EnumVoucherStatusWithAggregatesFilter<"UserCoupon"> | $Enums.VoucherStatus
    usedAt?: DateTimeNullableWithAggregatesFilter<"UserCoupon"> | Date | string | null
    expiresAt?: DateTimeWithAggregatesFilter<"UserCoupon"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"UserCoupon"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    role: $Enums.Role
    referralCode?: string | null
    points?: number
    pointsExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    organizedEvents?: EventCreateNestedManyWithoutOrganizerInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    organizerTransactions?: TransactionCreateNestedManyWithoutOrganizerInput
    userTransactions?: TransactionCreateNestedManyWithoutUserInput
    userCoupons?: UserCouponCreateNestedManyWithoutUserInput
    userVouchers?: UserVoucherCreateNestedManyWithoutUserInput
    referredBy?: UserCreateNestedOneWithoutReferralsInput
    referrals?: UserCreateNestedManyWithoutReferredByInput
    vouchers?: VoucherCreateNestedManyWithoutOrganizerInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    referralCode?: string | null
    referredById?: number | null
    points?: number
    pointsExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    organizedEvents?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    organizerTransactions?: TransactionUncheckedCreateNestedManyWithoutOrganizerInput
    userTransactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    userCoupons?: UserCouponUncheckedCreateNestedManyWithoutUserInput
    userVouchers?: UserVoucherUncheckedCreateNestedManyWithoutUserInput
    referrals?: UserUncheckedCreateNestedManyWithoutReferredByInput
    vouchers?: VoucherUncheckedCreateNestedManyWithoutOrganizerInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    pointsExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizedEvents?: EventUpdateManyWithoutOrganizerNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    organizerTransactions?: TransactionUpdateManyWithoutOrganizerNestedInput
    userTransactions?: TransactionUpdateManyWithoutUserNestedInput
    userCoupons?: UserCouponUpdateManyWithoutUserNestedInput
    userVouchers?: UserVoucherUpdateManyWithoutUserNestedInput
    referredBy?: UserUpdateOneWithoutReferralsNestedInput
    referrals?: UserUpdateManyWithoutReferredByNestedInput
    vouchers?: VoucherUpdateManyWithoutOrganizerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredById?: NullableIntFieldUpdateOperationsInput | number | null
    points?: IntFieldUpdateOperationsInput | number
    pointsExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizedEvents?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    organizerTransactions?: TransactionUncheckedUpdateManyWithoutOrganizerNestedInput
    userTransactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    userCoupons?: UserCouponUncheckedUpdateManyWithoutUserNestedInput
    userVouchers?: UserVoucherUncheckedUpdateManyWithoutUserNestedInput
    referrals?: UserUncheckedUpdateManyWithoutReferredByNestedInput
    vouchers?: VoucherUncheckedUpdateManyWithoutOrganizerNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    referralCode?: string | null
    referredById?: number | null
    points?: number
    pointsExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    pointsExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredById?: NullableIntFieldUpdateOperationsInput | number | null
    points?: IntFieldUpdateOperationsInput | number
    pointsExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventCreateInput = {
    title: string
    slug: string
    description: string
    category: string
    location: string
    startDate: Date | string
    endDate: Date | string
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    organizer: UserCreateNestedOneWithoutOrganizedEventsInput
    reviews?: ReviewCreateNestedManyWithoutEventInput
    ticketTypes?: TicketTypeCreateNestedManyWithoutEventInput
    transactions?: TransactionCreateNestedManyWithoutEventInput
    vouchers?: VoucherCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: number
    organizerId: number
    title: string
    slug: string
    description: string
    category: string
    location: string
    startDate: Date | string
    endDate: Date | string
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutEventInput
    ticketTypes?: TicketTypeUncheckedCreateNestedManyWithoutEventInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutEventInput
    vouchers?: VoucherUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizer?: UserUpdateOneRequiredWithoutOrganizedEventsNestedInput
    reviews?: ReviewUpdateManyWithoutEventNestedInput
    ticketTypes?: TicketTypeUpdateManyWithoutEventNestedInput
    transactions?: TransactionUpdateManyWithoutEventNestedInput
    vouchers?: VoucherUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizerId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviews?: ReviewUncheckedUpdateManyWithoutEventNestedInput
    ticketTypes?: TicketTypeUncheckedUpdateManyWithoutEventNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutEventNestedInput
    vouchers?: VoucherUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: number
    organizerId: number
    title: string
    slug: string
    description: string
    category: string
    location: string
    startDate: Date | string
    endDate: Date | string
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type EventUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizerId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketTypeCreateInput = {
    name: string
    price: number
    totalSeats: number
    availableSeats: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    event: EventCreateNestedOneWithoutTicketTypesInput
    transactions?: TransactionCreateNestedManyWithoutTicketTypeInput
  }

  export type TicketTypeUncheckedCreateInput = {
    id?: number
    eventId: number
    name: string
    price: number
    totalSeats: number
    availableSeats: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutTicketTypeInput
  }

  export type TicketTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event?: EventUpdateOneRequiredWithoutTicketTypesNestedInput
    transactions?: TransactionUpdateManyWithoutTicketTypeNestedInput
  }

  export type TicketTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUncheckedUpdateManyWithoutTicketTypeNestedInput
  }

  export type TicketTypeCreateManyInput = {
    id?: number
    eventId: number
    name: string
    price: number
    totalSeats: number
    availableSeats: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TicketTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewCreateInput = {
    rating: number
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutReviewsInput
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    userId: number
    eventId: number
    rating: number
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutReviewsNestedInput
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: number
    userId: number
    eventId: number
    rating: number
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    status: $Enums.TransactionStatus
    quantity: number
    unitPrice: number
    totalAmount: number
    pointsUsed?: number
    finalAmount: number
    paymentProof?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    coupon?: CouponCreateNestedOneWithoutTransactionsInput
    event: EventCreateNestedOneWithoutTransactionsInput
    organizer: UserCreateNestedOneWithoutOrganizerTransactionsInput
    ticketType: TicketTypeCreateNestedOneWithoutTransactionsInput
    user: UserCreateNestedOneWithoutUserTransactionsInput
    voucher?: VoucherCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: number
    userId: number
    organizerId: number
    eventId: number
    status: $Enums.TransactionStatus
    ticketTypeId: number
    quantity: number
    unitPrice: number
    totalAmount: number
    pointsUsed?: number
    couponId?: number | null
    voucherId?: number | null
    finalAmount: number
    paymentProof?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TransactionUpdateInput = {
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    totalAmount?: IntFieldUpdateOperationsInput | number
    pointsUsed?: IntFieldUpdateOperationsInput | number
    finalAmount?: IntFieldUpdateOperationsInput | number
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coupon?: CouponUpdateOneWithoutTransactionsNestedInput
    event?: EventUpdateOneRequiredWithoutTransactionsNestedInput
    organizer?: UserUpdateOneRequiredWithoutOrganizerTransactionsNestedInput
    ticketType?: TicketTypeUpdateOneRequiredWithoutTransactionsNestedInput
    user?: UserUpdateOneRequiredWithoutUserTransactionsNestedInput
    voucher?: VoucherUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    organizerId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    ticketTypeId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    totalAmount?: IntFieldUpdateOperationsInput | number
    pointsUsed?: IntFieldUpdateOperationsInput | number
    couponId?: NullableIntFieldUpdateOperationsInput | number | null
    voucherId?: NullableIntFieldUpdateOperationsInput | number | null
    finalAmount?: IntFieldUpdateOperationsInput | number
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionCreateManyInput = {
    id?: number
    userId: number
    organizerId: number
    eventId: number
    status: $Enums.TransactionStatus
    ticketTypeId: number
    quantity: number
    unitPrice: number
    totalAmount: number
    pointsUsed?: number
    couponId?: number | null
    voucherId?: number | null
    finalAmount: number
    paymentProof?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TransactionUpdateManyMutationInput = {
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    totalAmount?: IntFieldUpdateOperationsInput | number
    pointsUsed?: IntFieldUpdateOperationsInput | number
    finalAmount?: IntFieldUpdateOperationsInput | number
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    organizerId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    ticketTypeId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    totalAmount?: IntFieldUpdateOperationsInput | number
    pointsUsed?: IntFieldUpdateOperationsInput | number
    couponId?: NullableIntFieldUpdateOperationsInput | number | null
    voucherId?: NullableIntFieldUpdateOperationsInput | number | null
    finalAmount?: IntFieldUpdateOperationsInput | number
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VoucherCreateInput = {
    code: string
    discountValue: number
    usageLimit: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    transactions?: TransactionCreateNestedManyWithoutVoucherInput
    userVouchers?: UserVoucherCreateNestedManyWithoutVoucherInput
    event: EventCreateNestedOneWithoutVouchersInput
    organizer: UserCreateNestedOneWithoutVouchersInput
  }

  export type VoucherUncheckedCreateInput = {
    id?: number
    organizerId: number
    code: string
    discountValue: number
    eventId: number
    usageLimit: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutVoucherInput
    userVouchers?: UserVoucherUncheckedCreateNestedManyWithoutVoucherInput
  }

  export type VoucherUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    discountValue?: IntFieldUpdateOperationsInput | number
    usageLimit?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUpdateManyWithoutVoucherNestedInput
    userVouchers?: UserVoucherUpdateManyWithoutVoucherNestedInput
    event?: EventUpdateOneRequiredWithoutVouchersNestedInput
    organizer?: UserUpdateOneRequiredWithoutVouchersNestedInput
  }

  export type VoucherUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizerId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    discountValue?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    usageLimit?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUncheckedUpdateManyWithoutVoucherNestedInput
    userVouchers?: UserVoucherUncheckedUpdateManyWithoutVoucherNestedInput
  }

  export type VoucherCreateManyInput = {
    id?: number
    organizerId: number
    code: string
    discountValue: number
    eventId: number
    usageLimit: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type VoucherUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    discountValue?: IntFieldUpdateOperationsInput | number
    usageLimit?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VoucherUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizerId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    discountValue?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    usageLimit?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CouponCreateInput = {
    code: string
    discountValue: number
    usageLimit: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    transactions?: TransactionCreateNestedManyWithoutCouponInput
    userCoupons?: UserCouponCreateNestedManyWithoutCouponInput
  }

  export type CouponUncheckedCreateInput = {
    id?: number
    code: string
    discountValue: number
    usageLimit: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutCouponInput
    userCoupons?: UserCouponUncheckedCreateNestedManyWithoutCouponInput
  }

  export type CouponUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    discountValue?: IntFieldUpdateOperationsInput | number
    usageLimit?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUpdateManyWithoutCouponNestedInput
    userCoupons?: UserCouponUpdateManyWithoutCouponNestedInput
  }

  export type CouponUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    discountValue?: IntFieldUpdateOperationsInput | number
    usageLimit?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUncheckedUpdateManyWithoutCouponNestedInput
    userCoupons?: UserCouponUncheckedUpdateManyWithoutCouponNestedInput
  }

  export type CouponCreateManyInput = {
    id?: number
    code: string
    discountValue: number
    usageLimit: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CouponUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    discountValue?: IntFieldUpdateOperationsInput | number
    usageLimit?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CouponUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    discountValue?: IntFieldUpdateOperationsInput | number
    usageLimit?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserVoucherCreateInput = {
    status: $Enums.VoucherStatus
    usedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserVouchersInput
    voucher: VoucherCreateNestedOneWithoutUserVouchersInput
  }

  export type UserVoucherUncheckedCreateInput = {
    id?: number
    userId: number
    voucherId: number
    status: $Enums.VoucherStatus
    usedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type UserVoucherUpdateInput = {
    status?: EnumVoucherStatusFieldUpdateOperationsInput | $Enums.VoucherStatus
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserVouchersNestedInput
    voucher?: VoucherUpdateOneRequiredWithoutUserVouchersNestedInput
  }

  export type UserVoucherUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    voucherId?: IntFieldUpdateOperationsInput | number
    status?: EnumVoucherStatusFieldUpdateOperationsInput | $Enums.VoucherStatus
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVoucherCreateManyInput = {
    id?: number
    userId: number
    voucherId: number
    status: $Enums.VoucherStatus
    usedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type UserVoucherUpdateManyMutationInput = {
    status?: EnumVoucherStatusFieldUpdateOperationsInput | $Enums.VoucherStatus
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVoucherUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    voucherId?: IntFieldUpdateOperationsInput | number
    status?: EnumVoucherStatusFieldUpdateOperationsInput | $Enums.VoucherStatus
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCouponCreateInput = {
    status: $Enums.VoucherStatus
    usedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
    coupon: CouponCreateNestedOneWithoutUserCouponsInput
    user: UserCreateNestedOneWithoutUserCouponsInput
  }

  export type UserCouponUncheckedCreateInput = {
    id?: number
    userId: number
    couponId: number
    status: $Enums.VoucherStatus
    usedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type UserCouponUpdateInput = {
    status?: EnumVoucherStatusFieldUpdateOperationsInput | $Enums.VoucherStatus
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coupon?: CouponUpdateOneRequiredWithoutUserCouponsNestedInput
    user?: UserUpdateOneRequiredWithoutUserCouponsNestedInput
  }

  export type UserCouponUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    couponId?: IntFieldUpdateOperationsInput | number
    status?: EnumVoucherStatusFieldUpdateOperationsInput | $Enums.VoucherStatus
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCouponCreateManyInput = {
    id?: number
    userId: number
    couponId: number
    status: $Enums.VoucherStatus
    usedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type UserCouponUpdateManyMutationInput = {
    status?: EnumVoucherStatusFieldUpdateOperationsInput | $Enums.VoucherStatus
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCouponUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    couponId?: IntFieldUpdateOperationsInput | number
    status?: EnumVoucherStatusFieldUpdateOperationsInput | $Enums.VoucherStatus
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type UserCouponListRelationFilter = {
    every?: UserCouponWhereInput
    some?: UserCouponWhereInput
    none?: UserCouponWhereInput
  }

  export type UserVoucherListRelationFilter = {
    every?: UserVoucherWhereInput
    some?: UserVoucherWhereInput
    none?: UserVoucherWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type VoucherListRelationFilter = {
    every?: VoucherWhereInput
    some?: VoucherWhereInput
    none?: VoucherWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCouponOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserVoucherOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VoucherOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    referralCode?: SortOrder
    referredById?: SortOrder
    points?: SortOrder
    pointsExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    referredById?: SortOrder
    points?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    referralCode?: SortOrder
    referredById?: SortOrder
    points?: SortOrder
    pointsExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    referralCode?: SortOrder
    referredById?: SortOrder
    points?: SortOrder
    pointsExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    referredById?: SortOrder
    points?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TicketTypeListRelationFilter = {
    every?: TicketTypeWhereInput
    some?: TicketTypeWhereInput
    none?: TicketTypeWhereInput
  }

  export type TicketTypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    organizerId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    category?: SortOrder
    location?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    id?: SortOrder
    organizerId?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    organizerId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    category?: SortOrder
    location?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    organizerId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    category?: SortOrder
    location?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    id?: SortOrder
    organizerId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type TicketTypeCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    totalSeats?: SortOrder
    availableSeats?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TicketTypeAvgOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    price?: SortOrder
    totalSeats?: SortOrder
    availableSeats?: SortOrder
  }

  export type TicketTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    totalSeats?: SortOrder
    availableSeats?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TicketTypeMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    totalSeats?: SortOrder
    availableSeats?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TicketTypeSumOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    price?: SortOrder
    totalSeats?: SortOrder
    availableSeats?: SortOrder
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    rating?: SortOrder
  }

  export type EnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type CouponNullableScalarRelationFilter = {
    is?: CouponWhereInput | null
    isNot?: CouponWhereInput | null
  }

  export type TicketTypeScalarRelationFilter = {
    is?: TicketTypeWhereInput
    isNot?: TicketTypeWhereInput
  }

  export type VoucherNullableScalarRelationFilter = {
    is?: VoucherWhereInput | null
    isNot?: VoucherWhereInput | null
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizerId?: SortOrder
    eventId?: SortOrder
    status?: SortOrder
    ticketTypeId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalAmount?: SortOrder
    pointsUsed?: SortOrder
    couponId?: SortOrder
    voucherId?: SortOrder
    finalAmount?: SortOrder
    paymentProof?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizerId?: SortOrder
    eventId?: SortOrder
    ticketTypeId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalAmount?: SortOrder
    pointsUsed?: SortOrder
    couponId?: SortOrder
    voucherId?: SortOrder
    finalAmount?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizerId?: SortOrder
    eventId?: SortOrder
    status?: SortOrder
    ticketTypeId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalAmount?: SortOrder
    pointsUsed?: SortOrder
    couponId?: SortOrder
    voucherId?: SortOrder
    finalAmount?: SortOrder
    paymentProof?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizerId?: SortOrder
    eventId?: SortOrder
    status?: SortOrder
    ticketTypeId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalAmount?: SortOrder
    pointsUsed?: SortOrder
    couponId?: SortOrder
    voucherId?: SortOrder
    finalAmount?: SortOrder
    paymentProof?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizerId?: SortOrder
    eventId?: SortOrder
    ticketTypeId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalAmount?: SortOrder
    pointsUsed?: SortOrder
    couponId?: SortOrder
    voucherId?: SortOrder
    finalAmount?: SortOrder
  }

  export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type VoucherCountOrderByAggregateInput = {
    id?: SortOrder
    organizerId?: SortOrder
    code?: SortOrder
    discountValue?: SortOrder
    eventId?: SortOrder
    usageLimit?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type VoucherAvgOrderByAggregateInput = {
    id?: SortOrder
    organizerId?: SortOrder
    discountValue?: SortOrder
    eventId?: SortOrder
    usageLimit?: SortOrder
  }

  export type VoucherMaxOrderByAggregateInput = {
    id?: SortOrder
    organizerId?: SortOrder
    code?: SortOrder
    discountValue?: SortOrder
    eventId?: SortOrder
    usageLimit?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type VoucherMinOrderByAggregateInput = {
    id?: SortOrder
    organizerId?: SortOrder
    code?: SortOrder
    discountValue?: SortOrder
    eventId?: SortOrder
    usageLimit?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type VoucherSumOrderByAggregateInput = {
    id?: SortOrder
    organizerId?: SortOrder
    discountValue?: SortOrder
    eventId?: SortOrder
    usageLimit?: SortOrder
  }

  export type CouponCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    discountValue?: SortOrder
    usageLimit?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CouponAvgOrderByAggregateInput = {
    id?: SortOrder
    discountValue?: SortOrder
    usageLimit?: SortOrder
  }

  export type CouponMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    discountValue?: SortOrder
    usageLimit?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CouponMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    discountValue?: SortOrder
    usageLimit?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CouponSumOrderByAggregateInput = {
    id?: SortOrder
    discountValue?: SortOrder
    usageLimit?: SortOrder
  }

  export type EnumVoucherStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VoucherStatus | EnumVoucherStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VoucherStatus[] | ListEnumVoucherStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VoucherStatus[] | ListEnumVoucherStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVoucherStatusFilter<$PrismaModel> | $Enums.VoucherStatus
  }

  export type VoucherScalarRelationFilter = {
    is?: VoucherWhereInput
    isNot?: VoucherWhereInput
  }

  export type UserVoucherCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    voucherId?: SortOrder
    status?: SortOrder
    usedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserVoucherAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    voucherId?: SortOrder
  }

  export type UserVoucherMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    voucherId?: SortOrder
    status?: SortOrder
    usedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserVoucherMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    voucherId?: SortOrder
    status?: SortOrder
    usedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserVoucherSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    voucherId?: SortOrder
  }

  export type EnumVoucherStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VoucherStatus | EnumVoucherStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VoucherStatus[] | ListEnumVoucherStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VoucherStatus[] | ListEnumVoucherStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVoucherStatusWithAggregatesFilter<$PrismaModel> | $Enums.VoucherStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVoucherStatusFilter<$PrismaModel>
    _max?: NestedEnumVoucherStatusFilter<$PrismaModel>
  }

  export type CouponScalarRelationFilter = {
    is?: CouponWhereInput
    isNot?: CouponWhereInput
  }

  export type UserCouponCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    couponId?: SortOrder
    status?: SortOrder
    usedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserCouponAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    couponId?: SortOrder
  }

  export type UserCouponMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    couponId?: SortOrder
    status?: SortOrder
    usedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserCouponMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    couponId?: SortOrder
    status?: SortOrder
    usedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserCouponSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    couponId?: SortOrder
  }

  export type EventCreateNestedManyWithoutOrganizerInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutOrganizerInput = {
    create?: XOR<TransactionCreateWithoutOrganizerInput, TransactionUncheckedCreateWithoutOrganizerInput> | TransactionCreateWithoutOrganizerInput[] | TransactionUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutOrganizerInput | TransactionCreateOrConnectWithoutOrganizerInput[]
    createMany?: TransactionCreateManyOrganizerInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type UserCouponCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCouponCreateWithoutUserInput, UserCouponUncheckedCreateWithoutUserInput> | UserCouponCreateWithoutUserInput[] | UserCouponUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCouponCreateOrConnectWithoutUserInput | UserCouponCreateOrConnectWithoutUserInput[]
    createMany?: UserCouponCreateManyUserInputEnvelope
    connect?: UserCouponWhereUniqueInput | UserCouponWhereUniqueInput[]
  }

  export type UserVoucherCreateNestedManyWithoutUserInput = {
    create?: XOR<UserVoucherCreateWithoutUserInput, UserVoucherUncheckedCreateWithoutUserInput> | UserVoucherCreateWithoutUserInput[] | UserVoucherUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserVoucherCreateOrConnectWithoutUserInput | UserVoucherCreateOrConnectWithoutUserInput[]
    createMany?: UserVoucherCreateManyUserInputEnvelope
    connect?: UserVoucherWhereUniqueInput | UserVoucherWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutReferralsInput = {
    create?: XOR<UserCreateWithoutReferralsInput, UserUncheckedCreateWithoutReferralsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutReferredByInput = {
    create?: XOR<UserCreateWithoutReferredByInput, UserUncheckedCreateWithoutReferredByInput> | UserCreateWithoutReferredByInput[] | UserUncheckedCreateWithoutReferredByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReferredByInput | UserCreateOrConnectWithoutReferredByInput[]
    createMany?: UserCreateManyReferredByInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type VoucherCreateNestedManyWithoutOrganizerInput = {
    create?: XOR<VoucherCreateWithoutOrganizerInput, VoucherUncheckedCreateWithoutOrganizerInput> | VoucherCreateWithoutOrganizerInput[] | VoucherUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutOrganizerInput | VoucherCreateOrConnectWithoutOrganizerInput[]
    createMany?: VoucherCreateManyOrganizerInputEnvelope
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutOrganizerInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutOrganizerInput = {
    create?: XOR<TransactionCreateWithoutOrganizerInput, TransactionUncheckedCreateWithoutOrganizerInput> | TransactionCreateWithoutOrganizerInput[] | TransactionUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutOrganizerInput | TransactionCreateOrConnectWithoutOrganizerInput[]
    createMany?: TransactionCreateManyOrganizerInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type UserCouponUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCouponCreateWithoutUserInput, UserCouponUncheckedCreateWithoutUserInput> | UserCouponCreateWithoutUserInput[] | UserCouponUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCouponCreateOrConnectWithoutUserInput | UserCouponCreateOrConnectWithoutUserInput[]
    createMany?: UserCouponCreateManyUserInputEnvelope
    connect?: UserCouponWhereUniqueInput | UserCouponWhereUniqueInput[]
  }

  export type UserVoucherUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserVoucherCreateWithoutUserInput, UserVoucherUncheckedCreateWithoutUserInput> | UserVoucherCreateWithoutUserInput[] | UserVoucherUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserVoucherCreateOrConnectWithoutUserInput | UserVoucherCreateOrConnectWithoutUserInput[]
    createMany?: UserVoucherCreateManyUserInputEnvelope
    connect?: UserVoucherWhereUniqueInput | UserVoucherWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutReferredByInput = {
    create?: XOR<UserCreateWithoutReferredByInput, UserUncheckedCreateWithoutReferredByInput> | UserCreateWithoutReferredByInput[] | UserUncheckedCreateWithoutReferredByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReferredByInput | UserCreateOrConnectWithoutReferredByInput[]
    createMany?: UserCreateManyReferredByInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type VoucherUncheckedCreateNestedManyWithoutOrganizerInput = {
    create?: XOR<VoucherCreateWithoutOrganizerInput, VoucherUncheckedCreateWithoutOrganizerInput> | VoucherCreateWithoutOrganizerInput[] | VoucherUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutOrganizerInput | VoucherCreateOrConnectWithoutOrganizerInput[]
    createMany?: VoucherCreateManyOrganizerInputEnvelope
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EventUpdateManyWithoutOrganizerNestedInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutOrganizerInput | EventUpsertWithWhereUniqueWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutOrganizerInput | EventUpdateWithWhereUniqueWithoutOrganizerInput[]
    updateMany?: EventUpdateManyWithWhereWithoutOrganizerInput | EventUpdateManyWithWhereWithoutOrganizerInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutOrganizerNestedInput = {
    create?: XOR<TransactionCreateWithoutOrganizerInput, TransactionUncheckedCreateWithoutOrganizerInput> | TransactionCreateWithoutOrganizerInput[] | TransactionUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutOrganizerInput | TransactionCreateOrConnectWithoutOrganizerInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutOrganizerInput | TransactionUpsertWithWhereUniqueWithoutOrganizerInput[]
    createMany?: TransactionCreateManyOrganizerInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutOrganizerInput | TransactionUpdateWithWhereUniqueWithoutOrganizerInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutOrganizerInput | TransactionUpdateManyWithWhereWithoutOrganizerInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserCouponUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCouponCreateWithoutUserInput, UserCouponUncheckedCreateWithoutUserInput> | UserCouponCreateWithoutUserInput[] | UserCouponUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCouponCreateOrConnectWithoutUserInput | UserCouponCreateOrConnectWithoutUserInput[]
    upsert?: UserCouponUpsertWithWhereUniqueWithoutUserInput | UserCouponUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCouponCreateManyUserInputEnvelope
    set?: UserCouponWhereUniqueInput | UserCouponWhereUniqueInput[]
    disconnect?: UserCouponWhereUniqueInput | UserCouponWhereUniqueInput[]
    delete?: UserCouponWhereUniqueInput | UserCouponWhereUniqueInput[]
    connect?: UserCouponWhereUniqueInput | UserCouponWhereUniqueInput[]
    update?: UserCouponUpdateWithWhereUniqueWithoutUserInput | UserCouponUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCouponUpdateManyWithWhereWithoutUserInput | UserCouponUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCouponScalarWhereInput | UserCouponScalarWhereInput[]
  }

  export type UserVoucherUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserVoucherCreateWithoutUserInput, UserVoucherUncheckedCreateWithoutUserInput> | UserVoucherCreateWithoutUserInput[] | UserVoucherUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserVoucherCreateOrConnectWithoutUserInput | UserVoucherCreateOrConnectWithoutUserInput[]
    upsert?: UserVoucherUpsertWithWhereUniqueWithoutUserInput | UserVoucherUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserVoucherCreateManyUserInputEnvelope
    set?: UserVoucherWhereUniqueInput | UserVoucherWhereUniqueInput[]
    disconnect?: UserVoucherWhereUniqueInput | UserVoucherWhereUniqueInput[]
    delete?: UserVoucherWhereUniqueInput | UserVoucherWhereUniqueInput[]
    connect?: UserVoucherWhereUniqueInput | UserVoucherWhereUniqueInput[]
    update?: UserVoucherUpdateWithWhereUniqueWithoutUserInput | UserVoucherUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserVoucherUpdateManyWithWhereWithoutUserInput | UserVoucherUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserVoucherScalarWhereInput | UserVoucherScalarWhereInput[]
  }

  export type UserUpdateOneWithoutReferralsNestedInput = {
    create?: XOR<UserCreateWithoutReferralsInput, UserUncheckedCreateWithoutReferralsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralsInput
    upsert?: UserUpsertWithoutReferralsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReferralsInput, UserUpdateWithoutReferralsInput>, UserUncheckedUpdateWithoutReferralsInput>
  }

  export type UserUpdateManyWithoutReferredByNestedInput = {
    create?: XOR<UserCreateWithoutReferredByInput, UserUncheckedCreateWithoutReferredByInput> | UserCreateWithoutReferredByInput[] | UserUncheckedCreateWithoutReferredByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReferredByInput | UserCreateOrConnectWithoutReferredByInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutReferredByInput | UserUpsertWithWhereUniqueWithoutReferredByInput[]
    createMany?: UserCreateManyReferredByInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutReferredByInput | UserUpdateWithWhereUniqueWithoutReferredByInput[]
    updateMany?: UserUpdateManyWithWhereWithoutReferredByInput | UserUpdateManyWithWhereWithoutReferredByInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type VoucherUpdateManyWithoutOrganizerNestedInput = {
    create?: XOR<VoucherCreateWithoutOrganizerInput, VoucherUncheckedCreateWithoutOrganizerInput> | VoucherCreateWithoutOrganizerInput[] | VoucherUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutOrganizerInput | VoucherCreateOrConnectWithoutOrganizerInput[]
    upsert?: VoucherUpsertWithWhereUniqueWithoutOrganizerInput | VoucherUpsertWithWhereUniqueWithoutOrganizerInput[]
    createMany?: VoucherCreateManyOrganizerInputEnvelope
    set?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    disconnect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    delete?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    update?: VoucherUpdateWithWhereUniqueWithoutOrganizerInput | VoucherUpdateWithWhereUniqueWithoutOrganizerInput[]
    updateMany?: VoucherUpdateManyWithWhereWithoutOrganizerInput | VoucherUpdateManyWithWhereWithoutOrganizerInput[]
    deleteMany?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventUncheckedUpdateManyWithoutOrganizerNestedInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutOrganizerInput | EventUpsertWithWhereUniqueWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutOrganizerInput | EventUpdateWithWhereUniqueWithoutOrganizerInput[]
    updateMany?: EventUpdateManyWithWhereWithoutOrganizerInput | EventUpdateManyWithWhereWithoutOrganizerInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutOrganizerNestedInput = {
    create?: XOR<TransactionCreateWithoutOrganizerInput, TransactionUncheckedCreateWithoutOrganizerInput> | TransactionCreateWithoutOrganizerInput[] | TransactionUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutOrganizerInput | TransactionCreateOrConnectWithoutOrganizerInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutOrganizerInput | TransactionUpsertWithWhereUniqueWithoutOrganizerInput[]
    createMany?: TransactionCreateManyOrganizerInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutOrganizerInput | TransactionUpdateWithWhereUniqueWithoutOrganizerInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutOrganizerInput | TransactionUpdateManyWithWhereWithoutOrganizerInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserCouponUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCouponCreateWithoutUserInput, UserCouponUncheckedCreateWithoutUserInput> | UserCouponCreateWithoutUserInput[] | UserCouponUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCouponCreateOrConnectWithoutUserInput | UserCouponCreateOrConnectWithoutUserInput[]
    upsert?: UserCouponUpsertWithWhereUniqueWithoutUserInput | UserCouponUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCouponCreateManyUserInputEnvelope
    set?: UserCouponWhereUniqueInput | UserCouponWhereUniqueInput[]
    disconnect?: UserCouponWhereUniqueInput | UserCouponWhereUniqueInput[]
    delete?: UserCouponWhereUniqueInput | UserCouponWhereUniqueInput[]
    connect?: UserCouponWhereUniqueInput | UserCouponWhereUniqueInput[]
    update?: UserCouponUpdateWithWhereUniqueWithoutUserInput | UserCouponUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCouponUpdateManyWithWhereWithoutUserInput | UserCouponUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCouponScalarWhereInput | UserCouponScalarWhereInput[]
  }

  export type UserVoucherUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserVoucherCreateWithoutUserInput, UserVoucherUncheckedCreateWithoutUserInput> | UserVoucherCreateWithoutUserInput[] | UserVoucherUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserVoucherCreateOrConnectWithoutUserInput | UserVoucherCreateOrConnectWithoutUserInput[]
    upsert?: UserVoucherUpsertWithWhereUniqueWithoutUserInput | UserVoucherUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserVoucherCreateManyUserInputEnvelope
    set?: UserVoucherWhereUniqueInput | UserVoucherWhereUniqueInput[]
    disconnect?: UserVoucherWhereUniqueInput | UserVoucherWhereUniqueInput[]
    delete?: UserVoucherWhereUniqueInput | UserVoucherWhereUniqueInput[]
    connect?: UserVoucherWhereUniqueInput | UserVoucherWhereUniqueInput[]
    update?: UserVoucherUpdateWithWhereUniqueWithoutUserInput | UserVoucherUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserVoucherUpdateManyWithWhereWithoutUserInput | UserVoucherUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserVoucherScalarWhereInput | UserVoucherScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutReferredByNestedInput = {
    create?: XOR<UserCreateWithoutReferredByInput, UserUncheckedCreateWithoutReferredByInput> | UserCreateWithoutReferredByInput[] | UserUncheckedCreateWithoutReferredByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReferredByInput | UserCreateOrConnectWithoutReferredByInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutReferredByInput | UserUpsertWithWhereUniqueWithoutReferredByInput[]
    createMany?: UserCreateManyReferredByInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutReferredByInput | UserUpdateWithWhereUniqueWithoutReferredByInput[]
    updateMany?: UserUpdateManyWithWhereWithoutReferredByInput | UserUpdateManyWithWhereWithoutReferredByInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type VoucherUncheckedUpdateManyWithoutOrganizerNestedInput = {
    create?: XOR<VoucherCreateWithoutOrganizerInput, VoucherUncheckedCreateWithoutOrganizerInput> | VoucherCreateWithoutOrganizerInput[] | VoucherUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutOrganizerInput | VoucherCreateOrConnectWithoutOrganizerInput[]
    upsert?: VoucherUpsertWithWhereUniqueWithoutOrganizerInput | VoucherUpsertWithWhereUniqueWithoutOrganizerInput[]
    createMany?: VoucherCreateManyOrganizerInputEnvelope
    set?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    disconnect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    delete?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    update?: VoucherUpdateWithWhereUniqueWithoutOrganizerInput | VoucherUpdateWithWhereUniqueWithoutOrganizerInput[]
    updateMany?: VoucherUpdateManyWithWhereWithoutOrganizerInput | VoucherUpdateManyWithWhereWithoutOrganizerInput[]
    deleteMany?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOrganizedEventsInput = {
    create?: XOR<UserCreateWithoutOrganizedEventsInput, UserUncheckedCreateWithoutOrganizedEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrganizedEventsInput
    connect?: UserWhereUniqueInput
  }

  export type ReviewCreateNestedManyWithoutEventInput = {
    create?: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput> | ReviewCreateWithoutEventInput[] | ReviewUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutEventInput | ReviewCreateOrConnectWithoutEventInput[]
    createMany?: ReviewCreateManyEventInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type TicketTypeCreateNestedManyWithoutEventInput = {
    create?: XOR<TicketTypeCreateWithoutEventInput, TicketTypeUncheckedCreateWithoutEventInput> | TicketTypeCreateWithoutEventInput[] | TicketTypeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketTypeCreateOrConnectWithoutEventInput | TicketTypeCreateOrConnectWithoutEventInput[]
    createMany?: TicketTypeCreateManyEventInputEnvelope
    connect?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutEventInput = {
    create?: XOR<TransactionCreateWithoutEventInput, TransactionUncheckedCreateWithoutEventInput> | TransactionCreateWithoutEventInput[] | TransactionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutEventInput | TransactionCreateOrConnectWithoutEventInput[]
    createMany?: TransactionCreateManyEventInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type VoucherCreateNestedManyWithoutEventInput = {
    create?: XOR<VoucherCreateWithoutEventInput, VoucherUncheckedCreateWithoutEventInput> | VoucherCreateWithoutEventInput[] | VoucherUncheckedCreateWithoutEventInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutEventInput | VoucherCreateOrConnectWithoutEventInput[]
    createMany?: VoucherCreateManyEventInputEnvelope
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput> | ReviewCreateWithoutEventInput[] | ReviewUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutEventInput | ReviewCreateOrConnectWithoutEventInput[]
    createMany?: ReviewCreateManyEventInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type TicketTypeUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<TicketTypeCreateWithoutEventInput, TicketTypeUncheckedCreateWithoutEventInput> | TicketTypeCreateWithoutEventInput[] | TicketTypeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketTypeCreateOrConnectWithoutEventInput | TicketTypeCreateOrConnectWithoutEventInput[]
    createMany?: TicketTypeCreateManyEventInputEnvelope
    connect?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<TransactionCreateWithoutEventInput, TransactionUncheckedCreateWithoutEventInput> | TransactionCreateWithoutEventInput[] | TransactionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutEventInput | TransactionCreateOrConnectWithoutEventInput[]
    createMany?: TransactionCreateManyEventInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type VoucherUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<VoucherCreateWithoutEventInput, VoucherUncheckedCreateWithoutEventInput> | VoucherCreateWithoutEventInput[] | VoucherUncheckedCreateWithoutEventInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutEventInput | VoucherCreateOrConnectWithoutEventInput[]
    createMany?: VoucherCreateManyEventInputEnvelope
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutOrganizedEventsNestedInput = {
    create?: XOR<UserCreateWithoutOrganizedEventsInput, UserUncheckedCreateWithoutOrganizedEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrganizedEventsInput
    upsert?: UserUpsertWithoutOrganizedEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrganizedEventsInput, UserUpdateWithoutOrganizedEventsInput>, UserUncheckedUpdateWithoutOrganizedEventsInput>
  }

  export type ReviewUpdateManyWithoutEventNestedInput = {
    create?: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput> | ReviewCreateWithoutEventInput[] | ReviewUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutEventInput | ReviewCreateOrConnectWithoutEventInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutEventInput | ReviewUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: ReviewCreateManyEventInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutEventInput | ReviewUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutEventInput | ReviewUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type TicketTypeUpdateManyWithoutEventNestedInput = {
    create?: XOR<TicketTypeCreateWithoutEventInput, TicketTypeUncheckedCreateWithoutEventInput> | TicketTypeCreateWithoutEventInput[] | TicketTypeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketTypeCreateOrConnectWithoutEventInput | TicketTypeCreateOrConnectWithoutEventInput[]
    upsert?: TicketTypeUpsertWithWhereUniqueWithoutEventInput | TicketTypeUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TicketTypeCreateManyEventInputEnvelope
    set?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[]
    disconnect?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[]
    delete?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[]
    connect?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[]
    update?: TicketTypeUpdateWithWhereUniqueWithoutEventInput | TicketTypeUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TicketTypeUpdateManyWithWhereWithoutEventInput | TicketTypeUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TicketTypeScalarWhereInput | TicketTypeScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutEventNestedInput = {
    create?: XOR<TransactionCreateWithoutEventInput, TransactionUncheckedCreateWithoutEventInput> | TransactionCreateWithoutEventInput[] | TransactionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutEventInput | TransactionCreateOrConnectWithoutEventInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutEventInput | TransactionUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TransactionCreateManyEventInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutEventInput | TransactionUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutEventInput | TransactionUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type VoucherUpdateManyWithoutEventNestedInput = {
    create?: XOR<VoucherCreateWithoutEventInput, VoucherUncheckedCreateWithoutEventInput> | VoucherCreateWithoutEventInput[] | VoucherUncheckedCreateWithoutEventInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutEventInput | VoucherCreateOrConnectWithoutEventInput[]
    upsert?: VoucherUpsertWithWhereUniqueWithoutEventInput | VoucherUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: VoucherCreateManyEventInputEnvelope
    set?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    disconnect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    delete?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    update?: VoucherUpdateWithWhereUniqueWithoutEventInput | VoucherUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: VoucherUpdateManyWithWhereWithoutEventInput | VoucherUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput> | ReviewCreateWithoutEventInput[] | ReviewUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutEventInput | ReviewCreateOrConnectWithoutEventInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutEventInput | ReviewUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: ReviewCreateManyEventInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutEventInput | ReviewUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutEventInput | ReviewUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type TicketTypeUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<TicketTypeCreateWithoutEventInput, TicketTypeUncheckedCreateWithoutEventInput> | TicketTypeCreateWithoutEventInput[] | TicketTypeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketTypeCreateOrConnectWithoutEventInput | TicketTypeCreateOrConnectWithoutEventInput[]
    upsert?: TicketTypeUpsertWithWhereUniqueWithoutEventInput | TicketTypeUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TicketTypeCreateManyEventInputEnvelope
    set?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[]
    disconnect?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[]
    delete?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[]
    connect?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[]
    update?: TicketTypeUpdateWithWhereUniqueWithoutEventInput | TicketTypeUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TicketTypeUpdateManyWithWhereWithoutEventInput | TicketTypeUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TicketTypeScalarWhereInput | TicketTypeScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<TransactionCreateWithoutEventInput, TransactionUncheckedCreateWithoutEventInput> | TransactionCreateWithoutEventInput[] | TransactionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutEventInput | TransactionCreateOrConnectWithoutEventInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutEventInput | TransactionUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TransactionCreateManyEventInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutEventInput | TransactionUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutEventInput | TransactionUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type VoucherUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<VoucherCreateWithoutEventInput, VoucherUncheckedCreateWithoutEventInput> | VoucherCreateWithoutEventInput[] | VoucherUncheckedCreateWithoutEventInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutEventInput | VoucherCreateOrConnectWithoutEventInput[]
    upsert?: VoucherUpsertWithWhereUniqueWithoutEventInput | VoucherUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: VoucherCreateManyEventInputEnvelope
    set?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    disconnect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    delete?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    update?: VoucherUpdateWithWhereUniqueWithoutEventInput | VoucherUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: VoucherUpdateManyWithWhereWithoutEventInput | VoucherUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutTicketTypesInput = {
    create?: XOR<EventCreateWithoutTicketTypesInput, EventUncheckedCreateWithoutTicketTypesInput>
    connectOrCreate?: EventCreateOrConnectWithoutTicketTypesInput
    connect?: EventWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutTicketTypeInput = {
    create?: XOR<TransactionCreateWithoutTicketTypeInput, TransactionUncheckedCreateWithoutTicketTypeInput> | TransactionCreateWithoutTicketTypeInput[] | TransactionUncheckedCreateWithoutTicketTypeInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutTicketTypeInput | TransactionCreateOrConnectWithoutTicketTypeInput[]
    createMany?: TransactionCreateManyTicketTypeInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutTicketTypeInput = {
    create?: XOR<TransactionCreateWithoutTicketTypeInput, TransactionUncheckedCreateWithoutTicketTypeInput> | TransactionCreateWithoutTicketTypeInput[] | TransactionUncheckedCreateWithoutTicketTypeInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutTicketTypeInput | TransactionCreateOrConnectWithoutTicketTypeInput[]
    createMany?: TransactionCreateManyTicketTypeInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type EventUpdateOneRequiredWithoutTicketTypesNestedInput = {
    create?: XOR<EventCreateWithoutTicketTypesInput, EventUncheckedCreateWithoutTicketTypesInput>
    connectOrCreate?: EventCreateOrConnectWithoutTicketTypesInput
    upsert?: EventUpsertWithoutTicketTypesInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutTicketTypesInput, EventUpdateWithoutTicketTypesInput>, EventUncheckedUpdateWithoutTicketTypesInput>
  }

  export type TransactionUpdateManyWithoutTicketTypeNestedInput = {
    create?: XOR<TransactionCreateWithoutTicketTypeInput, TransactionUncheckedCreateWithoutTicketTypeInput> | TransactionCreateWithoutTicketTypeInput[] | TransactionUncheckedCreateWithoutTicketTypeInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutTicketTypeInput | TransactionCreateOrConnectWithoutTicketTypeInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutTicketTypeInput | TransactionUpsertWithWhereUniqueWithoutTicketTypeInput[]
    createMany?: TransactionCreateManyTicketTypeInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutTicketTypeInput | TransactionUpdateWithWhereUniqueWithoutTicketTypeInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutTicketTypeInput | TransactionUpdateManyWithWhereWithoutTicketTypeInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutTicketTypeNestedInput = {
    create?: XOR<TransactionCreateWithoutTicketTypeInput, TransactionUncheckedCreateWithoutTicketTypeInput> | TransactionCreateWithoutTicketTypeInput[] | TransactionUncheckedCreateWithoutTicketTypeInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutTicketTypeInput | TransactionCreateOrConnectWithoutTicketTypeInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutTicketTypeInput | TransactionUpsertWithWhereUniqueWithoutTicketTypeInput[]
    createMany?: TransactionCreateManyTicketTypeInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutTicketTypeInput | TransactionUpdateWithWhereUniqueWithoutTicketTypeInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutTicketTypeInput | TransactionUpdateManyWithWhereWithoutTicketTypeInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutReviewsInput = {
    create?: XOR<EventCreateWithoutReviewsInput, EventUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: EventCreateOrConnectWithoutReviewsInput
    connect?: EventWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type EventUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<EventCreateWithoutReviewsInput, EventUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: EventCreateOrConnectWithoutReviewsInput
    upsert?: EventUpsertWithoutReviewsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutReviewsInput, EventUpdateWithoutReviewsInput>, EventUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type CouponCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<CouponCreateWithoutTransactionsInput, CouponUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CouponCreateOrConnectWithoutTransactionsInput
    connect?: CouponWhereUniqueInput
  }

  export type EventCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<EventCreateWithoutTransactionsInput, EventUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: EventCreateOrConnectWithoutTransactionsInput
    connect?: EventWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOrganizerTransactionsInput = {
    create?: XOR<UserCreateWithoutOrganizerTransactionsInput, UserUncheckedCreateWithoutOrganizerTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrganizerTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type TicketTypeCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<TicketTypeCreateWithoutTransactionsInput, TicketTypeUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: TicketTypeCreateOrConnectWithoutTransactionsInput
    connect?: TicketTypeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUserTransactionsInput = {
    create?: XOR<UserCreateWithoutUserTransactionsInput, UserUncheckedCreateWithoutUserTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type VoucherCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<VoucherCreateWithoutTransactionsInput, VoucherUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: VoucherCreateOrConnectWithoutTransactionsInput
    connect?: VoucherWhereUniqueInput
  }

  export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus
  }

  export type CouponUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<CouponCreateWithoutTransactionsInput, CouponUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CouponCreateOrConnectWithoutTransactionsInput
    upsert?: CouponUpsertWithoutTransactionsInput
    disconnect?: CouponWhereInput | boolean
    delete?: CouponWhereInput | boolean
    connect?: CouponWhereUniqueInput
    update?: XOR<XOR<CouponUpdateToOneWithWhereWithoutTransactionsInput, CouponUpdateWithoutTransactionsInput>, CouponUncheckedUpdateWithoutTransactionsInput>
  }

  export type EventUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<EventCreateWithoutTransactionsInput, EventUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: EventCreateOrConnectWithoutTransactionsInput
    upsert?: EventUpsertWithoutTransactionsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutTransactionsInput, EventUpdateWithoutTransactionsInput>, EventUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateOneRequiredWithoutOrganizerTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutOrganizerTransactionsInput, UserUncheckedCreateWithoutOrganizerTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrganizerTransactionsInput
    upsert?: UserUpsertWithoutOrganizerTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrganizerTransactionsInput, UserUpdateWithoutOrganizerTransactionsInput>, UserUncheckedUpdateWithoutOrganizerTransactionsInput>
  }

  export type TicketTypeUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<TicketTypeCreateWithoutTransactionsInput, TicketTypeUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: TicketTypeCreateOrConnectWithoutTransactionsInput
    upsert?: TicketTypeUpsertWithoutTransactionsInput
    connect?: TicketTypeWhereUniqueInput
    update?: XOR<XOR<TicketTypeUpdateToOneWithWhereWithoutTransactionsInput, TicketTypeUpdateWithoutTransactionsInput>, TicketTypeUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateOneRequiredWithoutUserTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutUserTransactionsInput, UserUncheckedCreateWithoutUserTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserTransactionsInput
    upsert?: UserUpsertWithoutUserTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserTransactionsInput, UserUpdateWithoutUserTransactionsInput>, UserUncheckedUpdateWithoutUserTransactionsInput>
  }

  export type VoucherUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<VoucherCreateWithoutTransactionsInput, VoucherUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: VoucherCreateOrConnectWithoutTransactionsInput
    upsert?: VoucherUpsertWithoutTransactionsInput
    disconnect?: VoucherWhereInput | boolean
    delete?: VoucherWhereInput | boolean
    connect?: VoucherWhereUniqueInput
    update?: XOR<XOR<VoucherUpdateToOneWithWhereWithoutTransactionsInput, VoucherUpdateWithoutTransactionsInput>, VoucherUncheckedUpdateWithoutTransactionsInput>
  }

  export type TransactionCreateNestedManyWithoutVoucherInput = {
    create?: XOR<TransactionCreateWithoutVoucherInput, TransactionUncheckedCreateWithoutVoucherInput> | TransactionCreateWithoutVoucherInput[] | TransactionUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutVoucherInput | TransactionCreateOrConnectWithoutVoucherInput[]
    createMany?: TransactionCreateManyVoucherInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type UserVoucherCreateNestedManyWithoutVoucherInput = {
    create?: XOR<UserVoucherCreateWithoutVoucherInput, UserVoucherUncheckedCreateWithoutVoucherInput> | UserVoucherCreateWithoutVoucherInput[] | UserVoucherUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: UserVoucherCreateOrConnectWithoutVoucherInput | UserVoucherCreateOrConnectWithoutVoucherInput[]
    createMany?: UserVoucherCreateManyVoucherInputEnvelope
    connect?: UserVoucherWhereUniqueInput | UserVoucherWhereUniqueInput[]
  }

  export type EventCreateNestedOneWithoutVouchersInput = {
    create?: XOR<EventCreateWithoutVouchersInput, EventUncheckedCreateWithoutVouchersInput>
    connectOrCreate?: EventCreateOrConnectWithoutVouchersInput
    connect?: EventWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutVouchersInput = {
    create?: XOR<UserCreateWithoutVouchersInput, UserUncheckedCreateWithoutVouchersInput>
    connectOrCreate?: UserCreateOrConnectWithoutVouchersInput
    connect?: UserWhereUniqueInput
  }

  export type TransactionUncheckedCreateNestedManyWithoutVoucherInput = {
    create?: XOR<TransactionCreateWithoutVoucherInput, TransactionUncheckedCreateWithoutVoucherInput> | TransactionCreateWithoutVoucherInput[] | TransactionUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutVoucherInput | TransactionCreateOrConnectWithoutVoucherInput[]
    createMany?: TransactionCreateManyVoucherInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type UserVoucherUncheckedCreateNestedManyWithoutVoucherInput = {
    create?: XOR<UserVoucherCreateWithoutVoucherInput, UserVoucherUncheckedCreateWithoutVoucherInput> | UserVoucherCreateWithoutVoucherInput[] | UserVoucherUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: UserVoucherCreateOrConnectWithoutVoucherInput | UserVoucherCreateOrConnectWithoutVoucherInput[]
    createMany?: UserVoucherCreateManyVoucherInputEnvelope
    connect?: UserVoucherWhereUniqueInput | UserVoucherWhereUniqueInput[]
  }

  export type TransactionUpdateManyWithoutVoucherNestedInput = {
    create?: XOR<TransactionCreateWithoutVoucherInput, TransactionUncheckedCreateWithoutVoucherInput> | TransactionCreateWithoutVoucherInput[] | TransactionUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutVoucherInput | TransactionCreateOrConnectWithoutVoucherInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutVoucherInput | TransactionUpsertWithWhereUniqueWithoutVoucherInput[]
    createMany?: TransactionCreateManyVoucherInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutVoucherInput | TransactionUpdateWithWhereUniqueWithoutVoucherInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutVoucherInput | TransactionUpdateManyWithWhereWithoutVoucherInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserVoucherUpdateManyWithoutVoucherNestedInput = {
    create?: XOR<UserVoucherCreateWithoutVoucherInput, UserVoucherUncheckedCreateWithoutVoucherInput> | UserVoucherCreateWithoutVoucherInput[] | UserVoucherUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: UserVoucherCreateOrConnectWithoutVoucherInput | UserVoucherCreateOrConnectWithoutVoucherInput[]
    upsert?: UserVoucherUpsertWithWhereUniqueWithoutVoucherInput | UserVoucherUpsertWithWhereUniqueWithoutVoucherInput[]
    createMany?: UserVoucherCreateManyVoucherInputEnvelope
    set?: UserVoucherWhereUniqueInput | UserVoucherWhereUniqueInput[]
    disconnect?: UserVoucherWhereUniqueInput | UserVoucherWhereUniqueInput[]
    delete?: UserVoucherWhereUniqueInput | UserVoucherWhereUniqueInput[]
    connect?: UserVoucherWhereUniqueInput | UserVoucherWhereUniqueInput[]
    update?: UserVoucherUpdateWithWhereUniqueWithoutVoucherInput | UserVoucherUpdateWithWhereUniqueWithoutVoucherInput[]
    updateMany?: UserVoucherUpdateManyWithWhereWithoutVoucherInput | UserVoucherUpdateManyWithWhereWithoutVoucherInput[]
    deleteMany?: UserVoucherScalarWhereInput | UserVoucherScalarWhereInput[]
  }

  export type EventUpdateOneRequiredWithoutVouchersNestedInput = {
    create?: XOR<EventCreateWithoutVouchersInput, EventUncheckedCreateWithoutVouchersInput>
    connectOrCreate?: EventCreateOrConnectWithoutVouchersInput
    upsert?: EventUpsertWithoutVouchersInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutVouchersInput, EventUpdateWithoutVouchersInput>, EventUncheckedUpdateWithoutVouchersInput>
  }

  export type UserUpdateOneRequiredWithoutVouchersNestedInput = {
    create?: XOR<UserCreateWithoutVouchersInput, UserUncheckedCreateWithoutVouchersInput>
    connectOrCreate?: UserCreateOrConnectWithoutVouchersInput
    upsert?: UserUpsertWithoutVouchersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVouchersInput, UserUpdateWithoutVouchersInput>, UserUncheckedUpdateWithoutVouchersInput>
  }

  export type TransactionUncheckedUpdateManyWithoutVoucherNestedInput = {
    create?: XOR<TransactionCreateWithoutVoucherInput, TransactionUncheckedCreateWithoutVoucherInput> | TransactionCreateWithoutVoucherInput[] | TransactionUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutVoucherInput | TransactionCreateOrConnectWithoutVoucherInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutVoucherInput | TransactionUpsertWithWhereUniqueWithoutVoucherInput[]
    createMany?: TransactionCreateManyVoucherInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutVoucherInput | TransactionUpdateWithWhereUniqueWithoutVoucherInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutVoucherInput | TransactionUpdateManyWithWhereWithoutVoucherInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserVoucherUncheckedUpdateManyWithoutVoucherNestedInput = {
    create?: XOR<UserVoucherCreateWithoutVoucherInput, UserVoucherUncheckedCreateWithoutVoucherInput> | UserVoucherCreateWithoutVoucherInput[] | UserVoucherUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: UserVoucherCreateOrConnectWithoutVoucherInput | UserVoucherCreateOrConnectWithoutVoucherInput[]
    upsert?: UserVoucherUpsertWithWhereUniqueWithoutVoucherInput | UserVoucherUpsertWithWhereUniqueWithoutVoucherInput[]
    createMany?: UserVoucherCreateManyVoucherInputEnvelope
    set?: UserVoucherWhereUniqueInput | UserVoucherWhereUniqueInput[]
    disconnect?: UserVoucherWhereUniqueInput | UserVoucherWhereUniqueInput[]
    delete?: UserVoucherWhereUniqueInput | UserVoucherWhereUniqueInput[]
    connect?: UserVoucherWhereUniqueInput | UserVoucherWhereUniqueInput[]
    update?: UserVoucherUpdateWithWhereUniqueWithoutVoucherInput | UserVoucherUpdateWithWhereUniqueWithoutVoucherInput[]
    updateMany?: UserVoucherUpdateManyWithWhereWithoutVoucherInput | UserVoucherUpdateManyWithWhereWithoutVoucherInput[]
    deleteMany?: UserVoucherScalarWhereInput | UserVoucherScalarWhereInput[]
  }

  export type TransactionCreateNestedManyWithoutCouponInput = {
    create?: XOR<TransactionCreateWithoutCouponInput, TransactionUncheckedCreateWithoutCouponInput> | TransactionCreateWithoutCouponInput[] | TransactionUncheckedCreateWithoutCouponInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCouponInput | TransactionCreateOrConnectWithoutCouponInput[]
    createMany?: TransactionCreateManyCouponInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type UserCouponCreateNestedManyWithoutCouponInput = {
    create?: XOR<UserCouponCreateWithoutCouponInput, UserCouponUncheckedCreateWithoutCouponInput> | UserCouponCreateWithoutCouponInput[] | UserCouponUncheckedCreateWithoutCouponInput[]
    connectOrCreate?: UserCouponCreateOrConnectWithoutCouponInput | UserCouponCreateOrConnectWithoutCouponInput[]
    createMany?: UserCouponCreateManyCouponInputEnvelope
    connect?: UserCouponWhereUniqueInput | UserCouponWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutCouponInput = {
    create?: XOR<TransactionCreateWithoutCouponInput, TransactionUncheckedCreateWithoutCouponInput> | TransactionCreateWithoutCouponInput[] | TransactionUncheckedCreateWithoutCouponInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCouponInput | TransactionCreateOrConnectWithoutCouponInput[]
    createMany?: TransactionCreateManyCouponInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type UserCouponUncheckedCreateNestedManyWithoutCouponInput = {
    create?: XOR<UserCouponCreateWithoutCouponInput, UserCouponUncheckedCreateWithoutCouponInput> | UserCouponCreateWithoutCouponInput[] | UserCouponUncheckedCreateWithoutCouponInput[]
    connectOrCreate?: UserCouponCreateOrConnectWithoutCouponInput | UserCouponCreateOrConnectWithoutCouponInput[]
    createMany?: UserCouponCreateManyCouponInputEnvelope
    connect?: UserCouponWhereUniqueInput | UserCouponWhereUniqueInput[]
  }

  export type TransactionUpdateManyWithoutCouponNestedInput = {
    create?: XOR<TransactionCreateWithoutCouponInput, TransactionUncheckedCreateWithoutCouponInput> | TransactionCreateWithoutCouponInput[] | TransactionUncheckedCreateWithoutCouponInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCouponInput | TransactionCreateOrConnectWithoutCouponInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCouponInput | TransactionUpsertWithWhereUniqueWithoutCouponInput[]
    createMany?: TransactionCreateManyCouponInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCouponInput | TransactionUpdateWithWhereUniqueWithoutCouponInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCouponInput | TransactionUpdateManyWithWhereWithoutCouponInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserCouponUpdateManyWithoutCouponNestedInput = {
    create?: XOR<UserCouponCreateWithoutCouponInput, UserCouponUncheckedCreateWithoutCouponInput> | UserCouponCreateWithoutCouponInput[] | UserCouponUncheckedCreateWithoutCouponInput[]
    connectOrCreate?: UserCouponCreateOrConnectWithoutCouponInput | UserCouponCreateOrConnectWithoutCouponInput[]
    upsert?: UserCouponUpsertWithWhereUniqueWithoutCouponInput | UserCouponUpsertWithWhereUniqueWithoutCouponInput[]
    createMany?: UserCouponCreateManyCouponInputEnvelope
    set?: UserCouponWhereUniqueInput | UserCouponWhereUniqueInput[]
    disconnect?: UserCouponWhereUniqueInput | UserCouponWhereUniqueInput[]
    delete?: UserCouponWhereUniqueInput | UserCouponWhereUniqueInput[]
    connect?: UserCouponWhereUniqueInput | UserCouponWhereUniqueInput[]
    update?: UserCouponUpdateWithWhereUniqueWithoutCouponInput | UserCouponUpdateWithWhereUniqueWithoutCouponInput[]
    updateMany?: UserCouponUpdateManyWithWhereWithoutCouponInput | UserCouponUpdateManyWithWhereWithoutCouponInput[]
    deleteMany?: UserCouponScalarWhereInput | UserCouponScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutCouponNestedInput = {
    create?: XOR<TransactionCreateWithoutCouponInput, TransactionUncheckedCreateWithoutCouponInput> | TransactionCreateWithoutCouponInput[] | TransactionUncheckedCreateWithoutCouponInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCouponInput | TransactionCreateOrConnectWithoutCouponInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCouponInput | TransactionUpsertWithWhereUniqueWithoutCouponInput[]
    createMany?: TransactionCreateManyCouponInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCouponInput | TransactionUpdateWithWhereUniqueWithoutCouponInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCouponInput | TransactionUpdateManyWithWhereWithoutCouponInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserCouponUncheckedUpdateManyWithoutCouponNestedInput = {
    create?: XOR<UserCouponCreateWithoutCouponInput, UserCouponUncheckedCreateWithoutCouponInput> | UserCouponCreateWithoutCouponInput[] | UserCouponUncheckedCreateWithoutCouponInput[]
    connectOrCreate?: UserCouponCreateOrConnectWithoutCouponInput | UserCouponCreateOrConnectWithoutCouponInput[]
    upsert?: UserCouponUpsertWithWhereUniqueWithoutCouponInput | UserCouponUpsertWithWhereUniqueWithoutCouponInput[]
    createMany?: UserCouponCreateManyCouponInputEnvelope
    set?: UserCouponWhereUniqueInput | UserCouponWhereUniqueInput[]
    disconnect?: UserCouponWhereUniqueInput | UserCouponWhereUniqueInput[]
    delete?: UserCouponWhereUniqueInput | UserCouponWhereUniqueInput[]
    connect?: UserCouponWhereUniqueInput | UserCouponWhereUniqueInput[]
    update?: UserCouponUpdateWithWhereUniqueWithoutCouponInput | UserCouponUpdateWithWhereUniqueWithoutCouponInput[]
    updateMany?: UserCouponUpdateManyWithWhereWithoutCouponInput | UserCouponUpdateManyWithWhereWithoutCouponInput[]
    deleteMany?: UserCouponScalarWhereInput | UserCouponScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserVouchersInput = {
    create?: XOR<UserCreateWithoutUserVouchersInput, UserUncheckedCreateWithoutUserVouchersInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserVouchersInput
    connect?: UserWhereUniqueInput
  }

  export type VoucherCreateNestedOneWithoutUserVouchersInput = {
    create?: XOR<VoucherCreateWithoutUserVouchersInput, VoucherUncheckedCreateWithoutUserVouchersInput>
    connectOrCreate?: VoucherCreateOrConnectWithoutUserVouchersInput
    connect?: VoucherWhereUniqueInput
  }

  export type EnumVoucherStatusFieldUpdateOperationsInput = {
    set?: $Enums.VoucherStatus
  }

  export type UserUpdateOneRequiredWithoutUserVouchersNestedInput = {
    create?: XOR<UserCreateWithoutUserVouchersInput, UserUncheckedCreateWithoutUserVouchersInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserVouchersInput
    upsert?: UserUpsertWithoutUserVouchersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserVouchersInput, UserUpdateWithoutUserVouchersInput>, UserUncheckedUpdateWithoutUserVouchersInput>
  }

  export type VoucherUpdateOneRequiredWithoutUserVouchersNestedInput = {
    create?: XOR<VoucherCreateWithoutUserVouchersInput, VoucherUncheckedCreateWithoutUserVouchersInput>
    connectOrCreate?: VoucherCreateOrConnectWithoutUserVouchersInput
    upsert?: VoucherUpsertWithoutUserVouchersInput
    connect?: VoucherWhereUniqueInput
    update?: XOR<XOR<VoucherUpdateToOneWithWhereWithoutUserVouchersInput, VoucherUpdateWithoutUserVouchersInput>, VoucherUncheckedUpdateWithoutUserVouchersInput>
  }

  export type CouponCreateNestedOneWithoutUserCouponsInput = {
    create?: XOR<CouponCreateWithoutUserCouponsInput, CouponUncheckedCreateWithoutUserCouponsInput>
    connectOrCreate?: CouponCreateOrConnectWithoutUserCouponsInput
    connect?: CouponWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUserCouponsInput = {
    create?: XOR<UserCreateWithoutUserCouponsInput, UserUncheckedCreateWithoutUserCouponsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserCouponsInput
    connect?: UserWhereUniqueInput
  }

  export type CouponUpdateOneRequiredWithoutUserCouponsNestedInput = {
    create?: XOR<CouponCreateWithoutUserCouponsInput, CouponUncheckedCreateWithoutUserCouponsInput>
    connectOrCreate?: CouponCreateOrConnectWithoutUserCouponsInput
    upsert?: CouponUpsertWithoutUserCouponsInput
    connect?: CouponWhereUniqueInput
    update?: XOR<XOR<CouponUpdateToOneWithWhereWithoutUserCouponsInput, CouponUpdateWithoutUserCouponsInput>, CouponUncheckedUpdateWithoutUserCouponsInput>
  }

  export type UserUpdateOneRequiredWithoutUserCouponsNestedInput = {
    create?: XOR<UserCreateWithoutUserCouponsInput, UserUncheckedCreateWithoutUserCouponsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserCouponsInput
    upsert?: UserUpsertWithoutUserCouponsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserCouponsInput, UserUpdateWithoutUserCouponsInput>, UserUncheckedUpdateWithoutUserCouponsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type NestedEnumVoucherStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VoucherStatus | EnumVoucherStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VoucherStatus[] | ListEnumVoucherStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VoucherStatus[] | ListEnumVoucherStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVoucherStatusFilter<$PrismaModel> | $Enums.VoucherStatus
  }

  export type NestedEnumVoucherStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VoucherStatus | EnumVoucherStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VoucherStatus[] | ListEnumVoucherStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VoucherStatus[] | ListEnumVoucherStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVoucherStatusWithAggregatesFilter<$PrismaModel> | $Enums.VoucherStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVoucherStatusFilter<$PrismaModel>
    _max?: NestedEnumVoucherStatusFilter<$PrismaModel>
  }

  export type EventCreateWithoutOrganizerInput = {
    title: string
    slug: string
    description: string
    category: string
    location: string
    startDate: Date | string
    endDate: Date | string
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    reviews?: ReviewCreateNestedManyWithoutEventInput
    ticketTypes?: TicketTypeCreateNestedManyWithoutEventInput
    transactions?: TransactionCreateNestedManyWithoutEventInput
    vouchers?: VoucherCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutOrganizerInput = {
    id?: number
    title: string
    slug: string
    description: string
    category: string
    location: string
    startDate: Date | string
    endDate: Date | string
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutEventInput
    ticketTypes?: TicketTypeUncheckedCreateNestedManyWithoutEventInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutEventInput
    vouchers?: VoucherUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutOrganizerInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput>
  }

  export type EventCreateManyOrganizerInputEnvelope = {
    data: EventCreateManyOrganizerInput | EventCreateManyOrganizerInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutUserInput = {
    rating: number
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: number
    eventId: number
    rating: number
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutOrganizerInput = {
    status: $Enums.TransactionStatus
    quantity: number
    unitPrice: number
    totalAmount: number
    pointsUsed?: number
    finalAmount: number
    paymentProof?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    coupon?: CouponCreateNestedOneWithoutTransactionsInput
    event: EventCreateNestedOneWithoutTransactionsInput
    ticketType: TicketTypeCreateNestedOneWithoutTransactionsInput
    user: UserCreateNestedOneWithoutUserTransactionsInput
    voucher?: VoucherCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutOrganizerInput = {
    id?: number
    userId: number
    eventId: number
    status: $Enums.TransactionStatus
    ticketTypeId: number
    quantity: number
    unitPrice: number
    totalAmount: number
    pointsUsed?: number
    couponId?: number | null
    voucherId?: number | null
    finalAmount: number
    paymentProof?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TransactionCreateOrConnectWithoutOrganizerInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutOrganizerInput, TransactionUncheckedCreateWithoutOrganizerInput>
  }

  export type TransactionCreateManyOrganizerInputEnvelope = {
    data: TransactionCreateManyOrganizerInput | TransactionCreateManyOrganizerInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutUserInput = {
    status: $Enums.TransactionStatus
    quantity: number
    unitPrice: number
    totalAmount: number
    pointsUsed?: number
    finalAmount: number
    paymentProof?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    coupon?: CouponCreateNestedOneWithoutTransactionsInput
    event: EventCreateNestedOneWithoutTransactionsInput
    organizer: UserCreateNestedOneWithoutOrganizerTransactionsInput
    ticketType: TicketTypeCreateNestedOneWithoutTransactionsInput
    voucher?: VoucherCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    id?: number
    organizerId: number
    eventId: number
    status: $Enums.TransactionStatus
    ticketTypeId: number
    quantity: number
    unitPrice: number
    totalAmount: number
    pointsUsed?: number
    couponId?: number | null
    voucherId?: number | null
    finalAmount: number
    paymentProof?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserCouponCreateWithoutUserInput = {
    status: $Enums.VoucherStatus
    usedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
    coupon: CouponCreateNestedOneWithoutUserCouponsInput
  }

  export type UserCouponUncheckedCreateWithoutUserInput = {
    id?: number
    couponId: number
    status: $Enums.VoucherStatus
    usedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type UserCouponCreateOrConnectWithoutUserInput = {
    where: UserCouponWhereUniqueInput
    create: XOR<UserCouponCreateWithoutUserInput, UserCouponUncheckedCreateWithoutUserInput>
  }

  export type UserCouponCreateManyUserInputEnvelope = {
    data: UserCouponCreateManyUserInput | UserCouponCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserVoucherCreateWithoutUserInput = {
    status: $Enums.VoucherStatus
    usedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
    voucher: VoucherCreateNestedOneWithoutUserVouchersInput
  }

  export type UserVoucherUncheckedCreateWithoutUserInput = {
    id?: number
    voucherId: number
    status: $Enums.VoucherStatus
    usedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type UserVoucherCreateOrConnectWithoutUserInput = {
    where: UserVoucherWhereUniqueInput
    create: XOR<UserVoucherCreateWithoutUserInput, UserVoucherUncheckedCreateWithoutUserInput>
  }

  export type UserVoucherCreateManyUserInputEnvelope = {
    data: UserVoucherCreateManyUserInput | UserVoucherCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutReferralsInput = {
    name: string
    email: string
    password: string
    role: $Enums.Role
    referralCode?: string | null
    points?: number
    pointsExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    organizedEvents?: EventCreateNestedManyWithoutOrganizerInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    organizerTransactions?: TransactionCreateNestedManyWithoutOrganizerInput
    userTransactions?: TransactionCreateNestedManyWithoutUserInput
    userCoupons?: UserCouponCreateNestedManyWithoutUserInput
    userVouchers?: UserVoucherCreateNestedManyWithoutUserInput
    referredBy?: UserCreateNestedOneWithoutReferralsInput
    vouchers?: VoucherCreateNestedManyWithoutOrganizerInput
  }

  export type UserUncheckedCreateWithoutReferralsInput = {
    id?: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    referralCode?: string | null
    referredById?: number | null
    points?: number
    pointsExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    organizedEvents?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    organizerTransactions?: TransactionUncheckedCreateNestedManyWithoutOrganizerInput
    userTransactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    userCoupons?: UserCouponUncheckedCreateNestedManyWithoutUserInput
    userVouchers?: UserVoucherUncheckedCreateNestedManyWithoutUserInput
    vouchers?: VoucherUncheckedCreateNestedManyWithoutOrganizerInput
  }

  export type UserCreateOrConnectWithoutReferralsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReferralsInput, UserUncheckedCreateWithoutReferralsInput>
  }

  export type UserCreateWithoutReferredByInput = {
    name: string
    email: string
    password: string
    role: $Enums.Role
    referralCode?: string | null
    points?: number
    pointsExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    organizedEvents?: EventCreateNestedManyWithoutOrganizerInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    organizerTransactions?: TransactionCreateNestedManyWithoutOrganizerInput
    userTransactions?: TransactionCreateNestedManyWithoutUserInput
    userCoupons?: UserCouponCreateNestedManyWithoutUserInput
    userVouchers?: UserVoucherCreateNestedManyWithoutUserInput
    referrals?: UserCreateNestedManyWithoutReferredByInput
    vouchers?: VoucherCreateNestedManyWithoutOrganizerInput
  }

  export type UserUncheckedCreateWithoutReferredByInput = {
    id?: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    referralCode?: string | null
    points?: number
    pointsExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    organizedEvents?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    organizerTransactions?: TransactionUncheckedCreateNestedManyWithoutOrganizerInput
    userTransactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    userCoupons?: UserCouponUncheckedCreateNestedManyWithoutUserInput
    userVouchers?: UserVoucherUncheckedCreateNestedManyWithoutUserInput
    referrals?: UserUncheckedCreateNestedManyWithoutReferredByInput
    vouchers?: VoucherUncheckedCreateNestedManyWithoutOrganizerInput
  }

  export type UserCreateOrConnectWithoutReferredByInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReferredByInput, UserUncheckedCreateWithoutReferredByInput>
  }

  export type UserCreateManyReferredByInputEnvelope = {
    data: UserCreateManyReferredByInput | UserCreateManyReferredByInput[]
    skipDuplicates?: boolean
  }

  export type VoucherCreateWithoutOrganizerInput = {
    code: string
    discountValue: number
    usageLimit: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    transactions?: TransactionCreateNestedManyWithoutVoucherInput
    userVouchers?: UserVoucherCreateNestedManyWithoutVoucherInput
    event: EventCreateNestedOneWithoutVouchersInput
  }

  export type VoucherUncheckedCreateWithoutOrganizerInput = {
    id?: number
    code: string
    discountValue: number
    eventId: number
    usageLimit: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutVoucherInput
    userVouchers?: UserVoucherUncheckedCreateNestedManyWithoutVoucherInput
  }

  export type VoucherCreateOrConnectWithoutOrganizerInput = {
    where: VoucherWhereUniqueInput
    create: XOR<VoucherCreateWithoutOrganizerInput, VoucherUncheckedCreateWithoutOrganizerInput>
  }

  export type VoucherCreateManyOrganizerInputEnvelope = {
    data: VoucherCreateManyOrganizerInput | VoucherCreateManyOrganizerInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithWhereUniqueWithoutOrganizerInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutOrganizerInput, EventUncheckedUpdateWithoutOrganizerInput>
    create: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput>
  }

  export type EventUpdateWithWhereUniqueWithoutOrganizerInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutOrganizerInput, EventUncheckedUpdateWithoutOrganizerInput>
  }

  export type EventUpdateManyWithWhereWithoutOrganizerInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutOrganizerInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: IntFilter<"Event"> | number
    organizerId?: IntFilter<"Event"> | number
    title?: StringFilter<"Event"> | string
    slug?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    category?: StringFilter<"Event"> | string
    location?: StringFilter<"Event"> | string
    startDate?: DateTimeFilter<"Event"> | Date | string
    endDate?: DateTimeFilter<"Event"> | Date | string
    published?: BoolFilter<"Event"> | boolean
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Event"> | Date | string | null
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
    eventId?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutOrganizerInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutOrganizerInput, TransactionUncheckedUpdateWithoutOrganizerInput>
    create: XOR<TransactionCreateWithoutOrganizerInput, TransactionUncheckedCreateWithoutOrganizerInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutOrganizerInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutOrganizerInput, TransactionUncheckedUpdateWithoutOrganizerInput>
  }

  export type TransactionUpdateManyWithWhereWithoutOrganizerInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutOrganizerInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: IntFilter<"Transaction"> | number
    userId?: IntFilter<"Transaction"> | number
    organizerId?: IntFilter<"Transaction"> | number
    eventId?: IntFilter<"Transaction"> | number
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    ticketTypeId?: IntFilter<"Transaction"> | number
    quantity?: IntFilter<"Transaction"> | number
    unitPrice?: IntFilter<"Transaction"> | number
    totalAmount?: IntFilter<"Transaction"> | number
    pointsUsed?: IntFilter<"Transaction"> | number
    couponId?: IntNullableFilter<"Transaction"> | number | null
    voucherId?: IntNullableFilter<"Transaction"> | number | null
    finalAmount?: IntFilter<"Transaction"> | number
    paymentProof?: StringNullableFilter<"Transaction"> | string | null
    expiresAt?: DateTimeFilter<"Transaction"> | Date | string
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Transaction"> | Date | string | null
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCouponUpsertWithWhereUniqueWithoutUserInput = {
    where: UserCouponWhereUniqueInput
    update: XOR<UserCouponUpdateWithoutUserInput, UserCouponUncheckedUpdateWithoutUserInput>
    create: XOR<UserCouponCreateWithoutUserInput, UserCouponUncheckedCreateWithoutUserInput>
  }

  export type UserCouponUpdateWithWhereUniqueWithoutUserInput = {
    where: UserCouponWhereUniqueInput
    data: XOR<UserCouponUpdateWithoutUserInput, UserCouponUncheckedUpdateWithoutUserInput>
  }

  export type UserCouponUpdateManyWithWhereWithoutUserInput = {
    where: UserCouponScalarWhereInput
    data: XOR<UserCouponUpdateManyMutationInput, UserCouponUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCouponScalarWhereInput = {
    AND?: UserCouponScalarWhereInput | UserCouponScalarWhereInput[]
    OR?: UserCouponScalarWhereInput[]
    NOT?: UserCouponScalarWhereInput | UserCouponScalarWhereInput[]
    id?: IntFilter<"UserCoupon"> | number
    userId?: IntFilter<"UserCoupon"> | number
    couponId?: IntFilter<"UserCoupon"> | number
    status?: EnumVoucherStatusFilter<"UserCoupon"> | $Enums.VoucherStatus
    usedAt?: DateTimeNullableFilter<"UserCoupon"> | Date | string | null
    expiresAt?: DateTimeFilter<"UserCoupon"> | Date | string
    createdAt?: DateTimeFilter<"UserCoupon"> | Date | string
  }

  export type UserVoucherUpsertWithWhereUniqueWithoutUserInput = {
    where: UserVoucherWhereUniqueInput
    update: XOR<UserVoucherUpdateWithoutUserInput, UserVoucherUncheckedUpdateWithoutUserInput>
    create: XOR<UserVoucherCreateWithoutUserInput, UserVoucherUncheckedCreateWithoutUserInput>
  }

  export type UserVoucherUpdateWithWhereUniqueWithoutUserInput = {
    where: UserVoucherWhereUniqueInput
    data: XOR<UserVoucherUpdateWithoutUserInput, UserVoucherUncheckedUpdateWithoutUserInput>
  }

  export type UserVoucherUpdateManyWithWhereWithoutUserInput = {
    where: UserVoucherScalarWhereInput
    data: XOR<UserVoucherUpdateManyMutationInput, UserVoucherUncheckedUpdateManyWithoutUserInput>
  }

  export type UserVoucherScalarWhereInput = {
    AND?: UserVoucherScalarWhereInput | UserVoucherScalarWhereInput[]
    OR?: UserVoucherScalarWhereInput[]
    NOT?: UserVoucherScalarWhereInput | UserVoucherScalarWhereInput[]
    id?: IntFilter<"UserVoucher"> | number
    userId?: IntFilter<"UserVoucher"> | number
    voucherId?: IntFilter<"UserVoucher"> | number
    status?: EnumVoucherStatusFilter<"UserVoucher"> | $Enums.VoucherStatus
    usedAt?: DateTimeNullableFilter<"UserVoucher"> | Date | string | null
    expiresAt?: DateTimeFilter<"UserVoucher"> | Date | string
    createdAt?: DateTimeFilter<"UserVoucher"> | Date | string
  }

  export type UserUpsertWithoutReferralsInput = {
    update: XOR<UserUpdateWithoutReferralsInput, UserUncheckedUpdateWithoutReferralsInput>
    create: XOR<UserCreateWithoutReferralsInput, UserUncheckedCreateWithoutReferralsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReferralsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReferralsInput, UserUncheckedUpdateWithoutReferralsInput>
  }

  export type UserUpdateWithoutReferralsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    pointsExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizedEvents?: EventUpdateManyWithoutOrganizerNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    organizerTransactions?: TransactionUpdateManyWithoutOrganizerNestedInput
    userTransactions?: TransactionUpdateManyWithoutUserNestedInput
    userCoupons?: UserCouponUpdateManyWithoutUserNestedInput
    userVouchers?: UserVoucherUpdateManyWithoutUserNestedInput
    referredBy?: UserUpdateOneWithoutReferralsNestedInput
    vouchers?: VoucherUpdateManyWithoutOrganizerNestedInput
  }

  export type UserUncheckedUpdateWithoutReferralsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredById?: NullableIntFieldUpdateOperationsInput | number | null
    points?: IntFieldUpdateOperationsInput | number
    pointsExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizedEvents?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    organizerTransactions?: TransactionUncheckedUpdateManyWithoutOrganizerNestedInput
    userTransactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    userCoupons?: UserCouponUncheckedUpdateManyWithoutUserNestedInput
    userVouchers?: UserVoucherUncheckedUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUncheckedUpdateManyWithoutOrganizerNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutReferredByInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutReferredByInput, UserUncheckedUpdateWithoutReferredByInput>
    create: XOR<UserCreateWithoutReferredByInput, UserUncheckedCreateWithoutReferredByInput>
  }

  export type UserUpdateWithWhereUniqueWithoutReferredByInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutReferredByInput, UserUncheckedUpdateWithoutReferredByInput>
  }

  export type UserUpdateManyWithWhereWithoutReferredByInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutReferredByInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    referralCode?: StringNullableFilter<"User"> | string | null
    referredById?: IntNullableFilter<"User"> | number | null
    points?: IntFilter<"User"> | number
    pointsExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type VoucherUpsertWithWhereUniqueWithoutOrganizerInput = {
    where: VoucherWhereUniqueInput
    update: XOR<VoucherUpdateWithoutOrganizerInput, VoucherUncheckedUpdateWithoutOrganizerInput>
    create: XOR<VoucherCreateWithoutOrganizerInput, VoucherUncheckedCreateWithoutOrganizerInput>
  }

  export type VoucherUpdateWithWhereUniqueWithoutOrganizerInput = {
    where: VoucherWhereUniqueInput
    data: XOR<VoucherUpdateWithoutOrganizerInput, VoucherUncheckedUpdateWithoutOrganizerInput>
  }

  export type VoucherUpdateManyWithWhereWithoutOrganizerInput = {
    where: VoucherScalarWhereInput
    data: XOR<VoucherUpdateManyMutationInput, VoucherUncheckedUpdateManyWithoutOrganizerInput>
  }

  export type VoucherScalarWhereInput = {
    AND?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
    OR?: VoucherScalarWhereInput[]
    NOT?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
    id?: IntFilter<"Voucher"> | number
    organizerId?: IntFilter<"Voucher"> | number
    code?: StringFilter<"Voucher"> | string
    discountValue?: IntFilter<"Voucher"> | number
    eventId?: IntFilter<"Voucher"> | number
    usageLimit?: IntFilter<"Voucher"> | number
    startDate?: DateTimeFilter<"Voucher"> | Date | string
    endDate?: DateTimeFilter<"Voucher"> | Date | string
    createdAt?: DateTimeFilter<"Voucher"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Voucher"> | Date | string | null
  }

  export type UserCreateWithoutOrganizedEventsInput = {
    name: string
    email: string
    password: string
    role: $Enums.Role
    referralCode?: string | null
    points?: number
    pointsExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    reviews?: ReviewCreateNestedManyWithoutUserInput
    organizerTransactions?: TransactionCreateNestedManyWithoutOrganizerInput
    userTransactions?: TransactionCreateNestedManyWithoutUserInput
    userCoupons?: UserCouponCreateNestedManyWithoutUserInput
    userVouchers?: UserVoucherCreateNestedManyWithoutUserInput
    referredBy?: UserCreateNestedOneWithoutReferralsInput
    referrals?: UserCreateNestedManyWithoutReferredByInput
    vouchers?: VoucherCreateNestedManyWithoutOrganizerInput
  }

  export type UserUncheckedCreateWithoutOrganizedEventsInput = {
    id?: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    referralCode?: string | null
    referredById?: number | null
    points?: number
    pointsExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    organizerTransactions?: TransactionUncheckedCreateNestedManyWithoutOrganizerInput
    userTransactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    userCoupons?: UserCouponUncheckedCreateNestedManyWithoutUserInput
    userVouchers?: UserVoucherUncheckedCreateNestedManyWithoutUserInput
    referrals?: UserUncheckedCreateNestedManyWithoutReferredByInput
    vouchers?: VoucherUncheckedCreateNestedManyWithoutOrganizerInput
  }

  export type UserCreateOrConnectWithoutOrganizedEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrganizedEventsInput, UserUncheckedCreateWithoutOrganizedEventsInput>
  }

  export type ReviewCreateWithoutEventInput = {
    rating: number
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutEventInput = {
    id?: number
    userId: number
    rating: number
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutEventInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput>
  }

  export type ReviewCreateManyEventInputEnvelope = {
    data: ReviewCreateManyEventInput | ReviewCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type TicketTypeCreateWithoutEventInput = {
    name: string
    price: number
    totalSeats: number
    availableSeats: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    transactions?: TransactionCreateNestedManyWithoutTicketTypeInput
  }

  export type TicketTypeUncheckedCreateWithoutEventInput = {
    id?: number
    name: string
    price: number
    totalSeats: number
    availableSeats: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutTicketTypeInput
  }

  export type TicketTypeCreateOrConnectWithoutEventInput = {
    where: TicketTypeWhereUniqueInput
    create: XOR<TicketTypeCreateWithoutEventInput, TicketTypeUncheckedCreateWithoutEventInput>
  }

  export type TicketTypeCreateManyEventInputEnvelope = {
    data: TicketTypeCreateManyEventInput | TicketTypeCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutEventInput = {
    status: $Enums.TransactionStatus
    quantity: number
    unitPrice: number
    totalAmount: number
    pointsUsed?: number
    finalAmount: number
    paymentProof?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    coupon?: CouponCreateNestedOneWithoutTransactionsInput
    organizer: UserCreateNestedOneWithoutOrganizerTransactionsInput
    ticketType: TicketTypeCreateNestedOneWithoutTransactionsInput
    user: UserCreateNestedOneWithoutUserTransactionsInput
    voucher?: VoucherCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutEventInput = {
    id?: number
    userId: number
    organizerId: number
    status: $Enums.TransactionStatus
    ticketTypeId: number
    quantity: number
    unitPrice: number
    totalAmount: number
    pointsUsed?: number
    couponId?: number | null
    voucherId?: number | null
    finalAmount: number
    paymentProof?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TransactionCreateOrConnectWithoutEventInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutEventInput, TransactionUncheckedCreateWithoutEventInput>
  }

  export type TransactionCreateManyEventInputEnvelope = {
    data: TransactionCreateManyEventInput | TransactionCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type VoucherCreateWithoutEventInput = {
    code: string
    discountValue: number
    usageLimit: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    transactions?: TransactionCreateNestedManyWithoutVoucherInput
    userVouchers?: UserVoucherCreateNestedManyWithoutVoucherInput
    organizer: UserCreateNestedOneWithoutVouchersInput
  }

  export type VoucherUncheckedCreateWithoutEventInput = {
    id?: number
    organizerId: number
    code: string
    discountValue: number
    usageLimit: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutVoucherInput
    userVouchers?: UserVoucherUncheckedCreateNestedManyWithoutVoucherInput
  }

  export type VoucherCreateOrConnectWithoutEventInput = {
    where: VoucherWhereUniqueInput
    create: XOR<VoucherCreateWithoutEventInput, VoucherUncheckedCreateWithoutEventInput>
  }

  export type VoucherCreateManyEventInputEnvelope = {
    data: VoucherCreateManyEventInput | VoucherCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOrganizedEventsInput = {
    update: XOR<UserUpdateWithoutOrganizedEventsInput, UserUncheckedUpdateWithoutOrganizedEventsInput>
    create: XOR<UserCreateWithoutOrganizedEventsInput, UserUncheckedCreateWithoutOrganizedEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrganizedEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrganizedEventsInput, UserUncheckedUpdateWithoutOrganizedEventsInput>
  }

  export type UserUpdateWithoutOrganizedEventsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    pointsExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    organizerTransactions?: TransactionUpdateManyWithoutOrganizerNestedInput
    userTransactions?: TransactionUpdateManyWithoutUserNestedInput
    userCoupons?: UserCouponUpdateManyWithoutUserNestedInput
    userVouchers?: UserVoucherUpdateManyWithoutUserNestedInput
    referredBy?: UserUpdateOneWithoutReferralsNestedInput
    referrals?: UserUpdateManyWithoutReferredByNestedInput
    vouchers?: VoucherUpdateManyWithoutOrganizerNestedInput
  }

  export type UserUncheckedUpdateWithoutOrganizedEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredById?: NullableIntFieldUpdateOperationsInput | number | null
    points?: IntFieldUpdateOperationsInput | number
    pointsExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    organizerTransactions?: TransactionUncheckedUpdateManyWithoutOrganizerNestedInput
    userTransactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    userCoupons?: UserCouponUncheckedUpdateManyWithoutUserNestedInput
    userVouchers?: UserVoucherUncheckedUpdateManyWithoutUserNestedInput
    referrals?: UserUncheckedUpdateManyWithoutReferredByNestedInput
    vouchers?: VoucherUncheckedUpdateManyWithoutOrganizerNestedInput
  }

  export type ReviewUpsertWithWhereUniqueWithoutEventInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutEventInput, ReviewUncheckedUpdateWithoutEventInput>
    create: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutEventInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutEventInput, ReviewUncheckedUpdateWithoutEventInput>
  }

  export type ReviewUpdateManyWithWhereWithoutEventInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutEventInput>
  }

  export type TicketTypeUpsertWithWhereUniqueWithoutEventInput = {
    where: TicketTypeWhereUniqueInput
    update: XOR<TicketTypeUpdateWithoutEventInput, TicketTypeUncheckedUpdateWithoutEventInput>
    create: XOR<TicketTypeCreateWithoutEventInput, TicketTypeUncheckedCreateWithoutEventInput>
  }

  export type TicketTypeUpdateWithWhereUniqueWithoutEventInput = {
    where: TicketTypeWhereUniqueInput
    data: XOR<TicketTypeUpdateWithoutEventInput, TicketTypeUncheckedUpdateWithoutEventInput>
  }

  export type TicketTypeUpdateManyWithWhereWithoutEventInput = {
    where: TicketTypeScalarWhereInput
    data: XOR<TicketTypeUpdateManyMutationInput, TicketTypeUncheckedUpdateManyWithoutEventInput>
  }

  export type TicketTypeScalarWhereInput = {
    AND?: TicketTypeScalarWhereInput | TicketTypeScalarWhereInput[]
    OR?: TicketTypeScalarWhereInput[]
    NOT?: TicketTypeScalarWhereInput | TicketTypeScalarWhereInput[]
    id?: IntFilter<"TicketType"> | number
    eventId?: IntFilter<"TicketType"> | number
    name?: StringFilter<"TicketType"> | string
    price?: IntFilter<"TicketType"> | number
    totalSeats?: IntFilter<"TicketType"> | number
    availableSeats?: IntFilter<"TicketType"> | number
    createdAt?: DateTimeFilter<"TicketType"> | Date | string
    updatedAt?: DateTimeFilter<"TicketType"> | Date | string
    deletedAt?: DateTimeNullableFilter<"TicketType"> | Date | string | null
  }

  export type TransactionUpsertWithWhereUniqueWithoutEventInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutEventInput, TransactionUncheckedUpdateWithoutEventInput>
    create: XOR<TransactionCreateWithoutEventInput, TransactionUncheckedCreateWithoutEventInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutEventInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutEventInput, TransactionUncheckedUpdateWithoutEventInput>
  }

  export type TransactionUpdateManyWithWhereWithoutEventInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutEventInput>
  }

  export type VoucherUpsertWithWhereUniqueWithoutEventInput = {
    where: VoucherWhereUniqueInput
    update: XOR<VoucherUpdateWithoutEventInput, VoucherUncheckedUpdateWithoutEventInput>
    create: XOR<VoucherCreateWithoutEventInput, VoucherUncheckedCreateWithoutEventInput>
  }

  export type VoucherUpdateWithWhereUniqueWithoutEventInput = {
    where: VoucherWhereUniqueInput
    data: XOR<VoucherUpdateWithoutEventInput, VoucherUncheckedUpdateWithoutEventInput>
  }

  export type VoucherUpdateManyWithWhereWithoutEventInput = {
    where: VoucherScalarWhereInput
    data: XOR<VoucherUpdateManyMutationInput, VoucherUncheckedUpdateManyWithoutEventInput>
  }

  export type EventCreateWithoutTicketTypesInput = {
    title: string
    slug: string
    description: string
    category: string
    location: string
    startDate: Date | string
    endDate: Date | string
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    organizer: UserCreateNestedOneWithoutOrganizedEventsInput
    reviews?: ReviewCreateNestedManyWithoutEventInput
    transactions?: TransactionCreateNestedManyWithoutEventInput
    vouchers?: VoucherCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutTicketTypesInput = {
    id?: number
    organizerId: number
    title: string
    slug: string
    description: string
    category: string
    location: string
    startDate: Date | string
    endDate: Date | string
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutEventInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutEventInput
    vouchers?: VoucherUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutTicketTypesInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutTicketTypesInput, EventUncheckedCreateWithoutTicketTypesInput>
  }

  export type TransactionCreateWithoutTicketTypeInput = {
    status: $Enums.TransactionStatus
    quantity: number
    unitPrice: number
    totalAmount: number
    pointsUsed?: number
    finalAmount: number
    paymentProof?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    coupon?: CouponCreateNestedOneWithoutTransactionsInput
    event: EventCreateNestedOneWithoutTransactionsInput
    organizer: UserCreateNestedOneWithoutOrganizerTransactionsInput
    user: UserCreateNestedOneWithoutUserTransactionsInput
    voucher?: VoucherCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutTicketTypeInput = {
    id?: number
    userId: number
    organizerId: number
    eventId: number
    status: $Enums.TransactionStatus
    quantity: number
    unitPrice: number
    totalAmount: number
    pointsUsed?: number
    couponId?: number | null
    voucherId?: number | null
    finalAmount: number
    paymentProof?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TransactionCreateOrConnectWithoutTicketTypeInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutTicketTypeInput, TransactionUncheckedCreateWithoutTicketTypeInput>
  }

  export type TransactionCreateManyTicketTypeInputEnvelope = {
    data: TransactionCreateManyTicketTypeInput | TransactionCreateManyTicketTypeInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithoutTicketTypesInput = {
    update: XOR<EventUpdateWithoutTicketTypesInput, EventUncheckedUpdateWithoutTicketTypesInput>
    create: XOR<EventCreateWithoutTicketTypesInput, EventUncheckedCreateWithoutTicketTypesInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutTicketTypesInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutTicketTypesInput, EventUncheckedUpdateWithoutTicketTypesInput>
  }

  export type EventUpdateWithoutTicketTypesInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizer?: UserUpdateOneRequiredWithoutOrganizedEventsNestedInput
    reviews?: ReviewUpdateManyWithoutEventNestedInput
    transactions?: TransactionUpdateManyWithoutEventNestedInput
    vouchers?: VoucherUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutTicketTypesInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizerId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviews?: ReviewUncheckedUpdateManyWithoutEventNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutEventNestedInput
    vouchers?: VoucherUncheckedUpdateManyWithoutEventNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutTicketTypeInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutTicketTypeInput, TransactionUncheckedUpdateWithoutTicketTypeInput>
    create: XOR<TransactionCreateWithoutTicketTypeInput, TransactionUncheckedCreateWithoutTicketTypeInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutTicketTypeInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutTicketTypeInput, TransactionUncheckedUpdateWithoutTicketTypeInput>
  }

  export type TransactionUpdateManyWithWhereWithoutTicketTypeInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutTicketTypeInput>
  }

  export type EventCreateWithoutReviewsInput = {
    title: string
    slug: string
    description: string
    category: string
    location: string
    startDate: Date | string
    endDate: Date | string
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    organizer: UserCreateNestedOneWithoutOrganizedEventsInput
    ticketTypes?: TicketTypeCreateNestedManyWithoutEventInput
    transactions?: TransactionCreateNestedManyWithoutEventInput
    vouchers?: VoucherCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutReviewsInput = {
    id?: number
    organizerId: number
    title: string
    slug: string
    description: string
    category: string
    location: string
    startDate: Date | string
    endDate: Date | string
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ticketTypes?: TicketTypeUncheckedCreateNestedManyWithoutEventInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutEventInput
    vouchers?: VoucherUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutReviewsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutReviewsInput, EventUncheckedCreateWithoutReviewsInput>
  }

  export type UserCreateWithoutReviewsInput = {
    name: string
    email: string
    password: string
    role: $Enums.Role
    referralCode?: string | null
    points?: number
    pointsExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    organizedEvents?: EventCreateNestedManyWithoutOrganizerInput
    organizerTransactions?: TransactionCreateNestedManyWithoutOrganizerInput
    userTransactions?: TransactionCreateNestedManyWithoutUserInput
    userCoupons?: UserCouponCreateNestedManyWithoutUserInput
    userVouchers?: UserVoucherCreateNestedManyWithoutUserInput
    referredBy?: UserCreateNestedOneWithoutReferralsInput
    referrals?: UserCreateNestedManyWithoutReferredByInput
    vouchers?: VoucherCreateNestedManyWithoutOrganizerInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    referralCode?: string | null
    referredById?: number | null
    points?: number
    pointsExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    organizedEvents?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    organizerTransactions?: TransactionUncheckedCreateNestedManyWithoutOrganizerInput
    userTransactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    userCoupons?: UserCouponUncheckedCreateNestedManyWithoutUserInput
    userVouchers?: UserVoucherUncheckedCreateNestedManyWithoutUserInput
    referrals?: UserUncheckedCreateNestedManyWithoutReferredByInput
    vouchers?: VoucherUncheckedCreateNestedManyWithoutOrganizerInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type EventUpsertWithoutReviewsInput = {
    update: XOR<EventUpdateWithoutReviewsInput, EventUncheckedUpdateWithoutReviewsInput>
    create: XOR<EventCreateWithoutReviewsInput, EventUncheckedCreateWithoutReviewsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutReviewsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutReviewsInput, EventUncheckedUpdateWithoutReviewsInput>
  }

  export type EventUpdateWithoutReviewsInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizer?: UserUpdateOneRequiredWithoutOrganizedEventsNestedInput
    ticketTypes?: TicketTypeUpdateManyWithoutEventNestedInput
    transactions?: TransactionUpdateManyWithoutEventNestedInput
    vouchers?: VoucherUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizerId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticketTypes?: TicketTypeUncheckedUpdateManyWithoutEventNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutEventNestedInput
    vouchers?: VoucherUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    pointsExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizedEvents?: EventUpdateManyWithoutOrganizerNestedInput
    organizerTransactions?: TransactionUpdateManyWithoutOrganizerNestedInput
    userTransactions?: TransactionUpdateManyWithoutUserNestedInput
    userCoupons?: UserCouponUpdateManyWithoutUserNestedInput
    userVouchers?: UserVoucherUpdateManyWithoutUserNestedInput
    referredBy?: UserUpdateOneWithoutReferralsNestedInput
    referrals?: UserUpdateManyWithoutReferredByNestedInput
    vouchers?: VoucherUpdateManyWithoutOrganizerNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredById?: NullableIntFieldUpdateOperationsInput | number | null
    points?: IntFieldUpdateOperationsInput | number
    pointsExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizedEvents?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    organizerTransactions?: TransactionUncheckedUpdateManyWithoutOrganizerNestedInput
    userTransactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    userCoupons?: UserCouponUncheckedUpdateManyWithoutUserNestedInput
    userVouchers?: UserVoucherUncheckedUpdateManyWithoutUserNestedInput
    referrals?: UserUncheckedUpdateManyWithoutReferredByNestedInput
    vouchers?: VoucherUncheckedUpdateManyWithoutOrganizerNestedInput
  }

  export type CouponCreateWithoutTransactionsInput = {
    code: string
    discountValue: number
    usageLimit: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    userCoupons?: UserCouponCreateNestedManyWithoutCouponInput
  }

  export type CouponUncheckedCreateWithoutTransactionsInput = {
    id?: number
    code: string
    discountValue: number
    usageLimit: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    userCoupons?: UserCouponUncheckedCreateNestedManyWithoutCouponInput
  }

  export type CouponCreateOrConnectWithoutTransactionsInput = {
    where: CouponWhereUniqueInput
    create: XOR<CouponCreateWithoutTransactionsInput, CouponUncheckedCreateWithoutTransactionsInput>
  }

  export type EventCreateWithoutTransactionsInput = {
    title: string
    slug: string
    description: string
    category: string
    location: string
    startDate: Date | string
    endDate: Date | string
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    organizer: UserCreateNestedOneWithoutOrganizedEventsInput
    reviews?: ReviewCreateNestedManyWithoutEventInput
    ticketTypes?: TicketTypeCreateNestedManyWithoutEventInput
    vouchers?: VoucherCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutTransactionsInput = {
    id?: number
    organizerId: number
    title: string
    slug: string
    description: string
    category: string
    location: string
    startDate: Date | string
    endDate: Date | string
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutEventInput
    ticketTypes?: TicketTypeUncheckedCreateNestedManyWithoutEventInput
    vouchers?: VoucherUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutTransactionsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutTransactionsInput, EventUncheckedCreateWithoutTransactionsInput>
  }

  export type UserCreateWithoutOrganizerTransactionsInput = {
    name: string
    email: string
    password: string
    role: $Enums.Role
    referralCode?: string | null
    points?: number
    pointsExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    organizedEvents?: EventCreateNestedManyWithoutOrganizerInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    userTransactions?: TransactionCreateNestedManyWithoutUserInput
    userCoupons?: UserCouponCreateNestedManyWithoutUserInput
    userVouchers?: UserVoucherCreateNestedManyWithoutUserInput
    referredBy?: UserCreateNestedOneWithoutReferralsInput
    referrals?: UserCreateNestedManyWithoutReferredByInput
    vouchers?: VoucherCreateNestedManyWithoutOrganizerInput
  }

  export type UserUncheckedCreateWithoutOrganizerTransactionsInput = {
    id?: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    referralCode?: string | null
    referredById?: number | null
    points?: number
    pointsExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    organizedEvents?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    userTransactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    userCoupons?: UserCouponUncheckedCreateNestedManyWithoutUserInput
    userVouchers?: UserVoucherUncheckedCreateNestedManyWithoutUserInput
    referrals?: UserUncheckedCreateNestedManyWithoutReferredByInput
    vouchers?: VoucherUncheckedCreateNestedManyWithoutOrganizerInput
  }

  export type UserCreateOrConnectWithoutOrganizerTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrganizerTransactionsInput, UserUncheckedCreateWithoutOrganizerTransactionsInput>
  }

  export type TicketTypeCreateWithoutTransactionsInput = {
    name: string
    price: number
    totalSeats: number
    availableSeats: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    event: EventCreateNestedOneWithoutTicketTypesInput
  }

  export type TicketTypeUncheckedCreateWithoutTransactionsInput = {
    id?: number
    eventId: number
    name: string
    price: number
    totalSeats: number
    availableSeats: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TicketTypeCreateOrConnectWithoutTransactionsInput = {
    where: TicketTypeWhereUniqueInput
    create: XOR<TicketTypeCreateWithoutTransactionsInput, TicketTypeUncheckedCreateWithoutTransactionsInput>
  }

  export type UserCreateWithoutUserTransactionsInput = {
    name: string
    email: string
    password: string
    role: $Enums.Role
    referralCode?: string | null
    points?: number
    pointsExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    organizedEvents?: EventCreateNestedManyWithoutOrganizerInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    organizerTransactions?: TransactionCreateNestedManyWithoutOrganizerInput
    userCoupons?: UserCouponCreateNestedManyWithoutUserInput
    userVouchers?: UserVoucherCreateNestedManyWithoutUserInput
    referredBy?: UserCreateNestedOneWithoutReferralsInput
    referrals?: UserCreateNestedManyWithoutReferredByInput
    vouchers?: VoucherCreateNestedManyWithoutOrganizerInput
  }

  export type UserUncheckedCreateWithoutUserTransactionsInput = {
    id?: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    referralCode?: string | null
    referredById?: number | null
    points?: number
    pointsExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    organizedEvents?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    organizerTransactions?: TransactionUncheckedCreateNestedManyWithoutOrganizerInput
    userCoupons?: UserCouponUncheckedCreateNestedManyWithoutUserInput
    userVouchers?: UserVoucherUncheckedCreateNestedManyWithoutUserInput
    referrals?: UserUncheckedCreateNestedManyWithoutReferredByInput
    vouchers?: VoucherUncheckedCreateNestedManyWithoutOrganizerInput
  }

  export type UserCreateOrConnectWithoutUserTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserTransactionsInput, UserUncheckedCreateWithoutUserTransactionsInput>
  }

  export type VoucherCreateWithoutTransactionsInput = {
    code: string
    discountValue: number
    usageLimit: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    userVouchers?: UserVoucherCreateNestedManyWithoutVoucherInput
    event: EventCreateNestedOneWithoutVouchersInput
    organizer: UserCreateNestedOneWithoutVouchersInput
  }

  export type VoucherUncheckedCreateWithoutTransactionsInput = {
    id?: number
    organizerId: number
    code: string
    discountValue: number
    eventId: number
    usageLimit: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    userVouchers?: UserVoucherUncheckedCreateNestedManyWithoutVoucherInput
  }

  export type VoucherCreateOrConnectWithoutTransactionsInput = {
    where: VoucherWhereUniqueInput
    create: XOR<VoucherCreateWithoutTransactionsInput, VoucherUncheckedCreateWithoutTransactionsInput>
  }

  export type CouponUpsertWithoutTransactionsInput = {
    update: XOR<CouponUpdateWithoutTransactionsInput, CouponUncheckedUpdateWithoutTransactionsInput>
    create: XOR<CouponCreateWithoutTransactionsInput, CouponUncheckedCreateWithoutTransactionsInput>
    where?: CouponWhereInput
  }

  export type CouponUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: CouponWhereInput
    data: XOR<CouponUpdateWithoutTransactionsInput, CouponUncheckedUpdateWithoutTransactionsInput>
  }

  export type CouponUpdateWithoutTransactionsInput = {
    code?: StringFieldUpdateOperationsInput | string
    discountValue?: IntFieldUpdateOperationsInput | number
    usageLimit?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userCoupons?: UserCouponUpdateManyWithoutCouponNestedInput
  }

  export type CouponUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    discountValue?: IntFieldUpdateOperationsInput | number
    usageLimit?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userCoupons?: UserCouponUncheckedUpdateManyWithoutCouponNestedInput
  }

  export type EventUpsertWithoutTransactionsInput = {
    update: XOR<EventUpdateWithoutTransactionsInput, EventUncheckedUpdateWithoutTransactionsInput>
    create: XOR<EventCreateWithoutTransactionsInput, EventUncheckedCreateWithoutTransactionsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutTransactionsInput, EventUncheckedUpdateWithoutTransactionsInput>
  }

  export type EventUpdateWithoutTransactionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizer?: UserUpdateOneRequiredWithoutOrganizedEventsNestedInput
    reviews?: ReviewUpdateManyWithoutEventNestedInput
    ticketTypes?: TicketTypeUpdateManyWithoutEventNestedInput
    vouchers?: VoucherUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizerId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviews?: ReviewUncheckedUpdateManyWithoutEventNestedInput
    ticketTypes?: TicketTypeUncheckedUpdateManyWithoutEventNestedInput
    vouchers?: VoucherUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserUpsertWithoutOrganizerTransactionsInput = {
    update: XOR<UserUpdateWithoutOrganizerTransactionsInput, UserUncheckedUpdateWithoutOrganizerTransactionsInput>
    create: XOR<UserCreateWithoutOrganizerTransactionsInput, UserUncheckedCreateWithoutOrganizerTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrganizerTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrganizerTransactionsInput, UserUncheckedUpdateWithoutOrganizerTransactionsInput>
  }

  export type UserUpdateWithoutOrganizerTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    pointsExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizedEvents?: EventUpdateManyWithoutOrganizerNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    userTransactions?: TransactionUpdateManyWithoutUserNestedInput
    userCoupons?: UserCouponUpdateManyWithoutUserNestedInput
    userVouchers?: UserVoucherUpdateManyWithoutUserNestedInput
    referredBy?: UserUpdateOneWithoutReferralsNestedInput
    referrals?: UserUpdateManyWithoutReferredByNestedInput
    vouchers?: VoucherUpdateManyWithoutOrganizerNestedInput
  }

  export type UserUncheckedUpdateWithoutOrganizerTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredById?: NullableIntFieldUpdateOperationsInput | number | null
    points?: IntFieldUpdateOperationsInput | number
    pointsExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizedEvents?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    userTransactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    userCoupons?: UserCouponUncheckedUpdateManyWithoutUserNestedInput
    userVouchers?: UserVoucherUncheckedUpdateManyWithoutUserNestedInput
    referrals?: UserUncheckedUpdateManyWithoutReferredByNestedInput
    vouchers?: VoucherUncheckedUpdateManyWithoutOrganizerNestedInput
  }

  export type TicketTypeUpsertWithoutTransactionsInput = {
    update: XOR<TicketTypeUpdateWithoutTransactionsInput, TicketTypeUncheckedUpdateWithoutTransactionsInput>
    create: XOR<TicketTypeCreateWithoutTransactionsInput, TicketTypeUncheckedCreateWithoutTransactionsInput>
    where?: TicketTypeWhereInput
  }

  export type TicketTypeUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: TicketTypeWhereInput
    data: XOR<TicketTypeUpdateWithoutTransactionsInput, TicketTypeUncheckedUpdateWithoutTransactionsInput>
  }

  export type TicketTypeUpdateWithoutTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event?: EventUpdateOneRequiredWithoutTicketTypesNestedInput
  }

  export type TicketTypeUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpsertWithoutUserTransactionsInput = {
    update: XOR<UserUpdateWithoutUserTransactionsInput, UserUncheckedUpdateWithoutUserTransactionsInput>
    create: XOR<UserCreateWithoutUserTransactionsInput, UserUncheckedCreateWithoutUserTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserTransactionsInput, UserUncheckedUpdateWithoutUserTransactionsInput>
  }

  export type UserUpdateWithoutUserTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    pointsExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizedEvents?: EventUpdateManyWithoutOrganizerNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    organizerTransactions?: TransactionUpdateManyWithoutOrganizerNestedInput
    userCoupons?: UserCouponUpdateManyWithoutUserNestedInput
    userVouchers?: UserVoucherUpdateManyWithoutUserNestedInput
    referredBy?: UserUpdateOneWithoutReferralsNestedInput
    referrals?: UserUpdateManyWithoutReferredByNestedInput
    vouchers?: VoucherUpdateManyWithoutOrganizerNestedInput
  }

  export type UserUncheckedUpdateWithoutUserTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredById?: NullableIntFieldUpdateOperationsInput | number | null
    points?: IntFieldUpdateOperationsInput | number
    pointsExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizedEvents?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    organizerTransactions?: TransactionUncheckedUpdateManyWithoutOrganizerNestedInput
    userCoupons?: UserCouponUncheckedUpdateManyWithoutUserNestedInput
    userVouchers?: UserVoucherUncheckedUpdateManyWithoutUserNestedInput
    referrals?: UserUncheckedUpdateManyWithoutReferredByNestedInput
    vouchers?: VoucherUncheckedUpdateManyWithoutOrganizerNestedInput
  }

  export type VoucherUpsertWithoutTransactionsInput = {
    update: XOR<VoucherUpdateWithoutTransactionsInput, VoucherUncheckedUpdateWithoutTransactionsInput>
    create: XOR<VoucherCreateWithoutTransactionsInput, VoucherUncheckedCreateWithoutTransactionsInput>
    where?: VoucherWhereInput
  }

  export type VoucherUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: VoucherWhereInput
    data: XOR<VoucherUpdateWithoutTransactionsInput, VoucherUncheckedUpdateWithoutTransactionsInput>
  }

  export type VoucherUpdateWithoutTransactionsInput = {
    code?: StringFieldUpdateOperationsInput | string
    discountValue?: IntFieldUpdateOperationsInput | number
    usageLimit?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userVouchers?: UserVoucherUpdateManyWithoutVoucherNestedInput
    event?: EventUpdateOneRequiredWithoutVouchersNestedInput
    organizer?: UserUpdateOneRequiredWithoutVouchersNestedInput
  }

  export type VoucherUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizerId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    discountValue?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    usageLimit?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userVouchers?: UserVoucherUncheckedUpdateManyWithoutVoucherNestedInput
  }

  export type TransactionCreateWithoutVoucherInput = {
    status: $Enums.TransactionStatus
    quantity: number
    unitPrice: number
    totalAmount: number
    pointsUsed?: number
    finalAmount: number
    paymentProof?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    coupon?: CouponCreateNestedOneWithoutTransactionsInput
    event: EventCreateNestedOneWithoutTransactionsInput
    organizer: UserCreateNestedOneWithoutOrganizerTransactionsInput
    ticketType: TicketTypeCreateNestedOneWithoutTransactionsInput
    user: UserCreateNestedOneWithoutUserTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutVoucherInput = {
    id?: number
    userId: number
    organizerId: number
    eventId: number
    status: $Enums.TransactionStatus
    ticketTypeId: number
    quantity: number
    unitPrice: number
    totalAmount: number
    pointsUsed?: number
    couponId?: number | null
    finalAmount: number
    paymentProof?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TransactionCreateOrConnectWithoutVoucherInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutVoucherInput, TransactionUncheckedCreateWithoutVoucherInput>
  }

  export type TransactionCreateManyVoucherInputEnvelope = {
    data: TransactionCreateManyVoucherInput | TransactionCreateManyVoucherInput[]
    skipDuplicates?: boolean
  }

  export type UserVoucherCreateWithoutVoucherInput = {
    status: $Enums.VoucherStatus
    usedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserVouchersInput
  }

  export type UserVoucherUncheckedCreateWithoutVoucherInput = {
    id?: number
    userId: number
    status: $Enums.VoucherStatus
    usedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type UserVoucherCreateOrConnectWithoutVoucherInput = {
    where: UserVoucherWhereUniqueInput
    create: XOR<UserVoucherCreateWithoutVoucherInput, UserVoucherUncheckedCreateWithoutVoucherInput>
  }

  export type UserVoucherCreateManyVoucherInputEnvelope = {
    data: UserVoucherCreateManyVoucherInput | UserVoucherCreateManyVoucherInput[]
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutVouchersInput = {
    title: string
    slug: string
    description: string
    category: string
    location: string
    startDate: Date | string
    endDate: Date | string
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    organizer: UserCreateNestedOneWithoutOrganizedEventsInput
    reviews?: ReviewCreateNestedManyWithoutEventInput
    ticketTypes?: TicketTypeCreateNestedManyWithoutEventInput
    transactions?: TransactionCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutVouchersInput = {
    id?: number
    organizerId: number
    title: string
    slug: string
    description: string
    category: string
    location: string
    startDate: Date | string
    endDate: Date | string
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutEventInput
    ticketTypes?: TicketTypeUncheckedCreateNestedManyWithoutEventInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutVouchersInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutVouchersInput, EventUncheckedCreateWithoutVouchersInput>
  }

  export type UserCreateWithoutVouchersInput = {
    name: string
    email: string
    password: string
    role: $Enums.Role
    referralCode?: string | null
    points?: number
    pointsExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    organizedEvents?: EventCreateNestedManyWithoutOrganizerInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    organizerTransactions?: TransactionCreateNestedManyWithoutOrganizerInput
    userTransactions?: TransactionCreateNestedManyWithoutUserInput
    userCoupons?: UserCouponCreateNestedManyWithoutUserInput
    userVouchers?: UserVoucherCreateNestedManyWithoutUserInput
    referredBy?: UserCreateNestedOneWithoutReferralsInput
    referrals?: UserCreateNestedManyWithoutReferredByInput
  }

  export type UserUncheckedCreateWithoutVouchersInput = {
    id?: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    referralCode?: string | null
    referredById?: number | null
    points?: number
    pointsExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    organizedEvents?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    organizerTransactions?: TransactionUncheckedCreateNestedManyWithoutOrganizerInput
    userTransactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    userCoupons?: UserCouponUncheckedCreateNestedManyWithoutUserInput
    userVouchers?: UserVoucherUncheckedCreateNestedManyWithoutUserInput
    referrals?: UserUncheckedCreateNestedManyWithoutReferredByInput
  }

  export type UserCreateOrConnectWithoutVouchersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVouchersInput, UserUncheckedCreateWithoutVouchersInput>
  }

  export type TransactionUpsertWithWhereUniqueWithoutVoucherInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutVoucherInput, TransactionUncheckedUpdateWithoutVoucherInput>
    create: XOR<TransactionCreateWithoutVoucherInput, TransactionUncheckedCreateWithoutVoucherInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutVoucherInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutVoucherInput, TransactionUncheckedUpdateWithoutVoucherInput>
  }

  export type TransactionUpdateManyWithWhereWithoutVoucherInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutVoucherInput>
  }

  export type UserVoucherUpsertWithWhereUniqueWithoutVoucherInput = {
    where: UserVoucherWhereUniqueInput
    update: XOR<UserVoucherUpdateWithoutVoucherInput, UserVoucherUncheckedUpdateWithoutVoucherInput>
    create: XOR<UserVoucherCreateWithoutVoucherInput, UserVoucherUncheckedCreateWithoutVoucherInput>
  }

  export type UserVoucherUpdateWithWhereUniqueWithoutVoucherInput = {
    where: UserVoucherWhereUniqueInput
    data: XOR<UserVoucherUpdateWithoutVoucherInput, UserVoucherUncheckedUpdateWithoutVoucherInput>
  }

  export type UserVoucherUpdateManyWithWhereWithoutVoucherInput = {
    where: UserVoucherScalarWhereInput
    data: XOR<UserVoucherUpdateManyMutationInput, UserVoucherUncheckedUpdateManyWithoutVoucherInput>
  }

  export type EventUpsertWithoutVouchersInput = {
    update: XOR<EventUpdateWithoutVouchersInput, EventUncheckedUpdateWithoutVouchersInput>
    create: XOR<EventCreateWithoutVouchersInput, EventUncheckedCreateWithoutVouchersInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutVouchersInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutVouchersInput, EventUncheckedUpdateWithoutVouchersInput>
  }

  export type EventUpdateWithoutVouchersInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizer?: UserUpdateOneRequiredWithoutOrganizedEventsNestedInput
    reviews?: ReviewUpdateManyWithoutEventNestedInput
    ticketTypes?: TicketTypeUpdateManyWithoutEventNestedInput
    transactions?: TransactionUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutVouchersInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizerId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviews?: ReviewUncheckedUpdateManyWithoutEventNestedInput
    ticketTypes?: TicketTypeUncheckedUpdateManyWithoutEventNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserUpsertWithoutVouchersInput = {
    update: XOR<UserUpdateWithoutVouchersInput, UserUncheckedUpdateWithoutVouchersInput>
    create: XOR<UserCreateWithoutVouchersInput, UserUncheckedCreateWithoutVouchersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVouchersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVouchersInput, UserUncheckedUpdateWithoutVouchersInput>
  }

  export type UserUpdateWithoutVouchersInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    pointsExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizedEvents?: EventUpdateManyWithoutOrganizerNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    organizerTransactions?: TransactionUpdateManyWithoutOrganizerNestedInput
    userTransactions?: TransactionUpdateManyWithoutUserNestedInput
    userCoupons?: UserCouponUpdateManyWithoutUserNestedInput
    userVouchers?: UserVoucherUpdateManyWithoutUserNestedInput
    referredBy?: UserUpdateOneWithoutReferralsNestedInput
    referrals?: UserUpdateManyWithoutReferredByNestedInput
  }

  export type UserUncheckedUpdateWithoutVouchersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredById?: NullableIntFieldUpdateOperationsInput | number | null
    points?: IntFieldUpdateOperationsInput | number
    pointsExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizedEvents?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    organizerTransactions?: TransactionUncheckedUpdateManyWithoutOrganizerNestedInput
    userTransactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    userCoupons?: UserCouponUncheckedUpdateManyWithoutUserNestedInput
    userVouchers?: UserVoucherUncheckedUpdateManyWithoutUserNestedInput
    referrals?: UserUncheckedUpdateManyWithoutReferredByNestedInput
  }

  export type TransactionCreateWithoutCouponInput = {
    status: $Enums.TransactionStatus
    quantity: number
    unitPrice: number
    totalAmount: number
    pointsUsed?: number
    finalAmount: number
    paymentProof?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    event: EventCreateNestedOneWithoutTransactionsInput
    organizer: UserCreateNestedOneWithoutOrganizerTransactionsInput
    ticketType: TicketTypeCreateNestedOneWithoutTransactionsInput
    user: UserCreateNestedOneWithoutUserTransactionsInput
    voucher?: VoucherCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutCouponInput = {
    id?: number
    userId: number
    organizerId: number
    eventId: number
    status: $Enums.TransactionStatus
    ticketTypeId: number
    quantity: number
    unitPrice: number
    totalAmount: number
    pointsUsed?: number
    voucherId?: number | null
    finalAmount: number
    paymentProof?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TransactionCreateOrConnectWithoutCouponInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutCouponInput, TransactionUncheckedCreateWithoutCouponInput>
  }

  export type TransactionCreateManyCouponInputEnvelope = {
    data: TransactionCreateManyCouponInput | TransactionCreateManyCouponInput[]
    skipDuplicates?: boolean
  }

  export type UserCouponCreateWithoutCouponInput = {
    status: $Enums.VoucherStatus
    usedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserCouponsInput
  }

  export type UserCouponUncheckedCreateWithoutCouponInput = {
    id?: number
    userId: number
    status: $Enums.VoucherStatus
    usedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type UserCouponCreateOrConnectWithoutCouponInput = {
    where: UserCouponWhereUniqueInput
    create: XOR<UserCouponCreateWithoutCouponInput, UserCouponUncheckedCreateWithoutCouponInput>
  }

  export type UserCouponCreateManyCouponInputEnvelope = {
    data: UserCouponCreateManyCouponInput | UserCouponCreateManyCouponInput[]
    skipDuplicates?: boolean
  }

  export type TransactionUpsertWithWhereUniqueWithoutCouponInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutCouponInput, TransactionUncheckedUpdateWithoutCouponInput>
    create: XOR<TransactionCreateWithoutCouponInput, TransactionUncheckedCreateWithoutCouponInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutCouponInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutCouponInput, TransactionUncheckedUpdateWithoutCouponInput>
  }

  export type TransactionUpdateManyWithWhereWithoutCouponInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutCouponInput>
  }

  export type UserCouponUpsertWithWhereUniqueWithoutCouponInput = {
    where: UserCouponWhereUniqueInput
    update: XOR<UserCouponUpdateWithoutCouponInput, UserCouponUncheckedUpdateWithoutCouponInput>
    create: XOR<UserCouponCreateWithoutCouponInput, UserCouponUncheckedCreateWithoutCouponInput>
  }

  export type UserCouponUpdateWithWhereUniqueWithoutCouponInput = {
    where: UserCouponWhereUniqueInput
    data: XOR<UserCouponUpdateWithoutCouponInput, UserCouponUncheckedUpdateWithoutCouponInput>
  }

  export type UserCouponUpdateManyWithWhereWithoutCouponInput = {
    where: UserCouponScalarWhereInput
    data: XOR<UserCouponUpdateManyMutationInput, UserCouponUncheckedUpdateManyWithoutCouponInput>
  }

  export type UserCreateWithoutUserVouchersInput = {
    name: string
    email: string
    password: string
    role: $Enums.Role
    referralCode?: string | null
    points?: number
    pointsExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    organizedEvents?: EventCreateNestedManyWithoutOrganizerInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    organizerTransactions?: TransactionCreateNestedManyWithoutOrganizerInput
    userTransactions?: TransactionCreateNestedManyWithoutUserInput
    userCoupons?: UserCouponCreateNestedManyWithoutUserInput
    referredBy?: UserCreateNestedOneWithoutReferralsInput
    referrals?: UserCreateNestedManyWithoutReferredByInput
    vouchers?: VoucherCreateNestedManyWithoutOrganizerInput
  }

  export type UserUncheckedCreateWithoutUserVouchersInput = {
    id?: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    referralCode?: string | null
    referredById?: number | null
    points?: number
    pointsExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    organizedEvents?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    organizerTransactions?: TransactionUncheckedCreateNestedManyWithoutOrganizerInput
    userTransactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    userCoupons?: UserCouponUncheckedCreateNestedManyWithoutUserInput
    referrals?: UserUncheckedCreateNestedManyWithoutReferredByInput
    vouchers?: VoucherUncheckedCreateNestedManyWithoutOrganizerInput
  }

  export type UserCreateOrConnectWithoutUserVouchersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserVouchersInput, UserUncheckedCreateWithoutUserVouchersInput>
  }

  export type VoucherCreateWithoutUserVouchersInput = {
    code: string
    discountValue: number
    usageLimit: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    transactions?: TransactionCreateNestedManyWithoutVoucherInput
    event: EventCreateNestedOneWithoutVouchersInput
    organizer: UserCreateNestedOneWithoutVouchersInput
  }

  export type VoucherUncheckedCreateWithoutUserVouchersInput = {
    id?: number
    organizerId: number
    code: string
    discountValue: number
    eventId: number
    usageLimit: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutVoucherInput
  }

  export type VoucherCreateOrConnectWithoutUserVouchersInput = {
    where: VoucherWhereUniqueInput
    create: XOR<VoucherCreateWithoutUserVouchersInput, VoucherUncheckedCreateWithoutUserVouchersInput>
  }

  export type UserUpsertWithoutUserVouchersInput = {
    update: XOR<UserUpdateWithoutUserVouchersInput, UserUncheckedUpdateWithoutUserVouchersInput>
    create: XOR<UserCreateWithoutUserVouchersInput, UserUncheckedCreateWithoutUserVouchersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserVouchersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserVouchersInput, UserUncheckedUpdateWithoutUserVouchersInput>
  }

  export type UserUpdateWithoutUserVouchersInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    pointsExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizedEvents?: EventUpdateManyWithoutOrganizerNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    organizerTransactions?: TransactionUpdateManyWithoutOrganizerNestedInput
    userTransactions?: TransactionUpdateManyWithoutUserNestedInput
    userCoupons?: UserCouponUpdateManyWithoutUserNestedInput
    referredBy?: UserUpdateOneWithoutReferralsNestedInput
    referrals?: UserUpdateManyWithoutReferredByNestedInput
    vouchers?: VoucherUpdateManyWithoutOrganizerNestedInput
  }

  export type UserUncheckedUpdateWithoutUserVouchersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredById?: NullableIntFieldUpdateOperationsInput | number | null
    points?: IntFieldUpdateOperationsInput | number
    pointsExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizedEvents?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    organizerTransactions?: TransactionUncheckedUpdateManyWithoutOrganizerNestedInput
    userTransactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    userCoupons?: UserCouponUncheckedUpdateManyWithoutUserNestedInput
    referrals?: UserUncheckedUpdateManyWithoutReferredByNestedInput
    vouchers?: VoucherUncheckedUpdateManyWithoutOrganizerNestedInput
  }

  export type VoucherUpsertWithoutUserVouchersInput = {
    update: XOR<VoucherUpdateWithoutUserVouchersInput, VoucherUncheckedUpdateWithoutUserVouchersInput>
    create: XOR<VoucherCreateWithoutUserVouchersInput, VoucherUncheckedCreateWithoutUserVouchersInput>
    where?: VoucherWhereInput
  }

  export type VoucherUpdateToOneWithWhereWithoutUserVouchersInput = {
    where?: VoucherWhereInput
    data: XOR<VoucherUpdateWithoutUserVouchersInput, VoucherUncheckedUpdateWithoutUserVouchersInput>
  }

  export type VoucherUpdateWithoutUserVouchersInput = {
    code?: StringFieldUpdateOperationsInput | string
    discountValue?: IntFieldUpdateOperationsInput | number
    usageLimit?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUpdateManyWithoutVoucherNestedInput
    event?: EventUpdateOneRequiredWithoutVouchersNestedInput
    organizer?: UserUpdateOneRequiredWithoutVouchersNestedInput
  }

  export type VoucherUncheckedUpdateWithoutUserVouchersInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizerId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    discountValue?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    usageLimit?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUncheckedUpdateManyWithoutVoucherNestedInput
  }

  export type CouponCreateWithoutUserCouponsInput = {
    code: string
    discountValue: number
    usageLimit: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    transactions?: TransactionCreateNestedManyWithoutCouponInput
  }

  export type CouponUncheckedCreateWithoutUserCouponsInput = {
    id?: number
    code: string
    discountValue: number
    usageLimit: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutCouponInput
  }

  export type CouponCreateOrConnectWithoutUserCouponsInput = {
    where: CouponWhereUniqueInput
    create: XOR<CouponCreateWithoutUserCouponsInput, CouponUncheckedCreateWithoutUserCouponsInput>
  }

  export type UserCreateWithoutUserCouponsInput = {
    name: string
    email: string
    password: string
    role: $Enums.Role
    referralCode?: string | null
    points?: number
    pointsExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    organizedEvents?: EventCreateNestedManyWithoutOrganizerInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    organizerTransactions?: TransactionCreateNestedManyWithoutOrganizerInput
    userTransactions?: TransactionCreateNestedManyWithoutUserInput
    userVouchers?: UserVoucherCreateNestedManyWithoutUserInput
    referredBy?: UserCreateNestedOneWithoutReferralsInput
    referrals?: UserCreateNestedManyWithoutReferredByInput
    vouchers?: VoucherCreateNestedManyWithoutOrganizerInput
  }

  export type UserUncheckedCreateWithoutUserCouponsInput = {
    id?: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    referralCode?: string | null
    referredById?: number | null
    points?: number
    pointsExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    organizedEvents?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    organizerTransactions?: TransactionUncheckedCreateNestedManyWithoutOrganizerInput
    userTransactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    userVouchers?: UserVoucherUncheckedCreateNestedManyWithoutUserInput
    referrals?: UserUncheckedCreateNestedManyWithoutReferredByInput
    vouchers?: VoucherUncheckedCreateNestedManyWithoutOrganizerInput
  }

  export type UserCreateOrConnectWithoutUserCouponsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserCouponsInput, UserUncheckedCreateWithoutUserCouponsInput>
  }

  export type CouponUpsertWithoutUserCouponsInput = {
    update: XOR<CouponUpdateWithoutUserCouponsInput, CouponUncheckedUpdateWithoutUserCouponsInput>
    create: XOR<CouponCreateWithoutUserCouponsInput, CouponUncheckedCreateWithoutUserCouponsInput>
    where?: CouponWhereInput
  }

  export type CouponUpdateToOneWithWhereWithoutUserCouponsInput = {
    where?: CouponWhereInput
    data: XOR<CouponUpdateWithoutUserCouponsInput, CouponUncheckedUpdateWithoutUserCouponsInput>
  }

  export type CouponUpdateWithoutUserCouponsInput = {
    code?: StringFieldUpdateOperationsInput | string
    discountValue?: IntFieldUpdateOperationsInput | number
    usageLimit?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUpdateManyWithoutCouponNestedInput
  }

  export type CouponUncheckedUpdateWithoutUserCouponsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    discountValue?: IntFieldUpdateOperationsInput | number
    usageLimit?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUncheckedUpdateManyWithoutCouponNestedInput
  }

  export type UserUpsertWithoutUserCouponsInput = {
    update: XOR<UserUpdateWithoutUserCouponsInput, UserUncheckedUpdateWithoutUserCouponsInput>
    create: XOR<UserCreateWithoutUserCouponsInput, UserUncheckedCreateWithoutUserCouponsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserCouponsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserCouponsInput, UserUncheckedUpdateWithoutUserCouponsInput>
  }

  export type UserUpdateWithoutUserCouponsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    pointsExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizedEvents?: EventUpdateManyWithoutOrganizerNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    organizerTransactions?: TransactionUpdateManyWithoutOrganizerNestedInput
    userTransactions?: TransactionUpdateManyWithoutUserNestedInput
    userVouchers?: UserVoucherUpdateManyWithoutUserNestedInput
    referredBy?: UserUpdateOneWithoutReferralsNestedInput
    referrals?: UserUpdateManyWithoutReferredByNestedInput
    vouchers?: VoucherUpdateManyWithoutOrganizerNestedInput
  }

  export type UserUncheckedUpdateWithoutUserCouponsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredById?: NullableIntFieldUpdateOperationsInput | number | null
    points?: IntFieldUpdateOperationsInput | number
    pointsExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizedEvents?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    organizerTransactions?: TransactionUncheckedUpdateManyWithoutOrganizerNestedInput
    userTransactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    userVouchers?: UserVoucherUncheckedUpdateManyWithoutUserNestedInput
    referrals?: UserUncheckedUpdateManyWithoutReferredByNestedInput
    vouchers?: VoucherUncheckedUpdateManyWithoutOrganizerNestedInput
  }

  export type EventCreateManyOrganizerInput = {
    id?: number
    title: string
    slug: string
    description: string
    category: string
    location: string
    startDate: Date | string
    endDate: Date | string
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ReviewCreateManyUserInput = {
    id?: number
    eventId: number
    rating: number
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateManyOrganizerInput = {
    id?: number
    userId: number
    eventId: number
    status: $Enums.TransactionStatus
    ticketTypeId: number
    quantity: number
    unitPrice: number
    totalAmount: number
    pointsUsed?: number
    couponId?: number | null
    voucherId?: number | null
    finalAmount: number
    paymentProof?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TransactionCreateManyUserInput = {
    id?: number
    organizerId: number
    eventId: number
    status: $Enums.TransactionStatus
    ticketTypeId: number
    quantity: number
    unitPrice: number
    totalAmount: number
    pointsUsed?: number
    couponId?: number | null
    voucherId?: number | null
    finalAmount: number
    paymentProof?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserCouponCreateManyUserInput = {
    id?: number
    couponId: number
    status: $Enums.VoucherStatus
    usedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type UserVoucherCreateManyUserInput = {
    id?: number
    voucherId: number
    status: $Enums.VoucherStatus
    usedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type UserCreateManyReferredByInput = {
    id?: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    referralCode?: string | null
    points?: number
    pointsExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type VoucherCreateManyOrganizerInput = {
    id?: number
    code: string
    discountValue: number
    eventId: number
    usageLimit: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type EventUpdateWithoutOrganizerInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviews?: ReviewUpdateManyWithoutEventNestedInput
    ticketTypes?: TicketTypeUpdateManyWithoutEventNestedInput
    transactions?: TransactionUpdateManyWithoutEventNestedInput
    vouchers?: VoucherUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutOrganizerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviews?: ReviewUncheckedUpdateManyWithoutEventNestedInput
    ticketTypes?: TicketTypeUncheckedUpdateManyWithoutEventNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutEventNestedInput
    vouchers?: VoucherUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutOrganizerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewUpdateWithoutUserInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutOrganizerInput = {
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    totalAmount?: IntFieldUpdateOperationsInput | number
    pointsUsed?: IntFieldUpdateOperationsInput | number
    finalAmount?: IntFieldUpdateOperationsInput | number
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coupon?: CouponUpdateOneWithoutTransactionsNestedInput
    event?: EventUpdateOneRequiredWithoutTransactionsNestedInput
    ticketType?: TicketTypeUpdateOneRequiredWithoutTransactionsNestedInput
    user?: UserUpdateOneRequiredWithoutUserTransactionsNestedInput
    voucher?: VoucherUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutOrganizerInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    ticketTypeId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    totalAmount?: IntFieldUpdateOperationsInput | number
    pointsUsed?: IntFieldUpdateOperationsInput | number
    couponId?: NullableIntFieldUpdateOperationsInput | number | null
    voucherId?: NullableIntFieldUpdateOperationsInput | number | null
    finalAmount?: IntFieldUpdateOperationsInput | number
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionUncheckedUpdateManyWithoutOrganizerInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    ticketTypeId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    totalAmount?: IntFieldUpdateOperationsInput | number
    pointsUsed?: IntFieldUpdateOperationsInput | number
    couponId?: NullableIntFieldUpdateOperationsInput | number | null
    voucherId?: NullableIntFieldUpdateOperationsInput | number | null
    finalAmount?: IntFieldUpdateOperationsInput | number
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionUpdateWithoutUserInput = {
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    totalAmount?: IntFieldUpdateOperationsInput | number
    pointsUsed?: IntFieldUpdateOperationsInput | number
    finalAmount?: IntFieldUpdateOperationsInput | number
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coupon?: CouponUpdateOneWithoutTransactionsNestedInput
    event?: EventUpdateOneRequiredWithoutTransactionsNestedInput
    organizer?: UserUpdateOneRequiredWithoutOrganizerTransactionsNestedInput
    ticketType?: TicketTypeUpdateOneRequiredWithoutTransactionsNestedInput
    voucher?: VoucherUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizerId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    ticketTypeId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    totalAmount?: IntFieldUpdateOperationsInput | number
    pointsUsed?: IntFieldUpdateOperationsInput | number
    couponId?: NullableIntFieldUpdateOperationsInput | number | null
    voucherId?: NullableIntFieldUpdateOperationsInput | number | null
    finalAmount?: IntFieldUpdateOperationsInput | number
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizerId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    ticketTypeId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    totalAmount?: IntFieldUpdateOperationsInput | number
    pointsUsed?: IntFieldUpdateOperationsInput | number
    couponId?: NullableIntFieldUpdateOperationsInput | number | null
    voucherId?: NullableIntFieldUpdateOperationsInput | number | null
    finalAmount?: IntFieldUpdateOperationsInput | number
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCouponUpdateWithoutUserInput = {
    status?: EnumVoucherStatusFieldUpdateOperationsInput | $Enums.VoucherStatus
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coupon?: CouponUpdateOneRequiredWithoutUserCouponsNestedInput
  }

  export type UserCouponUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    couponId?: IntFieldUpdateOperationsInput | number
    status?: EnumVoucherStatusFieldUpdateOperationsInput | $Enums.VoucherStatus
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCouponUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    couponId?: IntFieldUpdateOperationsInput | number
    status?: EnumVoucherStatusFieldUpdateOperationsInput | $Enums.VoucherStatus
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVoucherUpdateWithoutUserInput = {
    status?: EnumVoucherStatusFieldUpdateOperationsInput | $Enums.VoucherStatus
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voucher?: VoucherUpdateOneRequiredWithoutUserVouchersNestedInput
  }

  export type UserVoucherUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    voucherId?: IntFieldUpdateOperationsInput | number
    status?: EnumVoucherStatusFieldUpdateOperationsInput | $Enums.VoucherStatus
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVoucherUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    voucherId?: IntFieldUpdateOperationsInput | number
    status?: EnumVoucherStatusFieldUpdateOperationsInput | $Enums.VoucherStatus
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutReferredByInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    pointsExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizedEvents?: EventUpdateManyWithoutOrganizerNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    organizerTransactions?: TransactionUpdateManyWithoutOrganizerNestedInput
    userTransactions?: TransactionUpdateManyWithoutUserNestedInput
    userCoupons?: UserCouponUpdateManyWithoutUserNestedInput
    userVouchers?: UserVoucherUpdateManyWithoutUserNestedInput
    referrals?: UserUpdateManyWithoutReferredByNestedInput
    vouchers?: VoucherUpdateManyWithoutOrganizerNestedInput
  }

  export type UserUncheckedUpdateWithoutReferredByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    pointsExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizedEvents?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    organizerTransactions?: TransactionUncheckedUpdateManyWithoutOrganizerNestedInput
    userTransactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    userCoupons?: UserCouponUncheckedUpdateManyWithoutUserNestedInput
    userVouchers?: UserVoucherUncheckedUpdateManyWithoutUserNestedInput
    referrals?: UserUncheckedUpdateManyWithoutReferredByNestedInput
    vouchers?: VoucherUncheckedUpdateManyWithoutOrganizerNestedInput
  }

  export type UserUncheckedUpdateManyWithoutReferredByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    pointsExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VoucherUpdateWithoutOrganizerInput = {
    code?: StringFieldUpdateOperationsInput | string
    discountValue?: IntFieldUpdateOperationsInput | number
    usageLimit?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUpdateManyWithoutVoucherNestedInput
    userVouchers?: UserVoucherUpdateManyWithoutVoucherNestedInput
    event?: EventUpdateOneRequiredWithoutVouchersNestedInput
  }

  export type VoucherUncheckedUpdateWithoutOrganizerInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    discountValue?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    usageLimit?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUncheckedUpdateManyWithoutVoucherNestedInput
    userVouchers?: UserVoucherUncheckedUpdateManyWithoutVoucherNestedInput
  }

  export type VoucherUncheckedUpdateManyWithoutOrganizerInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    discountValue?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    usageLimit?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewCreateManyEventInput = {
    id?: number
    userId: number
    rating: number
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketTypeCreateManyEventInput = {
    id?: number
    name: string
    price: number
    totalSeats: number
    availableSeats: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TransactionCreateManyEventInput = {
    id?: number
    userId: number
    organizerId: number
    status: $Enums.TransactionStatus
    ticketTypeId: number
    quantity: number
    unitPrice: number
    totalAmount: number
    pointsUsed?: number
    couponId?: number | null
    voucherId?: number | null
    finalAmount: number
    paymentProof?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type VoucherCreateManyEventInput = {
    id?: number
    organizerId: number
    code: string
    discountValue: number
    usageLimit: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ReviewUpdateWithoutEventInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketTypeUpdateWithoutEventInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUpdateManyWithoutTicketTypeNestedInput
  }

  export type TicketTypeUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUncheckedUpdateManyWithoutTicketTypeNestedInput
  }

  export type TicketTypeUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    totalSeats?: IntFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionUpdateWithoutEventInput = {
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    totalAmount?: IntFieldUpdateOperationsInput | number
    pointsUsed?: IntFieldUpdateOperationsInput | number
    finalAmount?: IntFieldUpdateOperationsInput | number
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coupon?: CouponUpdateOneWithoutTransactionsNestedInput
    organizer?: UserUpdateOneRequiredWithoutOrganizerTransactionsNestedInput
    ticketType?: TicketTypeUpdateOneRequiredWithoutTransactionsNestedInput
    user?: UserUpdateOneRequiredWithoutUserTransactionsNestedInput
    voucher?: VoucherUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    organizerId?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    ticketTypeId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    totalAmount?: IntFieldUpdateOperationsInput | number
    pointsUsed?: IntFieldUpdateOperationsInput | number
    couponId?: NullableIntFieldUpdateOperationsInput | number | null
    voucherId?: NullableIntFieldUpdateOperationsInput | number | null
    finalAmount?: IntFieldUpdateOperationsInput | number
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    organizerId?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    ticketTypeId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    totalAmount?: IntFieldUpdateOperationsInput | number
    pointsUsed?: IntFieldUpdateOperationsInput | number
    couponId?: NullableIntFieldUpdateOperationsInput | number | null
    voucherId?: NullableIntFieldUpdateOperationsInput | number | null
    finalAmount?: IntFieldUpdateOperationsInput | number
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VoucherUpdateWithoutEventInput = {
    code?: StringFieldUpdateOperationsInput | string
    discountValue?: IntFieldUpdateOperationsInput | number
    usageLimit?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUpdateManyWithoutVoucherNestedInput
    userVouchers?: UserVoucherUpdateManyWithoutVoucherNestedInput
    organizer?: UserUpdateOneRequiredWithoutVouchersNestedInput
  }

  export type VoucherUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizerId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    discountValue?: IntFieldUpdateOperationsInput | number
    usageLimit?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUncheckedUpdateManyWithoutVoucherNestedInput
    userVouchers?: UserVoucherUncheckedUpdateManyWithoutVoucherNestedInput
  }

  export type VoucherUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizerId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    discountValue?: IntFieldUpdateOperationsInput | number
    usageLimit?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionCreateManyTicketTypeInput = {
    id?: number
    userId: number
    organizerId: number
    eventId: number
    status: $Enums.TransactionStatus
    quantity: number
    unitPrice: number
    totalAmount: number
    pointsUsed?: number
    couponId?: number | null
    voucherId?: number | null
    finalAmount: number
    paymentProof?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TransactionUpdateWithoutTicketTypeInput = {
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    totalAmount?: IntFieldUpdateOperationsInput | number
    pointsUsed?: IntFieldUpdateOperationsInput | number
    finalAmount?: IntFieldUpdateOperationsInput | number
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coupon?: CouponUpdateOneWithoutTransactionsNestedInput
    event?: EventUpdateOneRequiredWithoutTransactionsNestedInput
    organizer?: UserUpdateOneRequiredWithoutOrganizerTransactionsNestedInput
    user?: UserUpdateOneRequiredWithoutUserTransactionsNestedInput
    voucher?: VoucherUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutTicketTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    organizerId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    totalAmount?: IntFieldUpdateOperationsInput | number
    pointsUsed?: IntFieldUpdateOperationsInput | number
    couponId?: NullableIntFieldUpdateOperationsInput | number | null
    voucherId?: NullableIntFieldUpdateOperationsInput | number | null
    finalAmount?: IntFieldUpdateOperationsInput | number
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionUncheckedUpdateManyWithoutTicketTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    organizerId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    totalAmount?: IntFieldUpdateOperationsInput | number
    pointsUsed?: IntFieldUpdateOperationsInput | number
    couponId?: NullableIntFieldUpdateOperationsInput | number | null
    voucherId?: NullableIntFieldUpdateOperationsInput | number | null
    finalAmount?: IntFieldUpdateOperationsInput | number
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionCreateManyVoucherInput = {
    id?: number
    userId: number
    organizerId: number
    eventId: number
    status: $Enums.TransactionStatus
    ticketTypeId: number
    quantity: number
    unitPrice: number
    totalAmount: number
    pointsUsed?: number
    couponId?: number | null
    finalAmount: number
    paymentProof?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserVoucherCreateManyVoucherInput = {
    id?: number
    userId: number
    status: $Enums.VoucherStatus
    usedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type TransactionUpdateWithoutVoucherInput = {
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    totalAmount?: IntFieldUpdateOperationsInput | number
    pointsUsed?: IntFieldUpdateOperationsInput | number
    finalAmount?: IntFieldUpdateOperationsInput | number
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coupon?: CouponUpdateOneWithoutTransactionsNestedInput
    event?: EventUpdateOneRequiredWithoutTransactionsNestedInput
    organizer?: UserUpdateOneRequiredWithoutOrganizerTransactionsNestedInput
    ticketType?: TicketTypeUpdateOneRequiredWithoutTransactionsNestedInput
    user?: UserUpdateOneRequiredWithoutUserTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutVoucherInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    organizerId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    ticketTypeId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    totalAmount?: IntFieldUpdateOperationsInput | number
    pointsUsed?: IntFieldUpdateOperationsInput | number
    couponId?: NullableIntFieldUpdateOperationsInput | number | null
    finalAmount?: IntFieldUpdateOperationsInput | number
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionUncheckedUpdateManyWithoutVoucherInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    organizerId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    ticketTypeId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    totalAmount?: IntFieldUpdateOperationsInput | number
    pointsUsed?: IntFieldUpdateOperationsInput | number
    couponId?: NullableIntFieldUpdateOperationsInput | number | null
    finalAmount?: IntFieldUpdateOperationsInput | number
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserVoucherUpdateWithoutVoucherInput = {
    status?: EnumVoucherStatusFieldUpdateOperationsInput | $Enums.VoucherStatus
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserVouchersNestedInput
  }

  export type UserVoucherUncheckedUpdateWithoutVoucherInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumVoucherStatusFieldUpdateOperationsInput | $Enums.VoucherStatus
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVoucherUncheckedUpdateManyWithoutVoucherInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumVoucherStatusFieldUpdateOperationsInput | $Enums.VoucherStatus
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyCouponInput = {
    id?: number
    userId: number
    organizerId: number
    eventId: number
    status: $Enums.TransactionStatus
    ticketTypeId: number
    quantity: number
    unitPrice: number
    totalAmount: number
    pointsUsed?: number
    voucherId?: number | null
    finalAmount: number
    paymentProof?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserCouponCreateManyCouponInput = {
    id?: number
    userId: number
    status: $Enums.VoucherStatus
    usedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type TransactionUpdateWithoutCouponInput = {
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    totalAmount?: IntFieldUpdateOperationsInput | number
    pointsUsed?: IntFieldUpdateOperationsInput | number
    finalAmount?: IntFieldUpdateOperationsInput | number
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event?: EventUpdateOneRequiredWithoutTransactionsNestedInput
    organizer?: UserUpdateOneRequiredWithoutOrganizerTransactionsNestedInput
    ticketType?: TicketTypeUpdateOneRequiredWithoutTransactionsNestedInput
    user?: UserUpdateOneRequiredWithoutUserTransactionsNestedInput
    voucher?: VoucherUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutCouponInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    organizerId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    ticketTypeId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    totalAmount?: IntFieldUpdateOperationsInput | number
    pointsUsed?: IntFieldUpdateOperationsInput | number
    voucherId?: NullableIntFieldUpdateOperationsInput | number | null
    finalAmount?: IntFieldUpdateOperationsInput | number
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TransactionUncheckedUpdateManyWithoutCouponInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    organizerId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    ticketTypeId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    totalAmount?: IntFieldUpdateOperationsInput | number
    pointsUsed?: IntFieldUpdateOperationsInput | number
    voucherId?: NullableIntFieldUpdateOperationsInput | number | null
    finalAmount?: IntFieldUpdateOperationsInput | number
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCouponUpdateWithoutCouponInput = {
    status?: EnumVoucherStatusFieldUpdateOperationsInput | $Enums.VoucherStatus
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserCouponsNestedInput
  }

  export type UserCouponUncheckedUpdateWithoutCouponInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumVoucherStatusFieldUpdateOperationsInput | $Enums.VoucherStatus
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCouponUncheckedUpdateManyWithoutCouponInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumVoucherStatusFieldUpdateOperationsInput | $Enums.VoucherStatus
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}