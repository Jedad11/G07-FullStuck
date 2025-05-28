
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
 * Model Resident
 * 
 */
export type Resident = $Result.DefaultSelection<Prisma.$ResidentPayload>
/**
 * Model ResidentInfo
 * 
 */
export type ResidentInfo = $Result.DefaultSelection<Prisma.$ResidentInfoPayload>
/**
 * Model ResidentFacilities
 * 
 */
export type ResidentFacilities = $Result.DefaultSelection<Prisma.$ResidentFacilitiesPayload>
/**
 * Model ResidentOwner
 * 
 */
export type ResidentOwner = $Result.DefaultSelection<Prisma.$ResidentOwnerPayload>
/**
 * Model ResidentAddress
 * 
 */
export type ResidentAddress = $Result.DefaultSelection<Prisma.$ResidentAddressPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>

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
   * `prisma.resident`: Exposes CRUD operations for the **Resident** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Residents
    * const residents = await prisma.resident.findMany()
    * ```
    */
  get resident(): Prisma.ResidentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.residentInfo`: Exposes CRUD operations for the **ResidentInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResidentInfos
    * const residentInfos = await prisma.residentInfo.findMany()
    * ```
    */
  get residentInfo(): Prisma.ResidentInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.residentFacilities`: Exposes CRUD operations for the **ResidentFacilities** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResidentFacilities
    * const residentFacilities = await prisma.residentFacilities.findMany()
    * ```
    */
  get residentFacilities(): Prisma.ResidentFacilitiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.residentOwner`: Exposes CRUD operations for the **ResidentOwner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResidentOwners
    * const residentOwners = await prisma.residentOwner.findMany()
    * ```
    */
  get residentOwner(): Prisma.ResidentOwnerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.residentAddress`: Exposes CRUD operations for the **ResidentAddress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResidentAddresses
    * const residentAddresses = await prisma.residentAddress.findMany()
    * ```
    */
  get residentAddress(): Prisma.ResidentAddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Resident: 'Resident',
    ResidentInfo: 'ResidentInfo',
    ResidentFacilities: 'ResidentFacilities',
    ResidentOwner: 'ResidentOwner',
    ResidentAddress: 'ResidentAddress',
    Booking: 'Booking',
    Review: 'Review'
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
      modelProps: "user" | "resident" | "residentInfo" | "residentFacilities" | "residentOwner" | "residentAddress" | "booking" | "review"
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
      Resident: {
        payload: Prisma.$ResidentPayload<ExtArgs>
        fields: Prisma.ResidentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResidentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResidentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentPayload>
          }
          findFirst: {
            args: Prisma.ResidentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResidentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentPayload>
          }
          findMany: {
            args: Prisma.ResidentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentPayload>[]
          }
          create: {
            args: Prisma.ResidentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentPayload>
          }
          createMany: {
            args: Prisma.ResidentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResidentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentPayload>[]
          }
          delete: {
            args: Prisma.ResidentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentPayload>
          }
          update: {
            args: Prisma.ResidentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentPayload>
          }
          deleteMany: {
            args: Prisma.ResidentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResidentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResidentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentPayload>[]
          }
          upsert: {
            args: Prisma.ResidentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentPayload>
          }
          aggregate: {
            args: Prisma.ResidentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResident>
          }
          groupBy: {
            args: Prisma.ResidentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResidentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResidentCountArgs<ExtArgs>
            result: $Utils.Optional<ResidentCountAggregateOutputType> | number
          }
        }
      }
      ResidentInfo: {
        payload: Prisma.$ResidentInfoPayload<ExtArgs>
        fields: Prisma.ResidentInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResidentInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResidentInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentInfoPayload>
          }
          findFirst: {
            args: Prisma.ResidentInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResidentInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentInfoPayload>
          }
          findMany: {
            args: Prisma.ResidentInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentInfoPayload>[]
          }
          create: {
            args: Prisma.ResidentInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentInfoPayload>
          }
          createMany: {
            args: Prisma.ResidentInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResidentInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentInfoPayload>[]
          }
          delete: {
            args: Prisma.ResidentInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentInfoPayload>
          }
          update: {
            args: Prisma.ResidentInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentInfoPayload>
          }
          deleteMany: {
            args: Prisma.ResidentInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResidentInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResidentInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentInfoPayload>[]
          }
          upsert: {
            args: Prisma.ResidentInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentInfoPayload>
          }
          aggregate: {
            args: Prisma.ResidentInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResidentInfo>
          }
          groupBy: {
            args: Prisma.ResidentInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResidentInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResidentInfoCountArgs<ExtArgs>
            result: $Utils.Optional<ResidentInfoCountAggregateOutputType> | number
          }
        }
      }
      ResidentFacilities: {
        payload: Prisma.$ResidentFacilitiesPayload<ExtArgs>
        fields: Prisma.ResidentFacilitiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResidentFacilitiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentFacilitiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResidentFacilitiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentFacilitiesPayload>
          }
          findFirst: {
            args: Prisma.ResidentFacilitiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentFacilitiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResidentFacilitiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentFacilitiesPayload>
          }
          findMany: {
            args: Prisma.ResidentFacilitiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentFacilitiesPayload>[]
          }
          create: {
            args: Prisma.ResidentFacilitiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentFacilitiesPayload>
          }
          createMany: {
            args: Prisma.ResidentFacilitiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResidentFacilitiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentFacilitiesPayload>[]
          }
          delete: {
            args: Prisma.ResidentFacilitiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentFacilitiesPayload>
          }
          update: {
            args: Prisma.ResidentFacilitiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentFacilitiesPayload>
          }
          deleteMany: {
            args: Prisma.ResidentFacilitiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResidentFacilitiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResidentFacilitiesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentFacilitiesPayload>[]
          }
          upsert: {
            args: Prisma.ResidentFacilitiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentFacilitiesPayload>
          }
          aggregate: {
            args: Prisma.ResidentFacilitiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResidentFacilities>
          }
          groupBy: {
            args: Prisma.ResidentFacilitiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResidentFacilitiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResidentFacilitiesCountArgs<ExtArgs>
            result: $Utils.Optional<ResidentFacilitiesCountAggregateOutputType> | number
          }
        }
      }
      ResidentOwner: {
        payload: Prisma.$ResidentOwnerPayload<ExtArgs>
        fields: Prisma.ResidentOwnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResidentOwnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentOwnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResidentOwnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentOwnerPayload>
          }
          findFirst: {
            args: Prisma.ResidentOwnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentOwnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResidentOwnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentOwnerPayload>
          }
          findMany: {
            args: Prisma.ResidentOwnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentOwnerPayload>[]
          }
          create: {
            args: Prisma.ResidentOwnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentOwnerPayload>
          }
          createMany: {
            args: Prisma.ResidentOwnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResidentOwnerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentOwnerPayload>[]
          }
          delete: {
            args: Prisma.ResidentOwnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentOwnerPayload>
          }
          update: {
            args: Prisma.ResidentOwnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentOwnerPayload>
          }
          deleteMany: {
            args: Prisma.ResidentOwnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResidentOwnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResidentOwnerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentOwnerPayload>[]
          }
          upsert: {
            args: Prisma.ResidentOwnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentOwnerPayload>
          }
          aggregate: {
            args: Prisma.ResidentOwnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResidentOwner>
          }
          groupBy: {
            args: Prisma.ResidentOwnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResidentOwnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResidentOwnerCountArgs<ExtArgs>
            result: $Utils.Optional<ResidentOwnerCountAggregateOutputType> | number
          }
        }
      }
      ResidentAddress: {
        payload: Prisma.$ResidentAddressPayload<ExtArgs>
        fields: Prisma.ResidentAddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResidentAddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentAddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResidentAddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentAddressPayload>
          }
          findFirst: {
            args: Prisma.ResidentAddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentAddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResidentAddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentAddressPayload>
          }
          findMany: {
            args: Prisma.ResidentAddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentAddressPayload>[]
          }
          create: {
            args: Prisma.ResidentAddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentAddressPayload>
          }
          createMany: {
            args: Prisma.ResidentAddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResidentAddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentAddressPayload>[]
          }
          delete: {
            args: Prisma.ResidentAddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentAddressPayload>
          }
          update: {
            args: Prisma.ResidentAddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentAddressPayload>
          }
          deleteMany: {
            args: Prisma.ResidentAddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResidentAddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResidentAddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentAddressPayload>[]
          }
          upsert: {
            args: Prisma.ResidentAddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResidentAddressPayload>
          }
          aggregate: {
            args: Prisma.ResidentAddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResidentAddress>
          }
          groupBy: {
            args: Prisma.ResidentAddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResidentAddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResidentAddressCountArgs<ExtArgs>
            result: $Utils.Optional<ResidentAddressCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
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
    resident?: ResidentOmit
    residentInfo?: ResidentInfoOmit
    residentFacilities?: ResidentFacilitiesOmit
    residentOwner?: ResidentOwnerOmit
    residentAddress?: ResidentAddressOmit
    booking?: BookingOmit
    review?: ReviewOmit
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
    bookings: number
    reviews: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | UserCountOutputTypeCountBookingsArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
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
  export type UserCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type ResidentCountOutputType
   */

  export type ResidentCountOutputType = {
    bookings: number
    reviews: number
  }

  export type ResidentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | ResidentCountOutputTypeCountBookingsArgs
    reviews?: boolean | ResidentCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * ResidentCountOutputType without action
   */
  export type ResidentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentCountOutputType
     */
    select?: ResidentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResidentCountOutputType without action
   */
  export type ResidentCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * ResidentCountOutputType without action
   */
  export type ResidentCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
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
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    phoneNumber: string | null
    email: string | null
    password: string | null
    profilePicture: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    phoneNumber: string | null
    email: string | null
    password: string | null
    profilePicture: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    phoneNumber: number
    email: number
    password: number
    profilePicture: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phoneNumber?: true
    email?: true
    password?: true
    profilePicture?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phoneNumber?: true
    email?: true
    password?: true
    profilePicture?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phoneNumber?: true
    email?: true
    password?: true
    profilePicture?: true
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
    firstName: string
    lastName: string
    phoneNumber: string
    email: string
    password: string
    profilePicture: string | null
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
    firstName?: boolean
    lastName?: boolean
    phoneNumber?: boolean
    email?: boolean
    password?: boolean
    profilePicture?: boolean
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phoneNumber?: boolean
    email?: boolean
    password?: boolean
    profilePicture?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phoneNumber?: boolean
    email?: boolean
    password?: boolean
    profilePicture?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phoneNumber?: boolean
    email?: boolean
    password?: boolean
    profilePicture?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "phoneNumber" | "email" | "password" | "profilePicture", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      phoneNumber: string
      email: string
      password: string
      profilePicture: string | null
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
    bookings<T extends User$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly profilePicture: FieldRef<"User", 'String'>
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
   * User.bookings
   */
  export type User$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
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
   * Model Resident
   */

  export type AggregateResident = {
    _count: ResidentCountAggregateOutputType | null
    _avg: ResidentAvgAggregateOutputType | null
    _sum: ResidentSumAggregateOutputType | null
    _min: ResidentMinAggregateOutputType | null
    _max: ResidentMaxAggregateOutputType | null
  }

  export type ResidentAvgAggregateOutputType = {
    id: number | null
  }

  export type ResidentSumAggregateOutputType = {
    id: number | null
  }

  export type ResidentMinAggregateOutputType = {
    id: number | null
    residentName: string | null
    createdAt: Date | null
  }

  export type ResidentMaxAggregateOutputType = {
    id: number | null
    residentName: string | null
    createdAt: Date | null
  }

  export type ResidentCountAggregateOutputType = {
    id: number
    residentName: number
    createdAt: number
    _all: number
  }


  export type ResidentAvgAggregateInputType = {
    id?: true
  }

  export type ResidentSumAggregateInputType = {
    id?: true
  }

  export type ResidentMinAggregateInputType = {
    id?: true
    residentName?: true
    createdAt?: true
  }

  export type ResidentMaxAggregateInputType = {
    id?: true
    residentName?: true
    createdAt?: true
  }

  export type ResidentCountAggregateInputType = {
    id?: true
    residentName?: true
    createdAt?: true
    _all?: true
  }

  export type ResidentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resident to aggregate.
     */
    where?: ResidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Residents to fetch.
     */
    orderBy?: ResidentOrderByWithRelationInput | ResidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Residents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Residents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Residents
    **/
    _count?: true | ResidentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResidentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResidentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResidentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResidentMaxAggregateInputType
  }

  export type GetResidentAggregateType<T extends ResidentAggregateArgs> = {
        [P in keyof T & keyof AggregateResident]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResident[P]>
      : GetScalarType<T[P], AggregateResident[P]>
  }




  export type ResidentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResidentWhereInput
    orderBy?: ResidentOrderByWithAggregationInput | ResidentOrderByWithAggregationInput[]
    by: ResidentScalarFieldEnum[] | ResidentScalarFieldEnum
    having?: ResidentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResidentCountAggregateInputType | true
    _avg?: ResidentAvgAggregateInputType
    _sum?: ResidentSumAggregateInputType
    _min?: ResidentMinAggregateInputType
    _max?: ResidentMaxAggregateInputType
  }

  export type ResidentGroupByOutputType = {
    id: number
    residentName: string
    createdAt: Date
    _count: ResidentCountAggregateOutputType | null
    _avg: ResidentAvgAggregateOutputType | null
    _sum: ResidentSumAggregateOutputType | null
    _min: ResidentMinAggregateOutputType | null
    _max: ResidentMaxAggregateOutputType | null
  }

  type GetResidentGroupByPayload<T extends ResidentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResidentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResidentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResidentGroupByOutputType[P]>
            : GetScalarType<T[P], ResidentGroupByOutputType[P]>
        }
      >
    >


  export type ResidentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    residentName?: boolean
    createdAt?: boolean
    info?: boolean | Resident$infoArgs<ExtArgs>
    facilities?: boolean | Resident$facilitiesArgs<ExtArgs>
    owner?: boolean | Resident$ownerArgs<ExtArgs>
    address?: boolean | Resident$addressArgs<ExtArgs>
    bookings?: boolean | Resident$bookingsArgs<ExtArgs>
    reviews?: boolean | Resident$reviewsArgs<ExtArgs>
    _count?: boolean | ResidentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resident"]>

  export type ResidentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    residentName?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["resident"]>

  export type ResidentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    residentName?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["resident"]>

  export type ResidentSelectScalar = {
    id?: boolean
    residentName?: boolean
    createdAt?: boolean
  }

  export type ResidentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "residentName" | "createdAt", ExtArgs["result"]["resident"]>
  export type ResidentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    info?: boolean | Resident$infoArgs<ExtArgs>
    facilities?: boolean | Resident$facilitiesArgs<ExtArgs>
    owner?: boolean | Resident$ownerArgs<ExtArgs>
    address?: boolean | Resident$addressArgs<ExtArgs>
    bookings?: boolean | Resident$bookingsArgs<ExtArgs>
    reviews?: boolean | Resident$reviewsArgs<ExtArgs>
    _count?: boolean | ResidentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ResidentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ResidentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ResidentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resident"
    objects: {
      info: Prisma.$ResidentInfoPayload<ExtArgs> | null
      facilities: Prisma.$ResidentFacilitiesPayload<ExtArgs> | null
      owner: Prisma.$ResidentOwnerPayload<ExtArgs> | null
      address: Prisma.$ResidentAddressPayload<ExtArgs> | null
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      residentName: string
      createdAt: Date
    }, ExtArgs["result"]["resident"]>
    composites: {}
  }

  type ResidentGetPayload<S extends boolean | null | undefined | ResidentDefaultArgs> = $Result.GetResult<Prisma.$ResidentPayload, S>

  type ResidentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResidentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResidentCountAggregateInputType | true
    }

  export interface ResidentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resident'], meta: { name: 'Resident' } }
    /**
     * Find zero or one Resident that matches the filter.
     * @param {ResidentFindUniqueArgs} args - Arguments to find a Resident
     * @example
     * // Get one Resident
     * const resident = await prisma.resident.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResidentFindUniqueArgs>(args: SelectSubset<T, ResidentFindUniqueArgs<ExtArgs>>): Prisma__ResidentClient<$Result.GetResult<Prisma.$ResidentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resident that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResidentFindUniqueOrThrowArgs} args - Arguments to find a Resident
     * @example
     * // Get one Resident
     * const resident = await prisma.resident.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResidentFindUniqueOrThrowArgs>(args: SelectSubset<T, ResidentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResidentClient<$Result.GetResult<Prisma.$ResidentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resident that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentFindFirstArgs} args - Arguments to find a Resident
     * @example
     * // Get one Resident
     * const resident = await prisma.resident.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResidentFindFirstArgs>(args?: SelectSubset<T, ResidentFindFirstArgs<ExtArgs>>): Prisma__ResidentClient<$Result.GetResult<Prisma.$ResidentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resident that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentFindFirstOrThrowArgs} args - Arguments to find a Resident
     * @example
     * // Get one Resident
     * const resident = await prisma.resident.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResidentFindFirstOrThrowArgs>(args?: SelectSubset<T, ResidentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResidentClient<$Result.GetResult<Prisma.$ResidentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Residents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Residents
     * const residents = await prisma.resident.findMany()
     * 
     * // Get first 10 Residents
     * const residents = await prisma.resident.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const residentWithIdOnly = await prisma.resident.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResidentFindManyArgs>(args?: SelectSubset<T, ResidentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resident.
     * @param {ResidentCreateArgs} args - Arguments to create a Resident.
     * @example
     * // Create one Resident
     * const Resident = await prisma.resident.create({
     *   data: {
     *     // ... data to create a Resident
     *   }
     * })
     * 
     */
    create<T extends ResidentCreateArgs>(args: SelectSubset<T, ResidentCreateArgs<ExtArgs>>): Prisma__ResidentClient<$Result.GetResult<Prisma.$ResidentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Residents.
     * @param {ResidentCreateManyArgs} args - Arguments to create many Residents.
     * @example
     * // Create many Residents
     * const resident = await prisma.resident.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResidentCreateManyArgs>(args?: SelectSubset<T, ResidentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Residents and returns the data saved in the database.
     * @param {ResidentCreateManyAndReturnArgs} args - Arguments to create many Residents.
     * @example
     * // Create many Residents
     * const resident = await prisma.resident.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Residents and only return the `id`
     * const residentWithIdOnly = await prisma.resident.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResidentCreateManyAndReturnArgs>(args?: SelectSubset<T, ResidentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResidentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resident.
     * @param {ResidentDeleteArgs} args - Arguments to delete one Resident.
     * @example
     * // Delete one Resident
     * const Resident = await prisma.resident.delete({
     *   where: {
     *     // ... filter to delete one Resident
     *   }
     * })
     * 
     */
    delete<T extends ResidentDeleteArgs>(args: SelectSubset<T, ResidentDeleteArgs<ExtArgs>>): Prisma__ResidentClient<$Result.GetResult<Prisma.$ResidentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resident.
     * @param {ResidentUpdateArgs} args - Arguments to update one Resident.
     * @example
     * // Update one Resident
     * const resident = await prisma.resident.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResidentUpdateArgs>(args: SelectSubset<T, ResidentUpdateArgs<ExtArgs>>): Prisma__ResidentClient<$Result.GetResult<Prisma.$ResidentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Residents.
     * @param {ResidentDeleteManyArgs} args - Arguments to filter Residents to delete.
     * @example
     * // Delete a few Residents
     * const { count } = await prisma.resident.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResidentDeleteManyArgs>(args?: SelectSubset<T, ResidentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Residents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Residents
     * const resident = await prisma.resident.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResidentUpdateManyArgs>(args: SelectSubset<T, ResidentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Residents and returns the data updated in the database.
     * @param {ResidentUpdateManyAndReturnArgs} args - Arguments to update many Residents.
     * @example
     * // Update many Residents
     * const resident = await prisma.resident.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Residents and only return the `id`
     * const residentWithIdOnly = await prisma.resident.updateManyAndReturn({
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
    updateManyAndReturn<T extends ResidentUpdateManyAndReturnArgs>(args: SelectSubset<T, ResidentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResidentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resident.
     * @param {ResidentUpsertArgs} args - Arguments to update or create a Resident.
     * @example
     * // Update or create a Resident
     * const resident = await prisma.resident.upsert({
     *   create: {
     *     // ... data to create a Resident
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resident we want to update
     *   }
     * })
     */
    upsert<T extends ResidentUpsertArgs>(args: SelectSubset<T, ResidentUpsertArgs<ExtArgs>>): Prisma__ResidentClient<$Result.GetResult<Prisma.$ResidentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Residents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentCountArgs} args - Arguments to filter Residents to count.
     * @example
     * // Count the number of Residents
     * const count = await prisma.resident.count({
     *   where: {
     *     // ... the filter for the Residents we want to count
     *   }
     * })
    **/
    count<T extends ResidentCountArgs>(
      args?: Subset<T, ResidentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResidentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResidentAggregateArgs>(args: Subset<T, ResidentAggregateArgs>): Prisma.PrismaPromise<GetResidentAggregateType<T>>

    /**
     * Group by Resident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentGroupByArgs} args - Group by arguments.
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
      T extends ResidentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResidentGroupByArgs['orderBy'] }
        : { orderBy?: ResidentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResidentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResidentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resident model
   */
  readonly fields: ResidentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resident.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResidentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    info<T extends Resident$infoArgs<ExtArgs> = {}>(args?: Subset<T, Resident$infoArgs<ExtArgs>>): Prisma__ResidentInfoClient<$Result.GetResult<Prisma.$ResidentInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    facilities<T extends Resident$facilitiesArgs<ExtArgs> = {}>(args?: Subset<T, Resident$facilitiesArgs<ExtArgs>>): Prisma__ResidentFacilitiesClient<$Result.GetResult<Prisma.$ResidentFacilitiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    owner<T extends Resident$ownerArgs<ExtArgs> = {}>(args?: Subset<T, Resident$ownerArgs<ExtArgs>>): Prisma__ResidentOwnerClient<$Result.GetResult<Prisma.$ResidentOwnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    address<T extends Resident$addressArgs<ExtArgs> = {}>(args?: Subset<T, Resident$addressArgs<ExtArgs>>): Prisma__ResidentAddressClient<$Result.GetResult<Prisma.$ResidentAddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    bookings<T extends Resident$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Resident$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Resident$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Resident$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Resident model
   */
  interface ResidentFieldRefs {
    readonly id: FieldRef<"Resident", 'Int'>
    readonly residentName: FieldRef<"Resident", 'String'>
    readonly createdAt: FieldRef<"Resident", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Resident findUnique
   */
  export type ResidentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resident
     */
    select?: ResidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resident
     */
    omit?: ResidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInclude<ExtArgs> | null
    /**
     * Filter, which Resident to fetch.
     */
    where: ResidentWhereUniqueInput
  }

  /**
   * Resident findUniqueOrThrow
   */
  export type ResidentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resident
     */
    select?: ResidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resident
     */
    omit?: ResidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInclude<ExtArgs> | null
    /**
     * Filter, which Resident to fetch.
     */
    where: ResidentWhereUniqueInput
  }

  /**
   * Resident findFirst
   */
  export type ResidentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resident
     */
    select?: ResidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resident
     */
    omit?: ResidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInclude<ExtArgs> | null
    /**
     * Filter, which Resident to fetch.
     */
    where?: ResidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Residents to fetch.
     */
    orderBy?: ResidentOrderByWithRelationInput | ResidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Residents.
     */
    cursor?: ResidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Residents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Residents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Residents.
     */
    distinct?: ResidentScalarFieldEnum | ResidentScalarFieldEnum[]
  }

  /**
   * Resident findFirstOrThrow
   */
  export type ResidentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resident
     */
    select?: ResidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resident
     */
    omit?: ResidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInclude<ExtArgs> | null
    /**
     * Filter, which Resident to fetch.
     */
    where?: ResidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Residents to fetch.
     */
    orderBy?: ResidentOrderByWithRelationInput | ResidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Residents.
     */
    cursor?: ResidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Residents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Residents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Residents.
     */
    distinct?: ResidentScalarFieldEnum | ResidentScalarFieldEnum[]
  }

  /**
   * Resident findMany
   */
  export type ResidentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resident
     */
    select?: ResidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resident
     */
    omit?: ResidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInclude<ExtArgs> | null
    /**
     * Filter, which Residents to fetch.
     */
    where?: ResidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Residents to fetch.
     */
    orderBy?: ResidentOrderByWithRelationInput | ResidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Residents.
     */
    cursor?: ResidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Residents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Residents.
     */
    skip?: number
    distinct?: ResidentScalarFieldEnum | ResidentScalarFieldEnum[]
  }

  /**
   * Resident create
   */
  export type ResidentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resident
     */
    select?: ResidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resident
     */
    omit?: ResidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInclude<ExtArgs> | null
    /**
     * The data needed to create a Resident.
     */
    data: XOR<ResidentCreateInput, ResidentUncheckedCreateInput>
  }

  /**
   * Resident createMany
   */
  export type ResidentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Residents.
     */
    data: ResidentCreateManyInput | ResidentCreateManyInput[]
  }

  /**
   * Resident createManyAndReturn
   */
  export type ResidentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resident
     */
    select?: ResidentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resident
     */
    omit?: ResidentOmit<ExtArgs> | null
    /**
     * The data used to create many Residents.
     */
    data: ResidentCreateManyInput | ResidentCreateManyInput[]
  }

  /**
   * Resident update
   */
  export type ResidentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resident
     */
    select?: ResidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resident
     */
    omit?: ResidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInclude<ExtArgs> | null
    /**
     * The data needed to update a Resident.
     */
    data: XOR<ResidentUpdateInput, ResidentUncheckedUpdateInput>
    /**
     * Choose, which Resident to update.
     */
    where: ResidentWhereUniqueInput
  }

  /**
   * Resident updateMany
   */
  export type ResidentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Residents.
     */
    data: XOR<ResidentUpdateManyMutationInput, ResidentUncheckedUpdateManyInput>
    /**
     * Filter which Residents to update
     */
    where?: ResidentWhereInput
    /**
     * Limit how many Residents to update.
     */
    limit?: number
  }

  /**
   * Resident updateManyAndReturn
   */
  export type ResidentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resident
     */
    select?: ResidentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resident
     */
    omit?: ResidentOmit<ExtArgs> | null
    /**
     * The data used to update Residents.
     */
    data: XOR<ResidentUpdateManyMutationInput, ResidentUncheckedUpdateManyInput>
    /**
     * Filter which Residents to update
     */
    where?: ResidentWhereInput
    /**
     * Limit how many Residents to update.
     */
    limit?: number
  }

  /**
   * Resident upsert
   */
  export type ResidentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resident
     */
    select?: ResidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resident
     */
    omit?: ResidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInclude<ExtArgs> | null
    /**
     * The filter to search for the Resident to update in case it exists.
     */
    where: ResidentWhereUniqueInput
    /**
     * In case the Resident found by the `where` argument doesn't exist, create a new Resident with this data.
     */
    create: XOR<ResidentCreateInput, ResidentUncheckedCreateInput>
    /**
     * In case the Resident was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResidentUpdateInput, ResidentUncheckedUpdateInput>
  }

  /**
   * Resident delete
   */
  export type ResidentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resident
     */
    select?: ResidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resident
     */
    omit?: ResidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInclude<ExtArgs> | null
    /**
     * Filter which Resident to delete.
     */
    where: ResidentWhereUniqueInput
  }

  /**
   * Resident deleteMany
   */
  export type ResidentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Residents to delete
     */
    where?: ResidentWhereInput
    /**
     * Limit how many Residents to delete.
     */
    limit?: number
  }

  /**
   * Resident.info
   */
  export type Resident$infoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentInfo
     */
    select?: ResidentInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentInfo
     */
    omit?: ResidentInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInfoInclude<ExtArgs> | null
    where?: ResidentInfoWhereInput
  }

  /**
   * Resident.facilities
   */
  export type Resident$facilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentFacilities
     */
    select?: ResidentFacilitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentFacilities
     */
    omit?: ResidentFacilitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentFacilitiesInclude<ExtArgs> | null
    where?: ResidentFacilitiesWhereInput
  }

  /**
   * Resident.owner
   */
  export type Resident$ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentOwner
     */
    select?: ResidentOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentOwner
     */
    omit?: ResidentOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentOwnerInclude<ExtArgs> | null
    where?: ResidentOwnerWhereInput
  }

  /**
   * Resident.address
   */
  export type Resident$addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentAddress
     */
    select?: ResidentAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentAddress
     */
    omit?: ResidentAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentAddressInclude<ExtArgs> | null
    where?: ResidentAddressWhereInput
  }

  /**
   * Resident.bookings
   */
  export type Resident$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Resident.reviews
   */
  export type Resident$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Resident without action
   */
  export type ResidentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resident
     */
    select?: ResidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resident
     */
    omit?: ResidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInclude<ExtArgs> | null
  }


  /**
   * Model ResidentInfo
   */

  export type AggregateResidentInfo = {
    _count: ResidentInfoCountAggregateOutputType | null
    _avg: ResidentInfoAvgAggregateOutputType | null
    _sum: ResidentInfoSumAggregateOutputType | null
    _min: ResidentInfoMinAggregateOutputType | null
    _max: ResidentInfoMaxAggregateOutputType | null
  }

  export type ResidentInfoAvgAggregateOutputType = {
    id: number | null
    residentId: number | null
    electricFee: number | null
    waterFee: number | null
    serviceFee: number | null
    internetFee: number | null
    rentalPrice: number | null
  }

  export type ResidentInfoSumAggregateOutputType = {
    id: number | null
    residentId: number | null
    electricFee: number | null
    waterFee: number | null
    serviceFee: number | null
    internetFee: number | null
    rentalPrice: number | null
  }

  export type ResidentInfoMinAggregateOutputType = {
    id: number | null
    residentId: number | null
    residentType: string | null
    building: string | null
    roomType: string | null
    electricFee: number | null
    waterFee: number | null
    serviceFee: number | null
    internetFee: number | null
    rentalPrice: number | null
  }

  export type ResidentInfoMaxAggregateOutputType = {
    id: number | null
    residentId: number | null
    residentType: string | null
    building: string | null
    roomType: string | null
    electricFee: number | null
    waterFee: number | null
    serviceFee: number | null
    internetFee: number | null
    rentalPrice: number | null
  }

  export type ResidentInfoCountAggregateOutputType = {
    id: number
    residentId: number
    residentType: number
    building: number
    roomType: number
    electricFee: number
    waterFee: number
    serviceFee: number
    internetFee: number
    rentalPrice: number
    _all: number
  }


  export type ResidentInfoAvgAggregateInputType = {
    id?: true
    residentId?: true
    electricFee?: true
    waterFee?: true
    serviceFee?: true
    internetFee?: true
    rentalPrice?: true
  }

  export type ResidentInfoSumAggregateInputType = {
    id?: true
    residentId?: true
    electricFee?: true
    waterFee?: true
    serviceFee?: true
    internetFee?: true
    rentalPrice?: true
  }

  export type ResidentInfoMinAggregateInputType = {
    id?: true
    residentId?: true
    residentType?: true
    building?: true
    roomType?: true
    electricFee?: true
    waterFee?: true
    serviceFee?: true
    internetFee?: true
    rentalPrice?: true
  }

  export type ResidentInfoMaxAggregateInputType = {
    id?: true
    residentId?: true
    residentType?: true
    building?: true
    roomType?: true
    electricFee?: true
    waterFee?: true
    serviceFee?: true
    internetFee?: true
    rentalPrice?: true
  }

  export type ResidentInfoCountAggregateInputType = {
    id?: true
    residentId?: true
    residentType?: true
    building?: true
    roomType?: true
    electricFee?: true
    waterFee?: true
    serviceFee?: true
    internetFee?: true
    rentalPrice?: true
    _all?: true
  }

  export type ResidentInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResidentInfo to aggregate.
     */
    where?: ResidentInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResidentInfos to fetch.
     */
    orderBy?: ResidentInfoOrderByWithRelationInput | ResidentInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResidentInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResidentInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResidentInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResidentInfos
    **/
    _count?: true | ResidentInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResidentInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResidentInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResidentInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResidentInfoMaxAggregateInputType
  }

  export type GetResidentInfoAggregateType<T extends ResidentInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateResidentInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResidentInfo[P]>
      : GetScalarType<T[P], AggregateResidentInfo[P]>
  }




  export type ResidentInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResidentInfoWhereInput
    orderBy?: ResidentInfoOrderByWithAggregationInput | ResidentInfoOrderByWithAggregationInput[]
    by: ResidentInfoScalarFieldEnum[] | ResidentInfoScalarFieldEnum
    having?: ResidentInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResidentInfoCountAggregateInputType | true
    _avg?: ResidentInfoAvgAggregateInputType
    _sum?: ResidentInfoSumAggregateInputType
    _min?: ResidentInfoMinAggregateInputType
    _max?: ResidentInfoMaxAggregateInputType
  }

  export type ResidentInfoGroupByOutputType = {
    id: number
    residentId: number
    residentType: string
    building: string
    roomType: string
    electricFee: number
    waterFee: number
    serviceFee: number
    internetFee: number
    rentalPrice: number
    _count: ResidentInfoCountAggregateOutputType | null
    _avg: ResidentInfoAvgAggregateOutputType | null
    _sum: ResidentInfoSumAggregateOutputType | null
    _min: ResidentInfoMinAggregateOutputType | null
    _max: ResidentInfoMaxAggregateOutputType | null
  }

  type GetResidentInfoGroupByPayload<T extends ResidentInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResidentInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResidentInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResidentInfoGroupByOutputType[P]>
            : GetScalarType<T[P], ResidentInfoGroupByOutputType[P]>
        }
      >
    >


  export type ResidentInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    residentId?: boolean
    residentType?: boolean
    building?: boolean
    roomType?: boolean
    electricFee?: boolean
    waterFee?: boolean
    serviceFee?: boolean
    internetFee?: boolean
    rentalPrice?: boolean
    resident?: boolean | ResidentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["residentInfo"]>

  export type ResidentInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    residentId?: boolean
    residentType?: boolean
    building?: boolean
    roomType?: boolean
    electricFee?: boolean
    waterFee?: boolean
    serviceFee?: boolean
    internetFee?: boolean
    rentalPrice?: boolean
    resident?: boolean | ResidentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["residentInfo"]>

  export type ResidentInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    residentId?: boolean
    residentType?: boolean
    building?: boolean
    roomType?: boolean
    electricFee?: boolean
    waterFee?: boolean
    serviceFee?: boolean
    internetFee?: boolean
    rentalPrice?: boolean
    resident?: boolean | ResidentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["residentInfo"]>

  export type ResidentInfoSelectScalar = {
    id?: boolean
    residentId?: boolean
    residentType?: boolean
    building?: boolean
    roomType?: boolean
    electricFee?: boolean
    waterFee?: boolean
    serviceFee?: boolean
    internetFee?: boolean
    rentalPrice?: boolean
  }

  export type ResidentInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "residentId" | "residentType" | "building" | "roomType" | "electricFee" | "waterFee" | "serviceFee" | "internetFee" | "rentalPrice", ExtArgs["result"]["residentInfo"]>
  export type ResidentInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resident?: boolean | ResidentDefaultArgs<ExtArgs>
  }
  export type ResidentInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resident?: boolean | ResidentDefaultArgs<ExtArgs>
  }
  export type ResidentInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resident?: boolean | ResidentDefaultArgs<ExtArgs>
  }

  export type $ResidentInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResidentInfo"
    objects: {
      resident: Prisma.$ResidentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      residentId: number
      residentType: string
      building: string
      roomType: string
      electricFee: number
      waterFee: number
      serviceFee: number
      internetFee: number
      rentalPrice: number
    }, ExtArgs["result"]["residentInfo"]>
    composites: {}
  }

  type ResidentInfoGetPayload<S extends boolean | null | undefined | ResidentInfoDefaultArgs> = $Result.GetResult<Prisma.$ResidentInfoPayload, S>

  type ResidentInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResidentInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResidentInfoCountAggregateInputType | true
    }

  export interface ResidentInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResidentInfo'], meta: { name: 'ResidentInfo' } }
    /**
     * Find zero or one ResidentInfo that matches the filter.
     * @param {ResidentInfoFindUniqueArgs} args - Arguments to find a ResidentInfo
     * @example
     * // Get one ResidentInfo
     * const residentInfo = await prisma.residentInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResidentInfoFindUniqueArgs>(args: SelectSubset<T, ResidentInfoFindUniqueArgs<ExtArgs>>): Prisma__ResidentInfoClient<$Result.GetResult<Prisma.$ResidentInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ResidentInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResidentInfoFindUniqueOrThrowArgs} args - Arguments to find a ResidentInfo
     * @example
     * // Get one ResidentInfo
     * const residentInfo = await prisma.residentInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResidentInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, ResidentInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResidentInfoClient<$Result.GetResult<Prisma.$ResidentInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResidentInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentInfoFindFirstArgs} args - Arguments to find a ResidentInfo
     * @example
     * // Get one ResidentInfo
     * const residentInfo = await prisma.residentInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResidentInfoFindFirstArgs>(args?: SelectSubset<T, ResidentInfoFindFirstArgs<ExtArgs>>): Prisma__ResidentInfoClient<$Result.GetResult<Prisma.$ResidentInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResidentInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentInfoFindFirstOrThrowArgs} args - Arguments to find a ResidentInfo
     * @example
     * // Get one ResidentInfo
     * const residentInfo = await prisma.residentInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResidentInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, ResidentInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResidentInfoClient<$Result.GetResult<Prisma.$ResidentInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ResidentInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResidentInfos
     * const residentInfos = await prisma.residentInfo.findMany()
     * 
     * // Get first 10 ResidentInfos
     * const residentInfos = await prisma.residentInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const residentInfoWithIdOnly = await prisma.residentInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResidentInfoFindManyArgs>(args?: SelectSubset<T, ResidentInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResidentInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ResidentInfo.
     * @param {ResidentInfoCreateArgs} args - Arguments to create a ResidentInfo.
     * @example
     * // Create one ResidentInfo
     * const ResidentInfo = await prisma.residentInfo.create({
     *   data: {
     *     // ... data to create a ResidentInfo
     *   }
     * })
     * 
     */
    create<T extends ResidentInfoCreateArgs>(args: SelectSubset<T, ResidentInfoCreateArgs<ExtArgs>>): Prisma__ResidentInfoClient<$Result.GetResult<Prisma.$ResidentInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ResidentInfos.
     * @param {ResidentInfoCreateManyArgs} args - Arguments to create many ResidentInfos.
     * @example
     * // Create many ResidentInfos
     * const residentInfo = await prisma.residentInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResidentInfoCreateManyArgs>(args?: SelectSubset<T, ResidentInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ResidentInfos and returns the data saved in the database.
     * @param {ResidentInfoCreateManyAndReturnArgs} args - Arguments to create many ResidentInfos.
     * @example
     * // Create many ResidentInfos
     * const residentInfo = await prisma.residentInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ResidentInfos and only return the `id`
     * const residentInfoWithIdOnly = await prisma.residentInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResidentInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, ResidentInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResidentInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ResidentInfo.
     * @param {ResidentInfoDeleteArgs} args - Arguments to delete one ResidentInfo.
     * @example
     * // Delete one ResidentInfo
     * const ResidentInfo = await prisma.residentInfo.delete({
     *   where: {
     *     // ... filter to delete one ResidentInfo
     *   }
     * })
     * 
     */
    delete<T extends ResidentInfoDeleteArgs>(args: SelectSubset<T, ResidentInfoDeleteArgs<ExtArgs>>): Prisma__ResidentInfoClient<$Result.GetResult<Prisma.$ResidentInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ResidentInfo.
     * @param {ResidentInfoUpdateArgs} args - Arguments to update one ResidentInfo.
     * @example
     * // Update one ResidentInfo
     * const residentInfo = await prisma.residentInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResidentInfoUpdateArgs>(args: SelectSubset<T, ResidentInfoUpdateArgs<ExtArgs>>): Prisma__ResidentInfoClient<$Result.GetResult<Prisma.$ResidentInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ResidentInfos.
     * @param {ResidentInfoDeleteManyArgs} args - Arguments to filter ResidentInfos to delete.
     * @example
     * // Delete a few ResidentInfos
     * const { count } = await prisma.residentInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResidentInfoDeleteManyArgs>(args?: SelectSubset<T, ResidentInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResidentInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResidentInfos
     * const residentInfo = await prisma.residentInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResidentInfoUpdateManyArgs>(args: SelectSubset<T, ResidentInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResidentInfos and returns the data updated in the database.
     * @param {ResidentInfoUpdateManyAndReturnArgs} args - Arguments to update many ResidentInfos.
     * @example
     * // Update many ResidentInfos
     * const residentInfo = await prisma.residentInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ResidentInfos and only return the `id`
     * const residentInfoWithIdOnly = await prisma.residentInfo.updateManyAndReturn({
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
    updateManyAndReturn<T extends ResidentInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, ResidentInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResidentInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ResidentInfo.
     * @param {ResidentInfoUpsertArgs} args - Arguments to update or create a ResidentInfo.
     * @example
     * // Update or create a ResidentInfo
     * const residentInfo = await prisma.residentInfo.upsert({
     *   create: {
     *     // ... data to create a ResidentInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResidentInfo we want to update
     *   }
     * })
     */
    upsert<T extends ResidentInfoUpsertArgs>(args: SelectSubset<T, ResidentInfoUpsertArgs<ExtArgs>>): Prisma__ResidentInfoClient<$Result.GetResult<Prisma.$ResidentInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ResidentInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentInfoCountArgs} args - Arguments to filter ResidentInfos to count.
     * @example
     * // Count the number of ResidentInfos
     * const count = await prisma.residentInfo.count({
     *   where: {
     *     // ... the filter for the ResidentInfos we want to count
     *   }
     * })
    **/
    count<T extends ResidentInfoCountArgs>(
      args?: Subset<T, ResidentInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResidentInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResidentInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResidentInfoAggregateArgs>(args: Subset<T, ResidentInfoAggregateArgs>): Prisma.PrismaPromise<GetResidentInfoAggregateType<T>>

    /**
     * Group by ResidentInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentInfoGroupByArgs} args - Group by arguments.
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
      T extends ResidentInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResidentInfoGroupByArgs['orderBy'] }
        : { orderBy?: ResidentInfoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResidentInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResidentInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResidentInfo model
   */
  readonly fields: ResidentInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResidentInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResidentInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resident<T extends ResidentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResidentDefaultArgs<ExtArgs>>): Prisma__ResidentClient<$Result.GetResult<Prisma.$ResidentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ResidentInfo model
   */
  interface ResidentInfoFieldRefs {
    readonly id: FieldRef<"ResidentInfo", 'Int'>
    readonly residentId: FieldRef<"ResidentInfo", 'Int'>
    readonly residentType: FieldRef<"ResidentInfo", 'String'>
    readonly building: FieldRef<"ResidentInfo", 'String'>
    readonly roomType: FieldRef<"ResidentInfo", 'String'>
    readonly electricFee: FieldRef<"ResidentInfo", 'Float'>
    readonly waterFee: FieldRef<"ResidentInfo", 'Float'>
    readonly serviceFee: FieldRef<"ResidentInfo", 'Float'>
    readonly internetFee: FieldRef<"ResidentInfo", 'Float'>
    readonly rentalPrice: FieldRef<"ResidentInfo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ResidentInfo findUnique
   */
  export type ResidentInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentInfo
     */
    select?: ResidentInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentInfo
     */
    omit?: ResidentInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInfoInclude<ExtArgs> | null
    /**
     * Filter, which ResidentInfo to fetch.
     */
    where: ResidentInfoWhereUniqueInput
  }

  /**
   * ResidentInfo findUniqueOrThrow
   */
  export type ResidentInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentInfo
     */
    select?: ResidentInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentInfo
     */
    omit?: ResidentInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInfoInclude<ExtArgs> | null
    /**
     * Filter, which ResidentInfo to fetch.
     */
    where: ResidentInfoWhereUniqueInput
  }

  /**
   * ResidentInfo findFirst
   */
  export type ResidentInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentInfo
     */
    select?: ResidentInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentInfo
     */
    omit?: ResidentInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInfoInclude<ExtArgs> | null
    /**
     * Filter, which ResidentInfo to fetch.
     */
    where?: ResidentInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResidentInfos to fetch.
     */
    orderBy?: ResidentInfoOrderByWithRelationInput | ResidentInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResidentInfos.
     */
    cursor?: ResidentInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResidentInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResidentInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResidentInfos.
     */
    distinct?: ResidentInfoScalarFieldEnum | ResidentInfoScalarFieldEnum[]
  }

  /**
   * ResidentInfo findFirstOrThrow
   */
  export type ResidentInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentInfo
     */
    select?: ResidentInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentInfo
     */
    omit?: ResidentInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInfoInclude<ExtArgs> | null
    /**
     * Filter, which ResidentInfo to fetch.
     */
    where?: ResidentInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResidentInfos to fetch.
     */
    orderBy?: ResidentInfoOrderByWithRelationInput | ResidentInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResidentInfos.
     */
    cursor?: ResidentInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResidentInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResidentInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResidentInfos.
     */
    distinct?: ResidentInfoScalarFieldEnum | ResidentInfoScalarFieldEnum[]
  }

  /**
   * ResidentInfo findMany
   */
  export type ResidentInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentInfo
     */
    select?: ResidentInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentInfo
     */
    omit?: ResidentInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInfoInclude<ExtArgs> | null
    /**
     * Filter, which ResidentInfos to fetch.
     */
    where?: ResidentInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResidentInfos to fetch.
     */
    orderBy?: ResidentInfoOrderByWithRelationInput | ResidentInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResidentInfos.
     */
    cursor?: ResidentInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResidentInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResidentInfos.
     */
    skip?: number
    distinct?: ResidentInfoScalarFieldEnum | ResidentInfoScalarFieldEnum[]
  }

  /**
   * ResidentInfo create
   */
  export type ResidentInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentInfo
     */
    select?: ResidentInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentInfo
     */
    omit?: ResidentInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a ResidentInfo.
     */
    data: XOR<ResidentInfoCreateInput, ResidentInfoUncheckedCreateInput>
  }

  /**
   * ResidentInfo createMany
   */
  export type ResidentInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResidentInfos.
     */
    data: ResidentInfoCreateManyInput | ResidentInfoCreateManyInput[]
  }

  /**
   * ResidentInfo createManyAndReturn
   */
  export type ResidentInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentInfo
     */
    select?: ResidentInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentInfo
     */
    omit?: ResidentInfoOmit<ExtArgs> | null
    /**
     * The data used to create many ResidentInfos.
     */
    data: ResidentInfoCreateManyInput | ResidentInfoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInfoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResidentInfo update
   */
  export type ResidentInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentInfo
     */
    select?: ResidentInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentInfo
     */
    omit?: ResidentInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a ResidentInfo.
     */
    data: XOR<ResidentInfoUpdateInput, ResidentInfoUncheckedUpdateInput>
    /**
     * Choose, which ResidentInfo to update.
     */
    where: ResidentInfoWhereUniqueInput
  }

  /**
   * ResidentInfo updateMany
   */
  export type ResidentInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResidentInfos.
     */
    data: XOR<ResidentInfoUpdateManyMutationInput, ResidentInfoUncheckedUpdateManyInput>
    /**
     * Filter which ResidentInfos to update
     */
    where?: ResidentInfoWhereInput
    /**
     * Limit how many ResidentInfos to update.
     */
    limit?: number
  }

  /**
   * ResidentInfo updateManyAndReturn
   */
  export type ResidentInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentInfo
     */
    select?: ResidentInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentInfo
     */
    omit?: ResidentInfoOmit<ExtArgs> | null
    /**
     * The data used to update ResidentInfos.
     */
    data: XOR<ResidentInfoUpdateManyMutationInput, ResidentInfoUncheckedUpdateManyInput>
    /**
     * Filter which ResidentInfos to update
     */
    where?: ResidentInfoWhereInput
    /**
     * Limit how many ResidentInfos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInfoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResidentInfo upsert
   */
  export type ResidentInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentInfo
     */
    select?: ResidentInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentInfo
     */
    omit?: ResidentInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the ResidentInfo to update in case it exists.
     */
    where: ResidentInfoWhereUniqueInput
    /**
     * In case the ResidentInfo found by the `where` argument doesn't exist, create a new ResidentInfo with this data.
     */
    create: XOR<ResidentInfoCreateInput, ResidentInfoUncheckedCreateInput>
    /**
     * In case the ResidentInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResidentInfoUpdateInput, ResidentInfoUncheckedUpdateInput>
  }

  /**
   * ResidentInfo delete
   */
  export type ResidentInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentInfo
     */
    select?: ResidentInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentInfo
     */
    omit?: ResidentInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInfoInclude<ExtArgs> | null
    /**
     * Filter which ResidentInfo to delete.
     */
    where: ResidentInfoWhereUniqueInput
  }

  /**
   * ResidentInfo deleteMany
   */
  export type ResidentInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResidentInfos to delete
     */
    where?: ResidentInfoWhereInput
    /**
     * Limit how many ResidentInfos to delete.
     */
    limit?: number
  }

  /**
   * ResidentInfo without action
   */
  export type ResidentInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentInfo
     */
    select?: ResidentInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentInfo
     */
    omit?: ResidentInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentInfoInclude<ExtArgs> | null
  }


  /**
   * Model ResidentFacilities
   */

  export type AggregateResidentFacilities = {
    _count: ResidentFacilitiesCountAggregateOutputType | null
    _avg: ResidentFacilitiesAvgAggregateOutputType | null
    _sum: ResidentFacilitiesSumAggregateOutputType | null
    _min: ResidentFacilitiesMinAggregateOutputType | null
    _max: ResidentFacilitiesMaxAggregateOutputType | null
  }

  export type ResidentFacilitiesAvgAggregateOutputType = {
    id: number | null
    residentId: number | null
  }

  export type ResidentFacilitiesSumAggregateOutputType = {
    id: number | null
    residentId: number | null
  }

  export type ResidentFacilitiesMinAggregateOutputType = {
    id: number | null
    residentId: number | null
    aircon: boolean | null
    furnished: boolean | null
    television: boolean | null
    waterHeater: boolean | null
    inRoomBathroom: boolean | null
    refrigerator: boolean | null
    pool: boolean | null
    parking: boolean | null
    security: boolean | null
    fitness: boolean | null
    internet: boolean | null
  }

  export type ResidentFacilitiesMaxAggregateOutputType = {
    id: number | null
    residentId: number | null
    aircon: boolean | null
    furnished: boolean | null
    television: boolean | null
    waterHeater: boolean | null
    inRoomBathroom: boolean | null
    refrigerator: boolean | null
    pool: boolean | null
    parking: boolean | null
    security: boolean | null
    fitness: boolean | null
    internet: boolean | null
  }

  export type ResidentFacilitiesCountAggregateOutputType = {
    id: number
    residentId: number
    aircon: number
    furnished: number
    television: number
    waterHeater: number
    inRoomBathroom: number
    refrigerator: number
    pool: number
    parking: number
    security: number
    fitness: number
    internet: number
    _all: number
  }


  export type ResidentFacilitiesAvgAggregateInputType = {
    id?: true
    residentId?: true
  }

  export type ResidentFacilitiesSumAggregateInputType = {
    id?: true
    residentId?: true
  }

  export type ResidentFacilitiesMinAggregateInputType = {
    id?: true
    residentId?: true
    aircon?: true
    furnished?: true
    television?: true
    waterHeater?: true
    inRoomBathroom?: true
    refrigerator?: true
    pool?: true
    parking?: true
    security?: true
    fitness?: true
    internet?: true
  }

  export type ResidentFacilitiesMaxAggregateInputType = {
    id?: true
    residentId?: true
    aircon?: true
    furnished?: true
    television?: true
    waterHeater?: true
    inRoomBathroom?: true
    refrigerator?: true
    pool?: true
    parking?: true
    security?: true
    fitness?: true
    internet?: true
  }

  export type ResidentFacilitiesCountAggregateInputType = {
    id?: true
    residentId?: true
    aircon?: true
    furnished?: true
    television?: true
    waterHeater?: true
    inRoomBathroom?: true
    refrigerator?: true
    pool?: true
    parking?: true
    security?: true
    fitness?: true
    internet?: true
    _all?: true
  }

  export type ResidentFacilitiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResidentFacilities to aggregate.
     */
    where?: ResidentFacilitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResidentFacilities to fetch.
     */
    orderBy?: ResidentFacilitiesOrderByWithRelationInput | ResidentFacilitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResidentFacilitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResidentFacilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResidentFacilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResidentFacilities
    **/
    _count?: true | ResidentFacilitiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResidentFacilitiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResidentFacilitiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResidentFacilitiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResidentFacilitiesMaxAggregateInputType
  }

  export type GetResidentFacilitiesAggregateType<T extends ResidentFacilitiesAggregateArgs> = {
        [P in keyof T & keyof AggregateResidentFacilities]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResidentFacilities[P]>
      : GetScalarType<T[P], AggregateResidentFacilities[P]>
  }




  export type ResidentFacilitiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResidentFacilitiesWhereInput
    orderBy?: ResidentFacilitiesOrderByWithAggregationInput | ResidentFacilitiesOrderByWithAggregationInput[]
    by: ResidentFacilitiesScalarFieldEnum[] | ResidentFacilitiesScalarFieldEnum
    having?: ResidentFacilitiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResidentFacilitiesCountAggregateInputType | true
    _avg?: ResidentFacilitiesAvgAggregateInputType
    _sum?: ResidentFacilitiesSumAggregateInputType
    _min?: ResidentFacilitiesMinAggregateInputType
    _max?: ResidentFacilitiesMaxAggregateInputType
  }

  export type ResidentFacilitiesGroupByOutputType = {
    id: number
    residentId: number
    aircon: boolean
    furnished: boolean
    television: boolean
    waterHeater: boolean
    inRoomBathroom: boolean
    refrigerator: boolean
    pool: boolean
    parking: boolean
    security: boolean
    fitness: boolean
    internet: boolean
    _count: ResidentFacilitiesCountAggregateOutputType | null
    _avg: ResidentFacilitiesAvgAggregateOutputType | null
    _sum: ResidentFacilitiesSumAggregateOutputType | null
    _min: ResidentFacilitiesMinAggregateOutputType | null
    _max: ResidentFacilitiesMaxAggregateOutputType | null
  }

  type GetResidentFacilitiesGroupByPayload<T extends ResidentFacilitiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResidentFacilitiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResidentFacilitiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResidentFacilitiesGroupByOutputType[P]>
            : GetScalarType<T[P], ResidentFacilitiesGroupByOutputType[P]>
        }
      >
    >


  export type ResidentFacilitiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    residentId?: boolean
    aircon?: boolean
    furnished?: boolean
    television?: boolean
    waterHeater?: boolean
    inRoomBathroom?: boolean
    refrigerator?: boolean
    pool?: boolean
    parking?: boolean
    security?: boolean
    fitness?: boolean
    internet?: boolean
    resident?: boolean | ResidentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["residentFacilities"]>

  export type ResidentFacilitiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    residentId?: boolean
    aircon?: boolean
    furnished?: boolean
    television?: boolean
    waterHeater?: boolean
    inRoomBathroom?: boolean
    refrigerator?: boolean
    pool?: boolean
    parking?: boolean
    security?: boolean
    fitness?: boolean
    internet?: boolean
    resident?: boolean | ResidentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["residentFacilities"]>

  export type ResidentFacilitiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    residentId?: boolean
    aircon?: boolean
    furnished?: boolean
    television?: boolean
    waterHeater?: boolean
    inRoomBathroom?: boolean
    refrigerator?: boolean
    pool?: boolean
    parking?: boolean
    security?: boolean
    fitness?: boolean
    internet?: boolean
    resident?: boolean | ResidentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["residentFacilities"]>

  export type ResidentFacilitiesSelectScalar = {
    id?: boolean
    residentId?: boolean
    aircon?: boolean
    furnished?: boolean
    television?: boolean
    waterHeater?: boolean
    inRoomBathroom?: boolean
    refrigerator?: boolean
    pool?: boolean
    parking?: boolean
    security?: boolean
    fitness?: boolean
    internet?: boolean
  }

  export type ResidentFacilitiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "residentId" | "aircon" | "furnished" | "television" | "waterHeater" | "inRoomBathroom" | "refrigerator" | "pool" | "parking" | "security" | "fitness" | "internet", ExtArgs["result"]["residentFacilities"]>
  export type ResidentFacilitiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resident?: boolean | ResidentDefaultArgs<ExtArgs>
  }
  export type ResidentFacilitiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resident?: boolean | ResidentDefaultArgs<ExtArgs>
  }
  export type ResidentFacilitiesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resident?: boolean | ResidentDefaultArgs<ExtArgs>
  }

  export type $ResidentFacilitiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResidentFacilities"
    objects: {
      resident: Prisma.$ResidentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      residentId: number
      aircon: boolean
      furnished: boolean
      television: boolean
      waterHeater: boolean
      inRoomBathroom: boolean
      refrigerator: boolean
      pool: boolean
      parking: boolean
      security: boolean
      fitness: boolean
      internet: boolean
    }, ExtArgs["result"]["residentFacilities"]>
    composites: {}
  }

  type ResidentFacilitiesGetPayload<S extends boolean | null | undefined | ResidentFacilitiesDefaultArgs> = $Result.GetResult<Prisma.$ResidentFacilitiesPayload, S>

  type ResidentFacilitiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResidentFacilitiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResidentFacilitiesCountAggregateInputType | true
    }

  export interface ResidentFacilitiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResidentFacilities'], meta: { name: 'ResidentFacilities' } }
    /**
     * Find zero or one ResidentFacilities that matches the filter.
     * @param {ResidentFacilitiesFindUniqueArgs} args - Arguments to find a ResidentFacilities
     * @example
     * // Get one ResidentFacilities
     * const residentFacilities = await prisma.residentFacilities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResidentFacilitiesFindUniqueArgs>(args: SelectSubset<T, ResidentFacilitiesFindUniqueArgs<ExtArgs>>): Prisma__ResidentFacilitiesClient<$Result.GetResult<Prisma.$ResidentFacilitiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ResidentFacilities that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResidentFacilitiesFindUniqueOrThrowArgs} args - Arguments to find a ResidentFacilities
     * @example
     * // Get one ResidentFacilities
     * const residentFacilities = await prisma.residentFacilities.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResidentFacilitiesFindUniqueOrThrowArgs>(args: SelectSubset<T, ResidentFacilitiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResidentFacilitiesClient<$Result.GetResult<Prisma.$ResidentFacilitiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResidentFacilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentFacilitiesFindFirstArgs} args - Arguments to find a ResidentFacilities
     * @example
     * // Get one ResidentFacilities
     * const residentFacilities = await prisma.residentFacilities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResidentFacilitiesFindFirstArgs>(args?: SelectSubset<T, ResidentFacilitiesFindFirstArgs<ExtArgs>>): Prisma__ResidentFacilitiesClient<$Result.GetResult<Prisma.$ResidentFacilitiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResidentFacilities that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentFacilitiesFindFirstOrThrowArgs} args - Arguments to find a ResidentFacilities
     * @example
     * // Get one ResidentFacilities
     * const residentFacilities = await prisma.residentFacilities.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResidentFacilitiesFindFirstOrThrowArgs>(args?: SelectSubset<T, ResidentFacilitiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResidentFacilitiesClient<$Result.GetResult<Prisma.$ResidentFacilitiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ResidentFacilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentFacilitiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResidentFacilities
     * const residentFacilities = await prisma.residentFacilities.findMany()
     * 
     * // Get first 10 ResidentFacilities
     * const residentFacilities = await prisma.residentFacilities.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const residentFacilitiesWithIdOnly = await prisma.residentFacilities.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResidentFacilitiesFindManyArgs>(args?: SelectSubset<T, ResidentFacilitiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResidentFacilitiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ResidentFacilities.
     * @param {ResidentFacilitiesCreateArgs} args - Arguments to create a ResidentFacilities.
     * @example
     * // Create one ResidentFacilities
     * const ResidentFacilities = await prisma.residentFacilities.create({
     *   data: {
     *     // ... data to create a ResidentFacilities
     *   }
     * })
     * 
     */
    create<T extends ResidentFacilitiesCreateArgs>(args: SelectSubset<T, ResidentFacilitiesCreateArgs<ExtArgs>>): Prisma__ResidentFacilitiesClient<$Result.GetResult<Prisma.$ResidentFacilitiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ResidentFacilities.
     * @param {ResidentFacilitiesCreateManyArgs} args - Arguments to create many ResidentFacilities.
     * @example
     * // Create many ResidentFacilities
     * const residentFacilities = await prisma.residentFacilities.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResidentFacilitiesCreateManyArgs>(args?: SelectSubset<T, ResidentFacilitiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ResidentFacilities and returns the data saved in the database.
     * @param {ResidentFacilitiesCreateManyAndReturnArgs} args - Arguments to create many ResidentFacilities.
     * @example
     * // Create many ResidentFacilities
     * const residentFacilities = await prisma.residentFacilities.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ResidentFacilities and only return the `id`
     * const residentFacilitiesWithIdOnly = await prisma.residentFacilities.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResidentFacilitiesCreateManyAndReturnArgs>(args?: SelectSubset<T, ResidentFacilitiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResidentFacilitiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ResidentFacilities.
     * @param {ResidentFacilitiesDeleteArgs} args - Arguments to delete one ResidentFacilities.
     * @example
     * // Delete one ResidentFacilities
     * const ResidentFacilities = await prisma.residentFacilities.delete({
     *   where: {
     *     // ... filter to delete one ResidentFacilities
     *   }
     * })
     * 
     */
    delete<T extends ResidentFacilitiesDeleteArgs>(args: SelectSubset<T, ResidentFacilitiesDeleteArgs<ExtArgs>>): Prisma__ResidentFacilitiesClient<$Result.GetResult<Prisma.$ResidentFacilitiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ResidentFacilities.
     * @param {ResidentFacilitiesUpdateArgs} args - Arguments to update one ResidentFacilities.
     * @example
     * // Update one ResidentFacilities
     * const residentFacilities = await prisma.residentFacilities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResidentFacilitiesUpdateArgs>(args: SelectSubset<T, ResidentFacilitiesUpdateArgs<ExtArgs>>): Prisma__ResidentFacilitiesClient<$Result.GetResult<Prisma.$ResidentFacilitiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ResidentFacilities.
     * @param {ResidentFacilitiesDeleteManyArgs} args - Arguments to filter ResidentFacilities to delete.
     * @example
     * // Delete a few ResidentFacilities
     * const { count } = await prisma.residentFacilities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResidentFacilitiesDeleteManyArgs>(args?: SelectSubset<T, ResidentFacilitiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResidentFacilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentFacilitiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResidentFacilities
     * const residentFacilities = await prisma.residentFacilities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResidentFacilitiesUpdateManyArgs>(args: SelectSubset<T, ResidentFacilitiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResidentFacilities and returns the data updated in the database.
     * @param {ResidentFacilitiesUpdateManyAndReturnArgs} args - Arguments to update many ResidentFacilities.
     * @example
     * // Update many ResidentFacilities
     * const residentFacilities = await prisma.residentFacilities.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ResidentFacilities and only return the `id`
     * const residentFacilitiesWithIdOnly = await prisma.residentFacilities.updateManyAndReturn({
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
    updateManyAndReturn<T extends ResidentFacilitiesUpdateManyAndReturnArgs>(args: SelectSubset<T, ResidentFacilitiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResidentFacilitiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ResidentFacilities.
     * @param {ResidentFacilitiesUpsertArgs} args - Arguments to update or create a ResidentFacilities.
     * @example
     * // Update or create a ResidentFacilities
     * const residentFacilities = await prisma.residentFacilities.upsert({
     *   create: {
     *     // ... data to create a ResidentFacilities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResidentFacilities we want to update
     *   }
     * })
     */
    upsert<T extends ResidentFacilitiesUpsertArgs>(args: SelectSubset<T, ResidentFacilitiesUpsertArgs<ExtArgs>>): Prisma__ResidentFacilitiesClient<$Result.GetResult<Prisma.$ResidentFacilitiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ResidentFacilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentFacilitiesCountArgs} args - Arguments to filter ResidentFacilities to count.
     * @example
     * // Count the number of ResidentFacilities
     * const count = await prisma.residentFacilities.count({
     *   where: {
     *     // ... the filter for the ResidentFacilities we want to count
     *   }
     * })
    **/
    count<T extends ResidentFacilitiesCountArgs>(
      args?: Subset<T, ResidentFacilitiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResidentFacilitiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResidentFacilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentFacilitiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResidentFacilitiesAggregateArgs>(args: Subset<T, ResidentFacilitiesAggregateArgs>): Prisma.PrismaPromise<GetResidentFacilitiesAggregateType<T>>

    /**
     * Group by ResidentFacilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentFacilitiesGroupByArgs} args - Group by arguments.
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
      T extends ResidentFacilitiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResidentFacilitiesGroupByArgs['orderBy'] }
        : { orderBy?: ResidentFacilitiesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResidentFacilitiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResidentFacilitiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResidentFacilities model
   */
  readonly fields: ResidentFacilitiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResidentFacilities.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResidentFacilitiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resident<T extends ResidentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResidentDefaultArgs<ExtArgs>>): Prisma__ResidentClient<$Result.GetResult<Prisma.$ResidentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ResidentFacilities model
   */
  interface ResidentFacilitiesFieldRefs {
    readonly id: FieldRef<"ResidentFacilities", 'Int'>
    readonly residentId: FieldRef<"ResidentFacilities", 'Int'>
    readonly aircon: FieldRef<"ResidentFacilities", 'Boolean'>
    readonly furnished: FieldRef<"ResidentFacilities", 'Boolean'>
    readonly television: FieldRef<"ResidentFacilities", 'Boolean'>
    readonly waterHeater: FieldRef<"ResidentFacilities", 'Boolean'>
    readonly inRoomBathroom: FieldRef<"ResidentFacilities", 'Boolean'>
    readonly refrigerator: FieldRef<"ResidentFacilities", 'Boolean'>
    readonly pool: FieldRef<"ResidentFacilities", 'Boolean'>
    readonly parking: FieldRef<"ResidentFacilities", 'Boolean'>
    readonly security: FieldRef<"ResidentFacilities", 'Boolean'>
    readonly fitness: FieldRef<"ResidentFacilities", 'Boolean'>
    readonly internet: FieldRef<"ResidentFacilities", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ResidentFacilities findUnique
   */
  export type ResidentFacilitiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentFacilities
     */
    select?: ResidentFacilitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentFacilities
     */
    omit?: ResidentFacilitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentFacilitiesInclude<ExtArgs> | null
    /**
     * Filter, which ResidentFacilities to fetch.
     */
    where: ResidentFacilitiesWhereUniqueInput
  }

  /**
   * ResidentFacilities findUniqueOrThrow
   */
  export type ResidentFacilitiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentFacilities
     */
    select?: ResidentFacilitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentFacilities
     */
    omit?: ResidentFacilitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentFacilitiesInclude<ExtArgs> | null
    /**
     * Filter, which ResidentFacilities to fetch.
     */
    where: ResidentFacilitiesWhereUniqueInput
  }

  /**
   * ResidentFacilities findFirst
   */
  export type ResidentFacilitiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentFacilities
     */
    select?: ResidentFacilitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentFacilities
     */
    omit?: ResidentFacilitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentFacilitiesInclude<ExtArgs> | null
    /**
     * Filter, which ResidentFacilities to fetch.
     */
    where?: ResidentFacilitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResidentFacilities to fetch.
     */
    orderBy?: ResidentFacilitiesOrderByWithRelationInput | ResidentFacilitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResidentFacilities.
     */
    cursor?: ResidentFacilitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResidentFacilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResidentFacilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResidentFacilities.
     */
    distinct?: ResidentFacilitiesScalarFieldEnum | ResidentFacilitiesScalarFieldEnum[]
  }

  /**
   * ResidentFacilities findFirstOrThrow
   */
  export type ResidentFacilitiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentFacilities
     */
    select?: ResidentFacilitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentFacilities
     */
    omit?: ResidentFacilitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentFacilitiesInclude<ExtArgs> | null
    /**
     * Filter, which ResidentFacilities to fetch.
     */
    where?: ResidentFacilitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResidentFacilities to fetch.
     */
    orderBy?: ResidentFacilitiesOrderByWithRelationInput | ResidentFacilitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResidentFacilities.
     */
    cursor?: ResidentFacilitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResidentFacilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResidentFacilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResidentFacilities.
     */
    distinct?: ResidentFacilitiesScalarFieldEnum | ResidentFacilitiesScalarFieldEnum[]
  }

  /**
   * ResidentFacilities findMany
   */
  export type ResidentFacilitiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentFacilities
     */
    select?: ResidentFacilitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentFacilities
     */
    omit?: ResidentFacilitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentFacilitiesInclude<ExtArgs> | null
    /**
     * Filter, which ResidentFacilities to fetch.
     */
    where?: ResidentFacilitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResidentFacilities to fetch.
     */
    orderBy?: ResidentFacilitiesOrderByWithRelationInput | ResidentFacilitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResidentFacilities.
     */
    cursor?: ResidentFacilitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResidentFacilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResidentFacilities.
     */
    skip?: number
    distinct?: ResidentFacilitiesScalarFieldEnum | ResidentFacilitiesScalarFieldEnum[]
  }

  /**
   * ResidentFacilities create
   */
  export type ResidentFacilitiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentFacilities
     */
    select?: ResidentFacilitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentFacilities
     */
    omit?: ResidentFacilitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentFacilitiesInclude<ExtArgs> | null
    /**
     * The data needed to create a ResidentFacilities.
     */
    data: XOR<ResidentFacilitiesCreateInput, ResidentFacilitiesUncheckedCreateInput>
  }

  /**
   * ResidentFacilities createMany
   */
  export type ResidentFacilitiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResidentFacilities.
     */
    data: ResidentFacilitiesCreateManyInput | ResidentFacilitiesCreateManyInput[]
  }

  /**
   * ResidentFacilities createManyAndReturn
   */
  export type ResidentFacilitiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentFacilities
     */
    select?: ResidentFacilitiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentFacilities
     */
    omit?: ResidentFacilitiesOmit<ExtArgs> | null
    /**
     * The data used to create many ResidentFacilities.
     */
    data: ResidentFacilitiesCreateManyInput | ResidentFacilitiesCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentFacilitiesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResidentFacilities update
   */
  export type ResidentFacilitiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentFacilities
     */
    select?: ResidentFacilitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentFacilities
     */
    omit?: ResidentFacilitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentFacilitiesInclude<ExtArgs> | null
    /**
     * The data needed to update a ResidentFacilities.
     */
    data: XOR<ResidentFacilitiesUpdateInput, ResidentFacilitiesUncheckedUpdateInput>
    /**
     * Choose, which ResidentFacilities to update.
     */
    where: ResidentFacilitiesWhereUniqueInput
  }

  /**
   * ResidentFacilities updateMany
   */
  export type ResidentFacilitiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResidentFacilities.
     */
    data: XOR<ResidentFacilitiesUpdateManyMutationInput, ResidentFacilitiesUncheckedUpdateManyInput>
    /**
     * Filter which ResidentFacilities to update
     */
    where?: ResidentFacilitiesWhereInput
    /**
     * Limit how many ResidentFacilities to update.
     */
    limit?: number
  }

  /**
   * ResidentFacilities updateManyAndReturn
   */
  export type ResidentFacilitiesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentFacilities
     */
    select?: ResidentFacilitiesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentFacilities
     */
    omit?: ResidentFacilitiesOmit<ExtArgs> | null
    /**
     * The data used to update ResidentFacilities.
     */
    data: XOR<ResidentFacilitiesUpdateManyMutationInput, ResidentFacilitiesUncheckedUpdateManyInput>
    /**
     * Filter which ResidentFacilities to update
     */
    where?: ResidentFacilitiesWhereInput
    /**
     * Limit how many ResidentFacilities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentFacilitiesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResidentFacilities upsert
   */
  export type ResidentFacilitiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentFacilities
     */
    select?: ResidentFacilitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentFacilities
     */
    omit?: ResidentFacilitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentFacilitiesInclude<ExtArgs> | null
    /**
     * The filter to search for the ResidentFacilities to update in case it exists.
     */
    where: ResidentFacilitiesWhereUniqueInput
    /**
     * In case the ResidentFacilities found by the `where` argument doesn't exist, create a new ResidentFacilities with this data.
     */
    create: XOR<ResidentFacilitiesCreateInput, ResidentFacilitiesUncheckedCreateInput>
    /**
     * In case the ResidentFacilities was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResidentFacilitiesUpdateInput, ResidentFacilitiesUncheckedUpdateInput>
  }

  /**
   * ResidentFacilities delete
   */
  export type ResidentFacilitiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentFacilities
     */
    select?: ResidentFacilitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentFacilities
     */
    omit?: ResidentFacilitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentFacilitiesInclude<ExtArgs> | null
    /**
     * Filter which ResidentFacilities to delete.
     */
    where: ResidentFacilitiesWhereUniqueInput
  }

  /**
   * ResidentFacilities deleteMany
   */
  export type ResidentFacilitiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResidentFacilities to delete
     */
    where?: ResidentFacilitiesWhereInput
    /**
     * Limit how many ResidentFacilities to delete.
     */
    limit?: number
  }

  /**
   * ResidentFacilities without action
   */
  export type ResidentFacilitiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentFacilities
     */
    select?: ResidentFacilitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentFacilities
     */
    omit?: ResidentFacilitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentFacilitiesInclude<ExtArgs> | null
  }


  /**
   * Model ResidentOwner
   */

  export type AggregateResidentOwner = {
    _count: ResidentOwnerCountAggregateOutputType | null
    _avg: ResidentOwnerAvgAggregateOutputType | null
    _sum: ResidentOwnerSumAggregateOutputType | null
    _min: ResidentOwnerMinAggregateOutputType | null
    _max: ResidentOwnerMaxAggregateOutputType | null
  }

  export type ResidentOwnerAvgAggregateOutputType = {
    id: number | null
    residentId: number | null
  }

  export type ResidentOwnerSumAggregateOutputType = {
    id: number | null
    residentId: number | null
  }

  export type ResidentOwnerMinAggregateOutputType = {
    id: number | null
    residentId: number | null
    ownerName: string | null
    ownerPhone: string | null
    ownerEmail: string | null
    ownerContactLine: string | null
  }

  export type ResidentOwnerMaxAggregateOutputType = {
    id: number | null
    residentId: number | null
    ownerName: string | null
    ownerPhone: string | null
    ownerEmail: string | null
    ownerContactLine: string | null
  }

  export type ResidentOwnerCountAggregateOutputType = {
    id: number
    residentId: number
    ownerName: number
    ownerPhone: number
    ownerEmail: number
    ownerContactLine: number
    _all: number
  }


  export type ResidentOwnerAvgAggregateInputType = {
    id?: true
    residentId?: true
  }

  export type ResidentOwnerSumAggregateInputType = {
    id?: true
    residentId?: true
  }

  export type ResidentOwnerMinAggregateInputType = {
    id?: true
    residentId?: true
    ownerName?: true
    ownerPhone?: true
    ownerEmail?: true
    ownerContactLine?: true
  }

  export type ResidentOwnerMaxAggregateInputType = {
    id?: true
    residentId?: true
    ownerName?: true
    ownerPhone?: true
    ownerEmail?: true
    ownerContactLine?: true
  }

  export type ResidentOwnerCountAggregateInputType = {
    id?: true
    residentId?: true
    ownerName?: true
    ownerPhone?: true
    ownerEmail?: true
    ownerContactLine?: true
    _all?: true
  }

  export type ResidentOwnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResidentOwner to aggregate.
     */
    where?: ResidentOwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResidentOwners to fetch.
     */
    orderBy?: ResidentOwnerOrderByWithRelationInput | ResidentOwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResidentOwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResidentOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResidentOwners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResidentOwners
    **/
    _count?: true | ResidentOwnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResidentOwnerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResidentOwnerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResidentOwnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResidentOwnerMaxAggregateInputType
  }

  export type GetResidentOwnerAggregateType<T extends ResidentOwnerAggregateArgs> = {
        [P in keyof T & keyof AggregateResidentOwner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResidentOwner[P]>
      : GetScalarType<T[P], AggregateResidentOwner[P]>
  }




  export type ResidentOwnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResidentOwnerWhereInput
    orderBy?: ResidentOwnerOrderByWithAggregationInput | ResidentOwnerOrderByWithAggregationInput[]
    by: ResidentOwnerScalarFieldEnum[] | ResidentOwnerScalarFieldEnum
    having?: ResidentOwnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResidentOwnerCountAggregateInputType | true
    _avg?: ResidentOwnerAvgAggregateInputType
    _sum?: ResidentOwnerSumAggregateInputType
    _min?: ResidentOwnerMinAggregateInputType
    _max?: ResidentOwnerMaxAggregateInputType
  }

  export type ResidentOwnerGroupByOutputType = {
    id: number
    residentId: number
    ownerName: string
    ownerPhone: string
    ownerEmail: string
    ownerContactLine: string | null
    _count: ResidentOwnerCountAggregateOutputType | null
    _avg: ResidentOwnerAvgAggregateOutputType | null
    _sum: ResidentOwnerSumAggregateOutputType | null
    _min: ResidentOwnerMinAggregateOutputType | null
    _max: ResidentOwnerMaxAggregateOutputType | null
  }

  type GetResidentOwnerGroupByPayload<T extends ResidentOwnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResidentOwnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResidentOwnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResidentOwnerGroupByOutputType[P]>
            : GetScalarType<T[P], ResidentOwnerGroupByOutputType[P]>
        }
      >
    >


  export type ResidentOwnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    residentId?: boolean
    ownerName?: boolean
    ownerPhone?: boolean
    ownerEmail?: boolean
    ownerContactLine?: boolean
    resident?: boolean | ResidentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["residentOwner"]>

  export type ResidentOwnerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    residentId?: boolean
    ownerName?: boolean
    ownerPhone?: boolean
    ownerEmail?: boolean
    ownerContactLine?: boolean
    resident?: boolean | ResidentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["residentOwner"]>

  export type ResidentOwnerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    residentId?: boolean
    ownerName?: boolean
    ownerPhone?: boolean
    ownerEmail?: boolean
    ownerContactLine?: boolean
    resident?: boolean | ResidentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["residentOwner"]>

  export type ResidentOwnerSelectScalar = {
    id?: boolean
    residentId?: boolean
    ownerName?: boolean
    ownerPhone?: boolean
    ownerEmail?: boolean
    ownerContactLine?: boolean
  }

  export type ResidentOwnerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "residentId" | "ownerName" | "ownerPhone" | "ownerEmail" | "ownerContactLine", ExtArgs["result"]["residentOwner"]>
  export type ResidentOwnerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resident?: boolean | ResidentDefaultArgs<ExtArgs>
  }
  export type ResidentOwnerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resident?: boolean | ResidentDefaultArgs<ExtArgs>
  }
  export type ResidentOwnerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resident?: boolean | ResidentDefaultArgs<ExtArgs>
  }

  export type $ResidentOwnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResidentOwner"
    objects: {
      resident: Prisma.$ResidentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      residentId: number
      ownerName: string
      ownerPhone: string
      ownerEmail: string
      ownerContactLine: string | null
    }, ExtArgs["result"]["residentOwner"]>
    composites: {}
  }

  type ResidentOwnerGetPayload<S extends boolean | null | undefined | ResidentOwnerDefaultArgs> = $Result.GetResult<Prisma.$ResidentOwnerPayload, S>

  type ResidentOwnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResidentOwnerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResidentOwnerCountAggregateInputType | true
    }

  export interface ResidentOwnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResidentOwner'], meta: { name: 'ResidentOwner' } }
    /**
     * Find zero or one ResidentOwner that matches the filter.
     * @param {ResidentOwnerFindUniqueArgs} args - Arguments to find a ResidentOwner
     * @example
     * // Get one ResidentOwner
     * const residentOwner = await prisma.residentOwner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResidentOwnerFindUniqueArgs>(args: SelectSubset<T, ResidentOwnerFindUniqueArgs<ExtArgs>>): Prisma__ResidentOwnerClient<$Result.GetResult<Prisma.$ResidentOwnerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ResidentOwner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResidentOwnerFindUniqueOrThrowArgs} args - Arguments to find a ResidentOwner
     * @example
     * // Get one ResidentOwner
     * const residentOwner = await prisma.residentOwner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResidentOwnerFindUniqueOrThrowArgs>(args: SelectSubset<T, ResidentOwnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResidentOwnerClient<$Result.GetResult<Prisma.$ResidentOwnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResidentOwner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentOwnerFindFirstArgs} args - Arguments to find a ResidentOwner
     * @example
     * // Get one ResidentOwner
     * const residentOwner = await prisma.residentOwner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResidentOwnerFindFirstArgs>(args?: SelectSubset<T, ResidentOwnerFindFirstArgs<ExtArgs>>): Prisma__ResidentOwnerClient<$Result.GetResult<Prisma.$ResidentOwnerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResidentOwner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentOwnerFindFirstOrThrowArgs} args - Arguments to find a ResidentOwner
     * @example
     * // Get one ResidentOwner
     * const residentOwner = await prisma.residentOwner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResidentOwnerFindFirstOrThrowArgs>(args?: SelectSubset<T, ResidentOwnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResidentOwnerClient<$Result.GetResult<Prisma.$ResidentOwnerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ResidentOwners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentOwnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResidentOwners
     * const residentOwners = await prisma.residentOwner.findMany()
     * 
     * // Get first 10 ResidentOwners
     * const residentOwners = await prisma.residentOwner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const residentOwnerWithIdOnly = await prisma.residentOwner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResidentOwnerFindManyArgs>(args?: SelectSubset<T, ResidentOwnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResidentOwnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ResidentOwner.
     * @param {ResidentOwnerCreateArgs} args - Arguments to create a ResidentOwner.
     * @example
     * // Create one ResidentOwner
     * const ResidentOwner = await prisma.residentOwner.create({
     *   data: {
     *     // ... data to create a ResidentOwner
     *   }
     * })
     * 
     */
    create<T extends ResidentOwnerCreateArgs>(args: SelectSubset<T, ResidentOwnerCreateArgs<ExtArgs>>): Prisma__ResidentOwnerClient<$Result.GetResult<Prisma.$ResidentOwnerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ResidentOwners.
     * @param {ResidentOwnerCreateManyArgs} args - Arguments to create many ResidentOwners.
     * @example
     * // Create many ResidentOwners
     * const residentOwner = await prisma.residentOwner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResidentOwnerCreateManyArgs>(args?: SelectSubset<T, ResidentOwnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ResidentOwners and returns the data saved in the database.
     * @param {ResidentOwnerCreateManyAndReturnArgs} args - Arguments to create many ResidentOwners.
     * @example
     * // Create many ResidentOwners
     * const residentOwner = await prisma.residentOwner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ResidentOwners and only return the `id`
     * const residentOwnerWithIdOnly = await prisma.residentOwner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResidentOwnerCreateManyAndReturnArgs>(args?: SelectSubset<T, ResidentOwnerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResidentOwnerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ResidentOwner.
     * @param {ResidentOwnerDeleteArgs} args - Arguments to delete one ResidentOwner.
     * @example
     * // Delete one ResidentOwner
     * const ResidentOwner = await prisma.residentOwner.delete({
     *   where: {
     *     // ... filter to delete one ResidentOwner
     *   }
     * })
     * 
     */
    delete<T extends ResidentOwnerDeleteArgs>(args: SelectSubset<T, ResidentOwnerDeleteArgs<ExtArgs>>): Prisma__ResidentOwnerClient<$Result.GetResult<Prisma.$ResidentOwnerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ResidentOwner.
     * @param {ResidentOwnerUpdateArgs} args - Arguments to update one ResidentOwner.
     * @example
     * // Update one ResidentOwner
     * const residentOwner = await prisma.residentOwner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResidentOwnerUpdateArgs>(args: SelectSubset<T, ResidentOwnerUpdateArgs<ExtArgs>>): Prisma__ResidentOwnerClient<$Result.GetResult<Prisma.$ResidentOwnerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ResidentOwners.
     * @param {ResidentOwnerDeleteManyArgs} args - Arguments to filter ResidentOwners to delete.
     * @example
     * // Delete a few ResidentOwners
     * const { count } = await prisma.residentOwner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResidentOwnerDeleteManyArgs>(args?: SelectSubset<T, ResidentOwnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResidentOwners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentOwnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResidentOwners
     * const residentOwner = await prisma.residentOwner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResidentOwnerUpdateManyArgs>(args: SelectSubset<T, ResidentOwnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResidentOwners and returns the data updated in the database.
     * @param {ResidentOwnerUpdateManyAndReturnArgs} args - Arguments to update many ResidentOwners.
     * @example
     * // Update many ResidentOwners
     * const residentOwner = await prisma.residentOwner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ResidentOwners and only return the `id`
     * const residentOwnerWithIdOnly = await prisma.residentOwner.updateManyAndReturn({
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
    updateManyAndReturn<T extends ResidentOwnerUpdateManyAndReturnArgs>(args: SelectSubset<T, ResidentOwnerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResidentOwnerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ResidentOwner.
     * @param {ResidentOwnerUpsertArgs} args - Arguments to update or create a ResidentOwner.
     * @example
     * // Update or create a ResidentOwner
     * const residentOwner = await prisma.residentOwner.upsert({
     *   create: {
     *     // ... data to create a ResidentOwner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResidentOwner we want to update
     *   }
     * })
     */
    upsert<T extends ResidentOwnerUpsertArgs>(args: SelectSubset<T, ResidentOwnerUpsertArgs<ExtArgs>>): Prisma__ResidentOwnerClient<$Result.GetResult<Prisma.$ResidentOwnerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ResidentOwners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentOwnerCountArgs} args - Arguments to filter ResidentOwners to count.
     * @example
     * // Count the number of ResidentOwners
     * const count = await prisma.residentOwner.count({
     *   where: {
     *     // ... the filter for the ResidentOwners we want to count
     *   }
     * })
    **/
    count<T extends ResidentOwnerCountArgs>(
      args?: Subset<T, ResidentOwnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResidentOwnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResidentOwner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentOwnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResidentOwnerAggregateArgs>(args: Subset<T, ResidentOwnerAggregateArgs>): Prisma.PrismaPromise<GetResidentOwnerAggregateType<T>>

    /**
     * Group by ResidentOwner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentOwnerGroupByArgs} args - Group by arguments.
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
      T extends ResidentOwnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResidentOwnerGroupByArgs['orderBy'] }
        : { orderBy?: ResidentOwnerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResidentOwnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResidentOwnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResidentOwner model
   */
  readonly fields: ResidentOwnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResidentOwner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResidentOwnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resident<T extends ResidentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResidentDefaultArgs<ExtArgs>>): Prisma__ResidentClient<$Result.GetResult<Prisma.$ResidentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ResidentOwner model
   */
  interface ResidentOwnerFieldRefs {
    readonly id: FieldRef<"ResidentOwner", 'Int'>
    readonly residentId: FieldRef<"ResidentOwner", 'Int'>
    readonly ownerName: FieldRef<"ResidentOwner", 'String'>
    readonly ownerPhone: FieldRef<"ResidentOwner", 'String'>
    readonly ownerEmail: FieldRef<"ResidentOwner", 'String'>
    readonly ownerContactLine: FieldRef<"ResidentOwner", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ResidentOwner findUnique
   */
  export type ResidentOwnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentOwner
     */
    select?: ResidentOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentOwner
     */
    omit?: ResidentOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentOwnerInclude<ExtArgs> | null
    /**
     * Filter, which ResidentOwner to fetch.
     */
    where: ResidentOwnerWhereUniqueInput
  }

  /**
   * ResidentOwner findUniqueOrThrow
   */
  export type ResidentOwnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentOwner
     */
    select?: ResidentOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentOwner
     */
    omit?: ResidentOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentOwnerInclude<ExtArgs> | null
    /**
     * Filter, which ResidentOwner to fetch.
     */
    where: ResidentOwnerWhereUniqueInput
  }

  /**
   * ResidentOwner findFirst
   */
  export type ResidentOwnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentOwner
     */
    select?: ResidentOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentOwner
     */
    omit?: ResidentOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentOwnerInclude<ExtArgs> | null
    /**
     * Filter, which ResidentOwner to fetch.
     */
    where?: ResidentOwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResidentOwners to fetch.
     */
    orderBy?: ResidentOwnerOrderByWithRelationInput | ResidentOwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResidentOwners.
     */
    cursor?: ResidentOwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResidentOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResidentOwners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResidentOwners.
     */
    distinct?: ResidentOwnerScalarFieldEnum | ResidentOwnerScalarFieldEnum[]
  }

  /**
   * ResidentOwner findFirstOrThrow
   */
  export type ResidentOwnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentOwner
     */
    select?: ResidentOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentOwner
     */
    omit?: ResidentOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentOwnerInclude<ExtArgs> | null
    /**
     * Filter, which ResidentOwner to fetch.
     */
    where?: ResidentOwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResidentOwners to fetch.
     */
    orderBy?: ResidentOwnerOrderByWithRelationInput | ResidentOwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResidentOwners.
     */
    cursor?: ResidentOwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResidentOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResidentOwners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResidentOwners.
     */
    distinct?: ResidentOwnerScalarFieldEnum | ResidentOwnerScalarFieldEnum[]
  }

  /**
   * ResidentOwner findMany
   */
  export type ResidentOwnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentOwner
     */
    select?: ResidentOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentOwner
     */
    omit?: ResidentOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentOwnerInclude<ExtArgs> | null
    /**
     * Filter, which ResidentOwners to fetch.
     */
    where?: ResidentOwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResidentOwners to fetch.
     */
    orderBy?: ResidentOwnerOrderByWithRelationInput | ResidentOwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResidentOwners.
     */
    cursor?: ResidentOwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResidentOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResidentOwners.
     */
    skip?: number
    distinct?: ResidentOwnerScalarFieldEnum | ResidentOwnerScalarFieldEnum[]
  }

  /**
   * ResidentOwner create
   */
  export type ResidentOwnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentOwner
     */
    select?: ResidentOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentOwner
     */
    omit?: ResidentOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentOwnerInclude<ExtArgs> | null
    /**
     * The data needed to create a ResidentOwner.
     */
    data: XOR<ResidentOwnerCreateInput, ResidentOwnerUncheckedCreateInput>
  }

  /**
   * ResidentOwner createMany
   */
  export type ResidentOwnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResidentOwners.
     */
    data: ResidentOwnerCreateManyInput | ResidentOwnerCreateManyInput[]
  }

  /**
   * ResidentOwner createManyAndReturn
   */
  export type ResidentOwnerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentOwner
     */
    select?: ResidentOwnerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentOwner
     */
    omit?: ResidentOwnerOmit<ExtArgs> | null
    /**
     * The data used to create many ResidentOwners.
     */
    data: ResidentOwnerCreateManyInput | ResidentOwnerCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentOwnerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResidentOwner update
   */
  export type ResidentOwnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentOwner
     */
    select?: ResidentOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentOwner
     */
    omit?: ResidentOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentOwnerInclude<ExtArgs> | null
    /**
     * The data needed to update a ResidentOwner.
     */
    data: XOR<ResidentOwnerUpdateInput, ResidentOwnerUncheckedUpdateInput>
    /**
     * Choose, which ResidentOwner to update.
     */
    where: ResidentOwnerWhereUniqueInput
  }

  /**
   * ResidentOwner updateMany
   */
  export type ResidentOwnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResidentOwners.
     */
    data: XOR<ResidentOwnerUpdateManyMutationInput, ResidentOwnerUncheckedUpdateManyInput>
    /**
     * Filter which ResidentOwners to update
     */
    where?: ResidentOwnerWhereInput
    /**
     * Limit how many ResidentOwners to update.
     */
    limit?: number
  }

  /**
   * ResidentOwner updateManyAndReturn
   */
  export type ResidentOwnerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentOwner
     */
    select?: ResidentOwnerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentOwner
     */
    omit?: ResidentOwnerOmit<ExtArgs> | null
    /**
     * The data used to update ResidentOwners.
     */
    data: XOR<ResidentOwnerUpdateManyMutationInput, ResidentOwnerUncheckedUpdateManyInput>
    /**
     * Filter which ResidentOwners to update
     */
    where?: ResidentOwnerWhereInput
    /**
     * Limit how many ResidentOwners to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentOwnerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResidentOwner upsert
   */
  export type ResidentOwnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentOwner
     */
    select?: ResidentOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentOwner
     */
    omit?: ResidentOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentOwnerInclude<ExtArgs> | null
    /**
     * The filter to search for the ResidentOwner to update in case it exists.
     */
    where: ResidentOwnerWhereUniqueInput
    /**
     * In case the ResidentOwner found by the `where` argument doesn't exist, create a new ResidentOwner with this data.
     */
    create: XOR<ResidentOwnerCreateInput, ResidentOwnerUncheckedCreateInput>
    /**
     * In case the ResidentOwner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResidentOwnerUpdateInput, ResidentOwnerUncheckedUpdateInput>
  }

  /**
   * ResidentOwner delete
   */
  export type ResidentOwnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentOwner
     */
    select?: ResidentOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentOwner
     */
    omit?: ResidentOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentOwnerInclude<ExtArgs> | null
    /**
     * Filter which ResidentOwner to delete.
     */
    where: ResidentOwnerWhereUniqueInput
  }

  /**
   * ResidentOwner deleteMany
   */
  export type ResidentOwnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResidentOwners to delete
     */
    where?: ResidentOwnerWhereInput
    /**
     * Limit how many ResidentOwners to delete.
     */
    limit?: number
  }

  /**
   * ResidentOwner without action
   */
  export type ResidentOwnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentOwner
     */
    select?: ResidentOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentOwner
     */
    omit?: ResidentOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentOwnerInclude<ExtArgs> | null
  }


  /**
   * Model ResidentAddress
   */

  export type AggregateResidentAddress = {
    _count: ResidentAddressCountAggregateOutputType | null
    _avg: ResidentAddressAvgAggregateOutputType | null
    _sum: ResidentAddressSumAggregateOutputType | null
    _min: ResidentAddressMinAggregateOutputType | null
    _max: ResidentAddressMaxAggregateOutputType | null
  }

  export type ResidentAddressAvgAggregateOutputType = {
    id: number | null
    residentId: number | null
  }

  export type ResidentAddressSumAggregateOutputType = {
    id: number | null
    residentId: number | null
  }

  export type ResidentAddressMinAggregateOutputType = {
    id: number | null
    residentId: number | null
    houseNumber: string | null
    street: string | null
    subDistrict: string | null
    district: string | null
    province: string | null
    postalCode: string | null
  }

  export type ResidentAddressMaxAggregateOutputType = {
    id: number | null
    residentId: number | null
    houseNumber: string | null
    street: string | null
    subDistrict: string | null
    district: string | null
    province: string | null
    postalCode: string | null
  }

  export type ResidentAddressCountAggregateOutputType = {
    id: number
    residentId: number
    houseNumber: number
    street: number
    subDistrict: number
    district: number
    province: number
    postalCode: number
    _all: number
  }


  export type ResidentAddressAvgAggregateInputType = {
    id?: true
    residentId?: true
  }

  export type ResidentAddressSumAggregateInputType = {
    id?: true
    residentId?: true
  }

  export type ResidentAddressMinAggregateInputType = {
    id?: true
    residentId?: true
    houseNumber?: true
    street?: true
    subDistrict?: true
    district?: true
    province?: true
    postalCode?: true
  }

  export type ResidentAddressMaxAggregateInputType = {
    id?: true
    residentId?: true
    houseNumber?: true
    street?: true
    subDistrict?: true
    district?: true
    province?: true
    postalCode?: true
  }

  export type ResidentAddressCountAggregateInputType = {
    id?: true
    residentId?: true
    houseNumber?: true
    street?: true
    subDistrict?: true
    district?: true
    province?: true
    postalCode?: true
    _all?: true
  }

  export type ResidentAddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResidentAddress to aggregate.
     */
    where?: ResidentAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResidentAddresses to fetch.
     */
    orderBy?: ResidentAddressOrderByWithRelationInput | ResidentAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResidentAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResidentAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResidentAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResidentAddresses
    **/
    _count?: true | ResidentAddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResidentAddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResidentAddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResidentAddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResidentAddressMaxAggregateInputType
  }

  export type GetResidentAddressAggregateType<T extends ResidentAddressAggregateArgs> = {
        [P in keyof T & keyof AggregateResidentAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResidentAddress[P]>
      : GetScalarType<T[P], AggregateResidentAddress[P]>
  }




  export type ResidentAddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResidentAddressWhereInput
    orderBy?: ResidentAddressOrderByWithAggregationInput | ResidentAddressOrderByWithAggregationInput[]
    by: ResidentAddressScalarFieldEnum[] | ResidentAddressScalarFieldEnum
    having?: ResidentAddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResidentAddressCountAggregateInputType | true
    _avg?: ResidentAddressAvgAggregateInputType
    _sum?: ResidentAddressSumAggregateInputType
    _min?: ResidentAddressMinAggregateInputType
    _max?: ResidentAddressMaxAggregateInputType
  }

  export type ResidentAddressGroupByOutputType = {
    id: number
    residentId: number
    houseNumber: string
    street: string
    subDistrict: string
    district: string
    province: string
    postalCode: string
    _count: ResidentAddressCountAggregateOutputType | null
    _avg: ResidentAddressAvgAggregateOutputType | null
    _sum: ResidentAddressSumAggregateOutputType | null
    _min: ResidentAddressMinAggregateOutputType | null
    _max: ResidentAddressMaxAggregateOutputType | null
  }

  type GetResidentAddressGroupByPayload<T extends ResidentAddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResidentAddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResidentAddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResidentAddressGroupByOutputType[P]>
            : GetScalarType<T[P], ResidentAddressGroupByOutputType[P]>
        }
      >
    >


  export type ResidentAddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    residentId?: boolean
    houseNumber?: boolean
    street?: boolean
    subDistrict?: boolean
    district?: boolean
    province?: boolean
    postalCode?: boolean
    resident?: boolean | ResidentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["residentAddress"]>

  export type ResidentAddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    residentId?: boolean
    houseNumber?: boolean
    street?: boolean
    subDistrict?: boolean
    district?: boolean
    province?: boolean
    postalCode?: boolean
    resident?: boolean | ResidentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["residentAddress"]>

  export type ResidentAddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    residentId?: boolean
    houseNumber?: boolean
    street?: boolean
    subDistrict?: boolean
    district?: boolean
    province?: boolean
    postalCode?: boolean
    resident?: boolean | ResidentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["residentAddress"]>

  export type ResidentAddressSelectScalar = {
    id?: boolean
    residentId?: boolean
    houseNumber?: boolean
    street?: boolean
    subDistrict?: boolean
    district?: boolean
    province?: boolean
    postalCode?: boolean
  }

  export type ResidentAddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "residentId" | "houseNumber" | "street" | "subDistrict" | "district" | "province" | "postalCode", ExtArgs["result"]["residentAddress"]>
  export type ResidentAddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resident?: boolean | ResidentDefaultArgs<ExtArgs>
  }
  export type ResidentAddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resident?: boolean | ResidentDefaultArgs<ExtArgs>
  }
  export type ResidentAddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resident?: boolean | ResidentDefaultArgs<ExtArgs>
  }

  export type $ResidentAddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResidentAddress"
    objects: {
      resident: Prisma.$ResidentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      residentId: number
      houseNumber: string
      street: string
      subDistrict: string
      district: string
      province: string
      postalCode: string
    }, ExtArgs["result"]["residentAddress"]>
    composites: {}
  }

  type ResidentAddressGetPayload<S extends boolean | null | undefined | ResidentAddressDefaultArgs> = $Result.GetResult<Prisma.$ResidentAddressPayload, S>

  type ResidentAddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResidentAddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResidentAddressCountAggregateInputType | true
    }

  export interface ResidentAddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResidentAddress'], meta: { name: 'ResidentAddress' } }
    /**
     * Find zero or one ResidentAddress that matches the filter.
     * @param {ResidentAddressFindUniqueArgs} args - Arguments to find a ResidentAddress
     * @example
     * // Get one ResidentAddress
     * const residentAddress = await prisma.residentAddress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResidentAddressFindUniqueArgs>(args: SelectSubset<T, ResidentAddressFindUniqueArgs<ExtArgs>>): Prisma__ResidentAddressClient<$Result.GetResult<Prisma.$ResidentAddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ResidentAddress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResidentAddressFindUniqueOrThrowArgs} args - Arguments to find a ResidentAddress
     * @example
     * // Get one ResidentAddress
     * const residentAddress = await prisma.residentAddress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResidentAddressFindUniqueOrThrowArgs>(args: SelectSubset<T, ResidentAddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResidentAddressClient<$Result.GetResult<Prisma.$ResidentAddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResidentAddress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentAddressFindFirstArgs} args - Arguments to find a ResidentAddress
     * @example
     * // Get one ResidentAddress
     * const residentAddress = await prisma.residentAddress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResidentAddressFindFirstArgs>(args?: SelectSubset<T, ResidentAddressFindFirstArgs<ExtArgs>>): Prisma__ResidentAddressClient<$Result.GetResult<Prisma.$ResidentAddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResidentAddress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentAddressFindFirstOrThrowArgs} args - Arguments to find a ResidentAddress
     * @example
     * // Get one ResidentAddress
     * const residentAddress = await prisma.residentAddress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResidentAddressFindFirstOrThrowArgs>(args?: SelectSubset<T, ResidentAddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResidentAddressClient<$Result.GetResult<Prisma.$ResidentAddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ResidentAddresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentAddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResidentAddresses
     * const residentAddresses = await prisma.residentAddress.findMany()
     * 
     * // Get first 10 ResidentAddresses
     * const residentAddresses = await prisma.residentAddress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const residentAddressWithIdOnly = await prisma.residentAddress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResidentAddressFindManyArgs>(args?: SelectSubset<T, ResidentAddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResidentAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ResidentAddress.
     * @param {ResidentAddressCreateArgs} args - Arguments to create a ResidentAddress.
     * @example
     * // Create one ResidentAddress
     * const ResidentAddress = await prisma.residentAddress.create({
     *   data: {
     *     // ... data to create a ResidentAddress
     *   }
     * })
     * 
     */
    create<T extends ResidentAddressCreateArgs>(args: SelectSubset<T, ResidentAddressCreateArgs<ExtArgs>>): Prisma__ResidentAddressClient<$Result.GetResult<Prisma.$ResidentAddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ResidentAddresses.
     * @param {ResidentAddressCreateManyArgs} args - Arguments to create many ResidentAddresses.
     * @example
     * // Create many ResidentAddresses
     * const residentAddress = await prisma.residentAddress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResidentAddressCreateManyArgs>(args?: SelectSubset<T, ResidentAddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ResidentAddresses and returns the data saved in the database.
     * @param {ResidentAddressCreateManyAndReturnArgs} args - Arguments to create many ResidentAddresses.
     * @example
     * // Create many ResidentAddresses
     * const residentAddress = await prisma.residentAddress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ResidentAddresses and only return the `id`
     * const residentAddressWithIdOnly = await prisma.residentAddress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResidentAddressCreateManyAndReturnArgs>(args?: SelectSubset<T, ResidentAddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResidentAddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ResidentAddress.
     * @param {ResidentAddressDeleteArgs} args - Arguments to delete one ResidentAddress.
     * @example
     * // Delete one ResidentAddress
     * const ResidentAddress = await prisma.residentAddress.delete({
     *   where: {
     *     // ... filter to delete one ResidentAddress
     *   }
     * })
     * 
     */
    delete<T extends ResidentAddressDeleteArgs>(args: SelectSubset<T, ResidentAddressDeleteArgs<ExtArgs>>): Prisma__ResidentAddressClient<$Result.GetResult<Prisma.$ResidentAddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ResidentAddress.
     * @param {ResidentAddressUpdateArgs} args - Arguments to update one ResidentAddress.
     * @example
     * // Update one ResidentAddress
     * const residentAddress = await prisma.residentAddress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResidentAddressUpdateArgs>(args: SelectSubset<T, ResidentAddressUpdateArgs<ExtArgs>>): Prisma__ResidentAddressClient<$Result.GetResult<Prisma.$ResidentAddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ResidentAddresses.
     * @param {ResidentAddressDeleteManyArgs} args - Arguments to filter ResidentAddresses to delete.
     * @example
     * // Delete a few ResidentAddresses
     * const { count } = await prisma.residentAddress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResidentAddressDeleteManyArgs>(args?: SelectSubset<T, ResidentAddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResidentAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentAddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResidentAddresses
     * const residentAddress = await prisma.residentAddress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResidentAddressUpdateManyArgs>(args: SelectSubset<T, ResidentAddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResidentAddresses and returns the data updated in the database.
     * @param {ResidentAddressUpdateManyAndReturnArgs} args - Arguments to update many ResidentAddresses.
     * @example
     * // Update many ResidentAddresses
     * const residentAddress = await prisma.residentAddress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ResidentAddresses and only return the `id`
     * const residentAddressWithIdOnly = await prisma.residentAddress.updateManyAndReturn({
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
    updateManyAndReturn<T extends ResidentAddressUpdateManyAndReturnArgs>(args: SelectSubset<T, ResidentAddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResidentAddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ResidentAddress.
     * @param {ResidentAddressUpsertArgs} args - Arguments to update or create a ResidentAddress.
     * @example
     * // Update or create a ResidentAddress
     * const residentAddress = await prisma.residentAddress.upsert({
     *   create: {
     *     // ... data to create a ResidentAddress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResidentAddress we want to update
     *   }
     * })
     */
    upsert<T extends ResidentAddressUpsertArgs>(args: SelectSubset<T, ResidentAddressUpsertArgs<ExtArgs>>): Prisma__ResidentAddressClient<$Result.GetResult<Prisma.$ResidentAddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ResidentAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentAddressCountArgs} args - Arguments to filter ResidentAddresses to count.
     * @example
     * // Count the number of ResidentAddresses
     * const count = await prisma.residentAddress.count({
     *   where: {
     *     // ... the filter for the ResidentAddresses we want to count
     *   }
     * })
    **/
    count<T extends ResidentAddressCountArgs>(
      args?: Subset<T, ResidentAddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResidentAddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResidentAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentAddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResidentAddressAggregateArgs>(args: Subset<T, ResidentAddressAggregateArgs>): Prisma.PrismaPromise<GetResidentAddressAggregateType<T>>

    /**
     * Group by ResidentAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResidentAddressGroupByArgs} args - Group by arguments.
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
      T extends ResidentAddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResidentAddressGroupByArgs['orderBy'] }
        : { orderBy?: ResidentAddressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResidentAddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResidentAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResidentAddress model
   */
  readonly fields: ResidentAddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResidentAddress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResidentAddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resident<T extends ResidentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResidentDefaultArgs<ExtArgs>>): Prisma__ResidentClient<$Result.GetResult<Prisma.$ResidentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ResidentAddress model
   */
  interface ResidentAddressFieldRefs {
    readonly id: FieldRef<"ResidentAddress", 'Int'>
    readonly residentId: FieldRef<"ResidentAddress", 'Int'>
    readonly houseNumber: FieldRef<"ResidentAddress", 'String'>
    readonly street: FieldRef<"ResidentAddress", 'String'>
    readonly subDistrict: FieldRef<"ResidentAddress", 'String'>
    readonly district: FieldRef<"ResidentAddress", 'String'>
    readonly province: FieldRef<"ResidentAddress", 'String'>
    readonly postalCode: FieldRef<"ResidentAddress", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ResidentAddress findUnique
   */
  export type ResidentAddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentAddress
     */
    select?: ResidentAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentAddress
     */
    omit?: ResidentAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentAddressInclude<ExtArgs> | null
    /**
     * Filter, which ResidentAddress to fetch.
     */
    where: ResidentAddressWhereUniqueInput
  }

  /**
   * ResidentAddress findUniqueOrThrow
   */
  export type ResidentAddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentAddress
     */
    select?: ResidentAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentAddress
     */
    omit?: ResidentAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentAddressInclude<ExtArgs> | null
    /**
     * Filter, which ResidentAddress to fetch.
     */
    where: ResidentAddressWhereUniqueInput
  }

  /**
   * ResidentAddress findFirst
   */
  export type ResidentAddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentAddress
     */
    select?: ResidentAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentAddress
     */
    omit?: ResidentAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentAddressInclude<ExtArgs> | null
    /**
     * Filter, which ResidentAddress to fetch.
     */
    where?: ResidentAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResidentAddresses to fetch.
     */
    orderBy?: ResidentAddressOrderByWithRelationInput | ResidentAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResidentAddresses.
     */
    cursor?: ResidentAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResidentAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResidentAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResidentAddresses.
     */
    distinct?: ResidentAddressScalarFieldEnum | ResidentAddressScalarFieldEnum[]
  }

  /**
   * ResidentAddress findFirstOrThrow
   */
  export type ResidentAddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentAddress
     */
    select?: ResidentAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentAddress
     */
    omit?: ResidentAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentAddressInclude<ExtArgs> | null
    /**
     * Filter, which ResidentAddress to fetch.
     */
    where?: ResidentAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResidentAddresses to fetch.
     */
    orderBy?: ResidentAddressOrderByWithRelationInput | ResidentAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResidentAddresses.
     */
    cursor?: ResidentAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResidentAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResidentAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResidentAddresses.
     */
    distinct?: ResidentAddressScalarFieldEnum | ResidentAddressScalarFieldEnum[]
  }

  /**
   * ResidentAddress findMany
   */
  export type ResidentAddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentAddress
     */
    select?: ResidentAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentAddress
     */
    omit?: ResidentAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentAddressInclude<ExtArgs> | null
    /**
     * Filter, which ResidentAddresses to fetch.
     */
    where?: ResidentAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResidentAddresses to fetch.
     */
    orderBy?: ResidentAddressOrderByWithRelationInput | ResidentAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResidentAddresses.
     */
    cursor?: ResidentAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResidentAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResidentAddresses.
     */
    skip?: number
    distinct?: ResidentAddressScalarFieldEnum | ResidentAddressScalarFieldEnum[]
  }

  /**
   * ResidentAddress create
   */
  export type ResidentAddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentAddress
     */
    select?: ResidentAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentAddress
     */
    omit?: ResidentAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentAddressInclude<ExtArgs> | null
    /**
     * The data needed to create a ResidentAddress.
     */
    data: XOR<ResidentAddressCreateInput, ResidentAddressUncheckedCreateInput>
  }

  /**
   * ResidentAddress createMany
   */
  export type ResidentAddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResidentAddresses.
     */
    data: ResidentAddressCreateManyInput | ResidentAddressCreateManyInput[]
  }

  /**
   * ResidentAddress createManyAndReturn
   */
  export type ResidentAddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentAddress
     */
    select?: ResidentAddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentAddress
     */
    omit?: ResidentAddressOmit<ExtArgs> | null
    /**
     * The data used to create many ResidentAddresses.
     */
    data: ResidentAddressCreateManyInput | ResidentAddressCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentAddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResidentAddress update
   */
  export type ResidentAddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentAddress
     */
    select?: ResidentAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentAddress
     */
    omit?: ResidentAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentAddressInclude<ExtArgs> | null
    /**
     * The data needed to update a ResidentAddress.
     */
    data: XOR<ResidentAddressUpdateInput, ResidentAddressUncheckedUpdateInput>
    /**
     * Choose, which ResidentAddress to update.
     */
    where: ResidentAddressWhereUniqueInput
  }

  /**
   * ResidentAddress updateMany
   */
  export type ResidentAddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResidentAddresses.
     */
    data: XOR<ResidentAddressUpdateManyMutationInput, ResidentAddressUncheckedUpdateManyInput>
    /**
     * Filter which ResidentAddresses to update
     */
    where?: ResidentAddressWhereInput
    /**
     * Limit how many ResidentAddresses to update.
     */
    limit?: number
  }

  /**
   * ResidentAddress updateManyAndReturn
   */
  export type ResidentAddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentAddress
     */
    select?: ResidentAddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentAddress
     */
    omit?: ResidentAddressOmit<ExtArgs> | null
    /**
     * The data used to update ResidentAddresses.
     */
    data: XOR<ResidentAddressUpdateManyMutationInput, ResidentAddressUncheckedUpdateManyInput>
    /**
     * Filter which ResidentAddresses to update
     */
    where?: ResidentAddressWhereInput
    /**
     * Limit how many ResidentAddresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentAddressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResidentAddress upsert
   */
  export type ResidentAddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentAddress
     */
    select?: ResidentAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentAddress
     */
    omit?: ResidentAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentAddressInclude<ExtArgs> | null
    /**
     * The filter to search for the ResidentAddress to update in case it exists.
     */
    where: ResidentAddressWhereUniqueInput
    /**
     * In case the ResidentAddress found by the `where` argument doesn't exist, create a new ResidentAddress with this data.
     */
    create: XOR<ResidentAddressCreateInput, ResidentAddressUncheckedCreateInput>
    /**
     * In case the ResidentAddress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResidentAddressUpdateInput, ResidentAddressUncheckedUpdateInput>
  }

  /**
   * ResidentAddress delete
   */
  export type ResidentAddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentAddress
     */
    select?: ResidentAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentAddress
     */
    omit?: ResidentAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentAddressInclude<ExtArgs> | null
    /**
     * Filter which ResidentAddress to delete.
     */
    where: ResidentAddressWhereUniqueInput
  }

  /**
   * ResidentAddress deleteMany
   */
  export type ResidentAddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResidentAddresses to delete
     */
    where?: ResidentAddressWhereInput
    /**
     * Limit how many ResidentAddresses to delete.
     */
    limit?: number
  }

  /**
   * ResidentAddress without action
   */
  export type ResidentAddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResidentAddress
     */
    select?: ResidentAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResidentAddress
     */
    omit?: ResidentAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResidentAddressInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    id: number | null
    residentId: number | null
    userId: number | null
  }

  export type BookingSumAggregateOutputType = {
    id: number | null
    residentId: number | null
    userId: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: number | null
    residentId: number | null
    userId: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phoneNumber: string | null
    roomType: string | null
    bedType: string | null
    checkInDate: Date | null
    checkOutDate: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: number | null
    residentId: number | null
    userId: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phoneNumber: string | null
    roomType: string | null
    bedType: string | null
    checkInDate: Date | null
    checkOutDate: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    residentId: number
    userId: number
    firstName: number
    lastName: number
    email: number
    phoneNumber: number
    roomType: number
    bedType: number
    checkInDate: number
    checkOutDate: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    id?: true
    residentId?: true
    userId?: true
  }

  export type BookingSumAggregateInputType = {
    id?: true
    residentId?: true
    userId?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    residentId?: true
    userId?: true
    firstName?: true
    lastName?: true
    email?: true
    phoneNumber?: true
    roomType?: true
    bedType?: true
    checkInDate?: true
    checkOutDate?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    residentId?: true
    userId?: true
    firstName?: true
    lastName?: true
    email?: true
    phoneNumber?: true
    roomType?: true
    bedType?: true
    checkInDate?: true
    checkOutDate?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    residentId?: true
    userId?: true
    firstName?: true
    lastName?: true
    email?: true
    phoneNumber?: true
    roomType?: true
    bedType?: true
    checkInDate?: true
    checkOutDate?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: number
    residentId: number
    userId: number
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    roomType: string
    bedType: string
    checkInDate: Date
    checkOutDate: Date
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    residentId?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phoneNumber?: boolean
    roomType?: boolean
    bedType?: boolean
    checkInDate?: boolean
    checkOutDate?: boolean
    resident?: boolean | ResidentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    residentId?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phoneNumber?: boolean
    roomType?: boolean
    bedType?: boolean
    checkInDate?: boolean
    checkOutDate?: boolean
    resident?: boolean | ResidentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    residentId?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phoneNumber?: boolean
    roomType?: boolean
    bedType?: boolean
    checkInDate?: boolean
    checkOutDate?: boolean
    resident?: boolean | ResidentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    residentId?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phoneNumber?: boolean
    roomType?: boolean
    bedType?: boolean
    checkInDate?: boolean
    checkOutDate?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "residentId" | "userId" | "firstName" | "lastName" | "email" | "phoneNumber" | "roomType" | "bedType" | "checkInDate" | "checkOutDate", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resident?: boolean | ResidentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resident?: boolean | ResidentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resident?: boolean | ResidentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      resident: Prisma.$ResidentPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      residentId: number
      userId: number
      firstName: string
      lastName: string
      email: string
      phoneNumber: string
      roomType: string
      bedType: string
      checkInDate: Date
      checkOutDate: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resident<T extends ResidentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResidentDefaultArgs<ExtArgs>>): Prisma__ResidentClient<$Result.GetResult<Prisma.$ResidentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'Int'>
    readonly residentId: FieldRef<"Booking", 'Int'>
    readonly userId: FieldRef<"Booking", 'Int'>
    readonly firstName: FieldRef<"Booking", 'String'>
    readonly lastName: FieldRef<"Booking", 'String'>
    readonly email: FieldRef<"Booking", 'String'>
    readonly phoneNumber: FieldRef<"Booking", 'String'>
    readonly roomType: FieldRef<"Booking", 'String'>
    readonly bedType: FieldRef<"Booking", 'String'>
    readonly checkInDate: FieldRef<"Booking", 'DateTime'>
    readonly checkOutDate: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
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
    residentId: number | null
    userId: number | null
    cleanlinessRating: number | null
    serviceRating: number | null
    locationRating: number | null
    facilitiesRating: number | null
    overallRating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    residentId: number | null
    userId: number | null
    cleanlinessRating: number | null
    serviceRating: number | null
    locationRating: number | null
    facilitiesRating: number | null
    overallRating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    residentId: number | null
    userId: number | null
    cleanlinessRating: number | null
    serviceRating: number | null
    locationRating: number | null
    facilitiesRating: number | null
    overallRating: number | null
    message: string | null
    guestStatus: string | null
    stayPeriod: string | null
    createdAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    residentId: number | null
    userId: number | null
    cleanlinessRating: number | null
    serviceRating: number | null
    locationRating: number | null
    facilitiesRating: number | null
    overallRating: number | null
    message: string | null
    guestStatus: string | null
    stayPeriod: string | null
    createdAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    residentId: number
    userId: number
    cleanlinessRating: number
    serviceRating: number
    locationRating: number
    facilitiesRating: number
    overallRating: number
    message: number
    guestStatus: number
    stayPeriod: number
    createdAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    residentId?: true
    userId?: true
    cleanlinessRating?: true
    serviceRating?: true
    locationRating?: true
    facilitiesRating?: true
    overallRating?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    residentId?: true
    userId?: true
    cleanlinessRating?: true
    serviceRating?: true
    locationRating?: true
    facilitiesRating?: true
    overallRating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    residentId?: true
    userId?: true
    cleanlinessRating?: true
    serviceRating?: true
    locationRating?: true
    facilitiesRating?: true
    overallRating?: true
    message?: true
    guestStatus?: true
    stayPeriod?: true
    createdAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    residentId?: true
    userId?: true
    cleanlinessRating?: true
    serviceRating?: true
    locationRating?: true
    facilitiesRating?: true
    overallRating?: true
    message?: true
    guestStatus?: true
    stayPeriod?: true
    createdAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    residentId?: true
    userId?: true
    cleanlinessRating?: true
    serviceRating?: true
    locationRating?: true
    facilitiesRating?: true
    overallRating?: true
    message?: true
    guestStatus?: true
    stayPeriod?: true
    createdAt?: true
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
    residentId: number
    userId: number
    cleanlinessRating: number
    serviceRating: number
    locationRating: number
    facilitiesRating: number
    overallRating: number
    message: string
    guestStatus: string
    stayPeriod: string
    createdAt: Date
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
    residentId?: boolean
    userId?: boolean
    cleanlinessRating?: boolean
    serviceRating?: boolean
    locationRating?: boolean
    facilitiesRating?: boolean
    overallRating?: boolean
    message?: boolean
    guestStatus?: boolean
    stayPeriod?: boolean
    createdAt?: boolean
    resident?: boolean | ResidentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    residentId?: boolean
    userId?: boolean
    cleanlinessRating?: boolean
    serviceRating?: boolean
    locationRating?: boolean
    facilitiesRating?: boolean
    overallRating?: boolean
    message?: boolean
    guestStatus?: boolean
    stayPeriod?: boolean
    createdAt?: boolean
    resident?: boolean | ResidentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    residentId?: boolean
    userId?: boolean
    cleanlinessRating?: boolean
    serviceRating?: boolean
    locationRating?: boolean
    facilitiesRating?: boolean
    overallRating?: boolean
    message?: boolean
    guestStatus?: boolean
    stayPeriod?: boolean
    createdAt?: boolean
    resident?: boolean | ResidentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    residentId?: boolean
    userId?: boolean
    cleanlinessRating?: boolean
    serviceRating?: boolean
    locationRating?: boolean
    facilitiesRating?: boolean
    overallRating?: boolean
    message?: boolean
    guestStatus?: boolean
    stayPeriod?: boolean
    createdAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "residentId" | "userId" | "cleanlinessRating" | "serviceRating" | "locationRating" | "facilitiesRating" | "overallRating" | "message" | "guestStatus" | "stayPeriod" | "createdAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resident?: boolean | ResidentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resident?: boolean | ResidentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resident?: boolean | ResidentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      resident: Prisma.$ResidentPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      residentId: number
      userId: number
      cleanlinessRating: number
      serviceRating: number
      locationRating: number
      facilitiesRating: number
      overallRating: number
      message: string
      guestStatus: string
      stayPeriod: string
      createdAt: Date
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
    resident<T extends ResidentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResidentDefaultArgs<ExtArgs>>): Prisma__ResidentClient<$Result.GetResult<Prisma.$ResidentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly residentId: FieldRef<"Review", 'Int'>
    readonly userId: FieldRef<"Review", 'Int'>
    readonly cleanlinessRating: FieldRef<"Review", 'Float'>
    readonly serviceRating: FieldRef<"Review", 'Float'>
    readonly locationRating: FieldRef<"Review", 'Float'>
    readonly facilitiesRating: FieldRef<"Review", 'Float'>
    readonly overallRating: FieldRef<"Review", 'Float'>
    readonly message: FieldRef<"Review", 'String'>
    readonly guestStatus: FieldRef<"Review", 'String'>
    readonly stayPeriod: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
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
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    phoneNumber: 'phoneNumber',
    email: 'email',
    password: 'password',
    profilePicture: 'profilePicture'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ResidentScalarFieldEnum: {
    id: 'id',
    residentName: 'residentName',
    createdAt: 'createdAt'
  };

  export type ResidentScalarFieldEnum = (typeof ResidentScalarFieldEnum)[keyof typeof ResidentScalarFieldEnum]


  export const ResidentInfoScalarFieldEnum: {
    id: 'id',
    residentId: 'residentId',
    residentType: 'residentType',
    building: 'building',
    roomType: 'roomType',
    electricFee: 'electricFee',
    waterFee: 'waterFee',
    serviceFee: 'serviceFee',
    internetFee: 'internetFee',
    rentalPrice: 'rentalPrice'
  };

  export type ResidentInfoScalarFieldEnum = (typeof ResidentInfoScalarFieldEnum)[keyof typeof ResidentInfoScalarFieldEnum]


  export const ResidentFacilitiesScalarFieldEnum: {
    id: 'id',
    residentId: 'residentId',
    aircon: 'aircon',
    furnished: 'furnished',
    television: 'television',
    waterHeater: 'waterHeater',
    inRoomBathroom: 'inRoomBathroom',
    refrigerator: 'refrigerator',
    pool: 'pool',
    parking: 'parking',
    security: 'security',
    fitness: 'fitness',
    internet: 'internet'
  };

  export type ResidentFacilitiesScalarFieldEnum = (typeof ResidentFacilitiesScalarFieldEnum)[keyof typeof ResidentFacilitiesScalarFieldEnum]


  export const ResidentOwnerScalarFieldEnum: {
    id: 'id',
    residentId: 'residentId',
    ownerName: 'ownerName',
    ownerPhone: 'ownerPhone',
    ownerEmail: 'ownerEmail',
    ownerContactLine: 'ownerContactLine'
  };

  export type ResidentOwnerScalarFieldEnum = (typeof ResidentOwnerScalarFieldEnum)[keyof typeof ResidentOwnerScalarFieldEnum]


  export const ResidentAddressScalarFieldEnum: {
    id: 'id',
    residentId: 'residentId',
    houseNumber: 'houseNumber',
    street: 'street',
    subDistrict: 'subDistrict',
    district: 'district',
    province: 'province',
    postalCode: 'postalCode'
  };

  export type ResidentAddressScalarFieldEnum = (typeof ResidentAddressScalarFieldEnum)[keyof typeof ResidentAddressScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    residentId: 'residentId',
    userId: 'userId',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phoneNumber: 'phoneNumber',
    roomType: 'roomType',
    bedType: 'bedType',
    checkInDate: 'checkInDate',
    checkOutDate: 'checkOutDate'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    residentId: 'residentId',
    userId: 'userId',
    cleanlinessRating: 'cleanlinessRating',
    serviceRating: 'serviceRating',
    locationRating: 'locationRating',
    facilitiesRating: 'facilitiesRating',
    overallRating: 'overallRating',
    message: 'message',
    guestStatus: 'guestStatus',
    stayPeriod: 'stayPeriod',
    createdAt: 'createdAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    profilePicture?: StringNullableFilter<"User"> | string | null
    bookings?: BookingListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    bookings?: BookingOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    profilePicture?: StringNullableFilter<"User"> | string | null
    bookings?: BookingListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
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
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    phoneNumber?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    profilePicture?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type ResidentWhereInput = {
    AND?: ResidentWhereInput | ResidentWhereInput[]
    OR?: ResidentWhereInput[]
    NOT?: ResidentWhereInput | ResidentWhereInput[]
    id?: IntFilter<"Resident"> | number
    residentName?: StringFilter<"Resident"> | string
    createdAt?: DateTimeFilter<"Resident"> | Date | string
    info?: XOR<ResidentInfoNullableScalarRelationFilter, ResidentInfoWhereInput> | null
    facilities?: XOR<ResidentFacilitiesNullableScalarRelationFilter, ResidentFacilitiesWhereInput> | null
    owner?: XOR<ResidentOwnerNullableScalarRelationFilter, ResidentOwnerWhereInput> | null
    address?: XOR<ResidentAddressNullableScalarRelationFilter, ResidentAddressWhereInput> | null
    bookings?: BookingListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type ResidentOrderByWithRelationInput = {
    id?: SortOrder
    residentName?: SortOrder
    createdAt?: SortOrder
    info?: ResidentInfoOrderByWithRelationInput
    facilities?: ResidentFacilitiesOrderByWithRelationInput
    owner?: ResidentOwnerOrderByWithRelationInput
    address?: ResidentAddressOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type ResidentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ResidentWhereInput | ResidentWhereInput[]
    OR?: ResidentWhereInput[]
    NOT?: ResidentWhereInput | ResidentWhereInput[]
    residentName?: StringFilter<"Resident"> | string
    createdAt?: DateTimeFilter<"Resident"> | Date | string
    info?: XOR<ResidentInfoNullableScalarRelationFilter, ResidentInfoWhereInput> | null
    facilities?: XOR<ResidentFacilitiesNullableScalarRelationFilter, ResidentFacilitiesWhereInput> | null
    owner?: XOR<ResidentOwnerNullableScalarRelationFilter, ResidentOwnerWhereInput> | null
    address?: XOR<ResidentAddressNullableScalarRelationFilter, ResidentAddressWhereInput> | null
    bookings?: BookingListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id">

  export type ResidentOrderByWithAggregationInput = {
    id?: SortOrder
    residentName?: SortOrder
    createdAt?: SortOrder
    _count?: ResidentCountOrderByAggregateInput
    _avg?: ResidentAvgOrderByAggregateInput
    _max?: ResidentMaxOrderByAggregateInput
    _min?: ResidentMinOrderByAggregateInput
    _sum?: ResidentSumOrderByAggregateInput
  }

  export type ResidentScalarWhereWithAggregatesInput = {
    AND?: ResidentScalarWhereWithAggregatesInput | ResidentScalarWhereWithAggregatesInput[]
    OR?: ResidentScalarWhereWithAggregatesInput[]
    NOT?: ResidentScalarWhereWithAggregatesInput | ResidentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Resident"> | number
    residentName?: StringWithAggregatesFilter<"Resident"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Resident"> | Date | string
  }

  export type ResidentInfoWhereInput = {
    AND?: ResidentInfoWhereInput | ResidentInfoWhereInput[]
    OR?: ResidentInfoWhereInput[]
    NOT?: ResidentInfoWhereInput | ResidentInfoWhereInput[]
    id?: IntFilter<"ResidentInfo"> | number
    residentId?: IntFilter<"ResidentInfo"> | number
    residentType?: StringFilter<"ResidentInfo"> | string
    building?: StringFilter<"ResidentInfo"> | string
    roomType?: StringFilter<"ResidentInfo"> | string
    electricFee?: FloatFilter<"ResidentInfo"> | number
    waterFee?: FloatFilter<"ResidentInfo"> | number
    serviceFee?: FloatFilter<"ResidentInfo"> | number
    internetFee?: FloatFilter<"ResidentInfo"> | number
    rentalPrice?: IntFilter<"ResidentInfo"> | number
    resident?: XOR<ResidentScalarRelationFilter, ResidentWhereInput>
  }

  export type ResidentInfoOrderByWithRelationInput = {
    id?: SortOrder
    residentId?: SortOrder
    residentType?: SortOrder
    building?: SortOrder
    roomType?: SortOrder
    electricFee?: SortOrder
    waterFee?: SortOrder
    serviceFee?: SortOrder
    internetFee?: SortOrder
    rentalPrice?: SortOrder
    resident?: ResidentOrderByWithRelationInput
  }

  export type ResidentInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    residentId?: number
    AND?: ResidentInfoWhereInput | ResidentInfoWhereInput[]
    OR?: ResidentInfoWhereInput[]
    NOT?: ResidentInfoWhereInput | ResidentInfoWhereInput[]
    residentType?: StringFilter<"ResidentInfo"> | string
    building?: StringFilter<"ResidentInfo"> | string
    roomType?: StringFilter<"ResidentInfo"> | string
    electricFee?: FloatFilter<"ResidentInfo"> | number
    waterFee?: FloatFilter<"ResidentInfo"> | number
    serviceFee?: FloatFilter<"ResidentInfo"> | number
    internetFee?: FloatFilter<"ResidentInfo"> | number
    rentalPrice?: IntFilter<"ResidentInfo"> | number
    resident?: XOR<ResidentScalarRelationFilter, ResidentWhereInput>
  }, "id" | "residentId">

  export type ResidentInfoOrderByWithAggregationInput = {
    id?: SortOrder
    residentId?: SortOrder
    residentType?: SortOrder
    building?: SortOrder
    roomType?: SortOrder
    electricFee?: SortOrder
    waterFee?: SortOrder
    serviceFee?: SortOrder
    internetFee?: SortOrder
    rentalPrice?: SortOrder
    _count?: ResidentInfoCountOrderByAggregateInput
    _avg?: ResidentInfoAvgOrderByAggregateInput
    _max?: ResidentInfoMaxOrderByAggregateInput
    _min?: ResidentInfoMinOrderByAggregateInput
    _sum?: ResidentInfoSumOrderByAggregateInput
  }

  export type ResidentInfoScalarWhereWithAggregatesInput = {
    AND?: ResidentInfoScalarWhereWithAggregatesInput | ResidentInfoScalarWhereWithAggregatesInput[]
    OR?: ResidentInfoScalarWhereWithAggregatesInput[]
    NOT?: ResidentInfoScalarWhereWithAggregatesInput | ResidentInfoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ResidentInfo"> | number
    residentId?: IntWithAggregatesFilter<"ResidentInfo"> | number
    residentType?: StringWithAggregatesFilter<"ResidentInfo"> | string
    building?: StringWithAggregatesFilter<"ResidentInfo"> | string
    roomType?: StringWithAggregatesFilter<"ResidentInfo"> | string
    electricFee?: FloatWithAggregatesFilter<"ResidentInfo"> | number
    waterFee?: FloatWithAggregatesFilter<"ResidentInfo"> | number
    serviceFee?: FloatWithAggregatesFilter<"ResidentInfo"> | number
    internetFee?: FloatWithAggregatesFilter<"ResidentInfo"> | number
    rentalPrice?: IntWithAggregatesFilter<"ResidentInfo"> | number
  }

  export type ResidentFacilitiesWhereInput = {
    AND?: ResidentFacilitiesWhereInput | ResidentFacilitiesWhereInput[]
    OR?: ResidentFacilitiesWhereInput[]
    NOT?: ResidentFacilitiesWhereInput | ResidentFacilitiesWhereInput[]
    id?: IntFilter<"ResidentFacilities"> | number
    residentId?: IntFilter<"ResidentFacilities"> | number
    aircon?: BoolFilter<"ResidentFacilities"> | boolean
    furnished?: BoolFilter<"ResidentFacilities"> | boolean
    television?: BoolFilter<"ResidentFacilities"> | boolean
    waterHeater?: BoolFilter<"ResidentFacilities"> | boolean
    inRoomBathroom?: BoolFilter<"ResidentFacilities"> | boolean
    refrigerator?: BoolFilter<"ResidentFacilities"> | boolean
    pool?: BoolFilter<"ResidentFacilities"> | boolean
    parking?: BoolFilter<"ResidentFacilities"> | boolean
    security?: BoolFilter<"ResidentFacilities"> | boolean
    fitness?: BoolFilter<"ResidentFacilities"> | boolean
    internet?: BoolFilter<"ResidentFacilities"> | boolean
    resident?: XOR<ResidentScalarRelationFilter, ResidentWhereInput>
  }

  export type ResidentFacilitiesOrderByWithRelationInput = {
    id?: SortOrder
    residentId?: SortOrder
    aircon?: SortOrder
    furnished?: SortOrder
    television?: SortOrder
    waterHeater?: SortOrder
    inRoomBathroom?: SortOrder
    refrigerator?: SortOrder
    pool?: SortOrder
    parking?: SortOrder
    security?: SortOrder
    fitness?: SortOrder
    internet?: SortOrder
    resident?: ResidentOrderByWithRelationInput
  }

  export type ResidentFacilitiesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    residentId?: number
    AND?: ResidentFacilitiesWhereInput | ResidentFacilitiesWhereInput[]
    OR?: ResidentFacilitiesWhereInput[]
    NOT?: ResidentFacilitiesWhereInput | ResidentFacilitiesWhereInput[]
    aircon?: BoolFilter<"ResidentFacilities"> | boolean
    furnished?: BoolFilter<"ResidentFacilities"> | boolean
    television?: BoolFilter<"ResidentFacilities"> | boolean
    waterHeater?: BoolFilter<"ResidentFacilities"> | boolean
    inRoomBathroom?: BoolFilter<"ResidentFacilities"> | boolean
    refrigerator?: BoolFilter<"ResidentFacilities"> | boolean
    pool?: BoolFilter<"ResidentFacilities"> | boolean
    parking?: BoolFilter<"ResidentFacilities"> | boolean
    security?: BoolFilter<"ResidentFacilities"> | boolean
    fitness?: BoolFilter<"ResidentFacilities"> | boolean
    internet?: BoolFilter<"ResidentFacilities"> | boolean
    resident?: XOR<ResidentScalarRelationFilter, ResidentWhereInput>
  }, "id" | "residentId">

  export type ResidentFacilitiesOrderByWithAggregationInput = {
    id?: SortOrder
    residentId?: SortOrder
    aircon?: SortOrder
    furnished?: SortOrder
    television?: SortOrder
    waterHeater?: SortOrder
    inRoomBathroom?: SortOrder
    refrigerator?: SortOrder
    pool?: SortOrder
    parking?: SortOrder
    security?: SortOrder
    fitness?: SortOrder
    internet?: SortOrder
    _count?: ResidentFacilitiesCountOrderByAggregateInput
    _avg?: ResidentFacilitiesAvgOrderByAggregateInput
    _max?: ResidentFacilitiesMaxOrderByAggregateInput
    _min?: ResidentFacilitiesMinOrderByAggregateInput
    _sum?: ResidentFacilitiesSumOrderByAggregateInput
  }

  export type ResidentFacilitiesScalarWhereWithAggregatesInput = {
    AND?: ResidentFacilitiesScalarWhereWithAggregatesInput | ResidentFacilitiesScalarWhereWithAggregatesInput[]
    OR?: ResidentFacilitiesScalarWhereWithAggregatesInput[]
    NOT?: ResidentFacilitiesScalarWhereWithAggregatesInput | ResidentFacilitiesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ResidentFacilities"> | number
    residentId?: IntWithAggregatesFilter<"ResidentFacilities"> | number
    aircon?: BoolWithAggregatesFilter<"ResidentFacilities"> | boolean
    furnished?: BoolWithAggregatesFilter<"ResidentFacilities"> | boolean
    television?: BoolWithAggregatesFilter<"ResidentFacilities"> | boolean
    waterHeater?: BoolWithAggregatesFilter<"ResidentFacilities"> | boolean
    inRoomBathroom?: BoolWithAggregatesFilter<"ResidentFacilities"> | boolean
    refrigerator?: BoolWithAggregatesFilter<"ResidentFacilities"> | boolean
    pool?: BoolWithAggregatesFilter<"ResidentFacilities"> | boolean
    parking?: BoolWithAggregatesFilter<"ResidentFacilities"> | boolean
    security?: BoolWithAggregatesFilter<"ResidentFacilities"> | boolean
    fitness?: BoolWithAggregatesFilter<"ResidentFacilities"> | boolean
    internet?: BoolWithAggregatesFilter<"ResidentFacilities"> | boolean
  }

  export type ResidentOwnerWhereInput = {
    AND?: ResidentOwnerWhereInput | ResidentOwnerWhereInput[]
    OR?: ResidentOwnerWhereInput[]
    NOT?: ResidentOwnerWhereInput | ResidentOwnerWhereInput[]
    id?: IntFilter<"ResidentOwner"> | number
    residentId?: IntFilter<"ResidentOwner"> | number
    ownerName?: StringFilter<"ResidentOwner"> | string
    ownerPhone?: StringFilter<"ResidentOwner"> | string
    ownerEmail?: StringFilter<"ResidentOwner"> | string
    ownerContactLine?: StringNullableFilter<"ResidentOwner"> | string | null
    resident?: XOR<ResidentScalarRelationFilter, ResidentWhereInput>
  }

  export type ResidentOwnerOrderByWithRelationInput = {
    id?: SortOrder
    residentId?: SortOrder
    ownerName?: SortOrder
    ownerPhone?: SortOrder
    ownerEmail?: SortOrder
    ownerContactLine?: SortOrderInput | SortOrder
    resident?: ResidentOrderByWithRelationInput
  }

  export type ResidentOwnerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    residentId?: number
    AND?: ResidentOwnerWhereInput | ResidentOwnerWhereInput[]
    OR?: ResidentOwnerWhereInput[]
    NOT?: ResidentOwnerWhereInput | ResidentOwnerWhereInput[]
    ownerName?: StringFilter<"ResidentOwner"> | string
    ownerPhone?: StringFilter<"ResidentOwner"> | string
    ownerEmail?: StringFilter<"ResidentOwner"> | string
    ownerContactLine?: StringNullableFilter<"ResidentOwner"> | string | null
    resident?: XOR<ResidentScalarRelationFilter, ResidentWhereInput>
  }, "id" | "residentId">

  export type ResidentOwnerOrderByWithAggregationInput = {
    id?: SortOrder
    residentId?: SortOrder
    ownerName?: SortOrder
    ownerPhone?: SortOrder
    ownerEmail?: SortOrder
    ownerContactLine?: SortOrderInput | SortOrder
    _count?: ResidentOwnerCountOrderByAggregateInput
    _avg?: ResidentOwnerAvgOrderByAggregateInput
    _max?: ResidentOwnerMaxOrderByAggregateInput
    _min?: ResidentOwnerMinOrderByAggregateInput
    _sum?: ResidentOwnerSumOrderByAggregateInput
  }

  export type ResidentOwnerScalarWhereWithAggregatesInput = {
    AND?: ResidentOwnerScalarWhereWithAggregatesInput | ResidentOwnerScalarWhereWithAggregatesInput[]
    OR?: ResidentOwnerScalarWhereWithAggregatesInput[]
    NOT?: ResidentOwnerScalarWhereWithAggregatesInput | ResidentOwnerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ResidentOwner"> | number
    residentId?: IntWithAggregatesFilter<"ResidentOwner"> | number
    ownerName?: StringWithAggregatesFilter<"ResidentOwner"> | string
    ownerPhone?: StringWithAggregatesFilter<"ResidentOwner"> | string
    ownerEmail?: StringWithAggregatesFilter<"ResidentOwner"> | string
    ownerContactLine?: StringNullableWithAggregatesFilter<"ResidentOwner"> | string | null
  }

  export type ResidentAddressWhereInput = {
    AND?: ResidentAddressWhereInput | ResidentAddressWhereInput[]
    OR?: ResidentAddressWhereInput[]
    NOT?: ResidentAddressWhereInput | ResidentAddressWhereInput[]
    id?: IntFilter<"ResidentAddress"> | number
    residentId?: IntFilter<"ResidentAddress"> | number
    houseNumber?: StringFilter<"ResidentAddress"> | string
    street?: StringFilter<"ResidentAddress"> | string
    subDistrict?: StringFilter<"ResidentAddress"> | string
    district?: StringFilter<"ResidentAddress"> | string
    province?: StringFilter<"ResidentAddress"> | string
    postalCode?: StringFilter<"ResidentAddress"> | string
    resident?: XOR<ResidentScalarRelationFilter, ResidentWhereInput>
  }

  export type ResidentAddressOrderByWithRelationInput = {
    id?: SortOrder
    residentId?: SortOrder
    houseNumber?: SortOrder
    street?: SortOrder
    subDistrict?: SortOrder
    district?: SortOrder
    province?: SortOrder
    postalCode?: SortOrder
    resident?: ResidentOrderByWithRelationInput
  }

  export type ResidentAddressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    residentId?: number
    AND?: ResidentAddressWhereInput | ResidentAddressWhereInput[]
    OR?: ResidentAddressWhereInput[]
    NOT?: ResidentAddressWhereInput | ResidentAddressWhereInput[]
    houseNumber?: StringFilter<"ResidentAddress"> | string
    street?: StringFilter<"ResidentAddress"> | string
    subDistrict?: StringFilter<"ResidentAddress"> | string
    district?: StringFilter<"ResidentAddress"> | string
    province?: StringFilter<"ResidentAddress"> | string
    postalCode?: StringFilter<"ResidentAddress"> | string
    resident?: XOR<ResidentScalarRelationFilter, ResidentWhereInput>
  }, "id" | "residentId">

  export type ResidentAddressOrderByWithAggregationInput = {
    id?: SortOrder
    residentId?: SortOrder
    houseNumber?: SortOrder
    street?: SortOrder
    subDistrict?: SortOrder
    district?: SortOrder
    province?: SortOrder
    postalCode?: SortOrder
    _count?: ResidentAddressCountOrderByAggregateInput
    _avg?: ResidentAddressAvgOrderByAggregateInput
    _max?: ResidentAddressMaxOrderByAggregateInput
    _min?: ResidentAddressMinOrderByAggregateInput
    _sum?: ResidentAddressSumOrderByAggregateInput
  }

  export type ResidentAddressScalarWhereWithAggregatesInput = {
    AND?: ResidentAddressScalarWhereWithAggregatesInput | ResidentAddressScalarWhereWithAggregatesInput[]
    OR?: ResidentAddressScalarWhereWithAggregatesInput[]
    NOT?: ResidentAddressScalarWhereWithAggregatesInput | ResidentAddressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ResidentAddress"> | number
    residentId?: IntWithAggregatesFilter<"ResidentAddress"> | number
    houseNumber?: StringWithAggregatesFilter<"ResidentAddress"> | string
    street?: StringWithAggregatesFilter<"ResidentAddress"> | string
    subDistrict?: StringWithAggregatesFilter<"ResidentAddress"> | string
    district?: StringWithAggregatesFilter<"ResidentAddress"> | string
    province?: StringWithAggregatesFilter<"ResidentAddress"> | string
    postalCode?: StringWithAggregatesFilter<"ResidentAddress"> | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: IntFilter<"Booking"> | number
    residentId?: IntFilter<"Booking"> | number
    userId?: IntFilter<"Booking"> | number
    firstName?: StringFilter<"Booking"> | string
    lastName?: StringFilter<"Booking"> | string
    email?: StringFilter<"Booking"> | string
    phoneNumber?: StringFilter<"Booking"> | string
    roomType?: StringFilter<"Booking"> | string
    bedType?: StringFilter<"Booking"> | string
    checkInDate?: DateTimeFilter<"Booking"> | Date | string
    checkOutDate?: DateTimeFilter<"Booking"> | Date | string
    resident?: XOR<ResidentScalarRelationFilter, ResidentWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    residentId?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    roomType?: SortOrder
    bedType?: SortOrder
    checkInDate?: SortOrder
    checkOutDate?: SortOrder
    resident?: ResidentOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    residentId?: IntFilter<"Booking"> | number
    userId?: IntFilter<"Booking"> | number
    firstName?: StringFilter<"Booking"> | string
    lastName?: StringFilter<"Booking"> | string
    email?: StringFilter<"Booking"> | string
    phoneNumber?: StringFilter<"Booking"> | string
    roomType?: StringFilter<"Booking"> | string
    bedType?: StringFilter<"Booking"> | string
    checkInDate?: DateTimeFilter<"Booking"> | Date | string
    checkOutDate?: DateTimeFilter<"Booking"> | Date | string
    resident?: XOR<ResidentScalarRelationFilter, ResidentWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    residentId?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    roomType?: SortOrder
    bedType?: SortOrder
    checkInDate?: SortOrder
    checkOutDate?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Booking"> | number
    residentId?: IntWithAggregatesFilter<"Booking"> | number
    userId?: IntWithAggregatesFilter<"Booking"> | number
    firstName?: StringWithAggregatesFilter<"Booking"> | string
    lastName?: StringWithAggregatesFilter<"Booking"> | string
    email?: StringWithAggregatesFilter<"Booking"> | string
    phoneNumber?: StringWithAggregatesFilter<"Booking"> | string
    roomType?: StringWithAggregatesFilter<"Booking"> | string
    bedType?: StringWithAggregatesFilter<"Booking"> | string
    checkInDate?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    checkOutDate?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    residentId?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
    cleanlinessRating?: FloatFilter<"Review"> | number
    serviceRating?: FloatFilter<"Review"> | number
    locationRating?: FloatFilter<"Review"> | number
    facilitiesRating?: FloatFilter<"Review"> | number
    overallRating?: FloatFilter<"Review"> | number
    message?: StringFilter<"Review"> | string
    guestStatus?: StringFilter<"Review"> | string
    stayPeriod?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    resident?: XOR<ResidentScalarRelationFilter, ResidentWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    residentId?: SortOrder
    userId?: SortOrder
    cleanlinessRating?: SortOrder
    serviceRating?: SortOrder
    locationRating?: SortOrder
    facilitiesRating?: SortOrder
    overallRating?: SortOrder
    message?: SortOrder
    guestStatus?: SortOrder
    stayPeriod?: SortOrder
    createdAt?: SortOrder
    resident?: ResidentOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    residentId?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
    cleanlinessRating?: FloatFilter<"Review"> | number
    serviceRating?: FloatFilter<"Review"> | number
    locationRating?: FloatFilter<"Review"> | number
    facilitiesRating?: FloatFilter<"Review"> | number
    overallRating?: FloatFilter<"Review"> | number
    message?: StringFilter<"Review"> | string
    guestStatus?: StringFilter<"Review"> | string
    stayPeriod?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    resident?: XOR<ResidentScalarRelationFilter, ResidentWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    residentId?: SortOrder
    userId?: SortOrder
    cleanlinessRating?: SortOrder
    serviceRating?: SortOrder
    locationRating?: SortOrder
    facilitiesRating?: SortOrder
    overallRating?: SortOrder
    message?: SortOrder
    guestStatus?: SortOrder
    stayPeriod?: SortOrder
    createdAt?: SortOrder
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
    residentId?: IntWithAggregatesFilter<"Review"> | number
    userId?: IntWithAggregatesFilter<"Review"> | number
    cleanlinessRating?: FloatWithAggregatesFilter<"Review"> | number
    serviceRating?: FloatWithAggregatesFilter<"Review"> | number
    locationRating?: FloatWithAggregatesFilter<"Review"> | number
    facilitiesRating?: FloatWithAggregatesFilter<"Review"> | number
    overallRating?: FloatWithAggregatesFilter<"Review"> | number
    message?: StringWithAggregatesFilter<"Review"> | string
    guestStatus?: StringWithAggregatesFilter<"Review"> | string
    stayPeriod?: StringWithAggregatesFilter<"Review"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type UserCreateInput = {
    firstName: string
    lastName: string
    phoneNumber: string
    email: string
    password: string
    profilePicture?: string | null
    bookings?: BookingCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    phoneNumber: string
    email: string
    password: string
    profilePicture?: string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    phoneNumber: string
    email: string
    password: string
    profilePicture?: string | null
  }

  export type UserUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ResidentCreateInput = {
    residentName: string
    createdAt?: Date | string
    info?: ResidentInfoCreateNestedOneWithoutResidentInput
    facilities?: ResidentFacilitiesCreateNestedOneWithoutResidentInput
    owner?: ResidentOwnerCreateNestedOneWithoutResidentInput
    address?: ResidentAddressCreateNestedOneWithoutResidentInput
    bookings?: BookingCreateNestedManyWithoutResidentInput
    reviews?: ReviewCreateNestedManyWithoutResidentInput
  }

  export type ResidentUncheckedCreateInput = {
    id?: number
    residentName: string
    createdAt?: Date | string
    info?: ResidentInfoUncheckedCreateNestedOneWithoutResidentInput
    facilities?: ResidentFacilitiesUncheckedCreateNestedOneWithoutResidentInput
    owner?: ResidentOwnerUncheckedCreateNestedOneWithoutResidentInput
    address?: ResidentAddressUncheckedCreateNestedOneWithoutResidentInput
    bookings?: BookingUncheckedCreateNestedManyWithoutResidentInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutResidentInput
  }

  export type ResidentUpdateInput = {
    residentName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    info?: ResidentInfoUpdateOneWithoutResidentNestedInput
    facilities?: ResidentFacilitiesUpdateOneWithoutResidentNestedInput
    owner?: ResidentOwnerUpdateOneWithoutResidentNestedInput
    address?: ResidentAddressUpdateOneWithoutResidentNestedInput
    bookings?: BookingUpdateManyWithoutResidentNestedInput
    reviews?: ReviewUpdateManyWithoutResidentNestedInput
  }

  export type ResidentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    residentName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    info?: ResidentInfoUncheckedUpdateOneWithoutResidentNestedInput
    facilities?: ResidentFacilitiesUncheckedUpdateOneWithoutResidentNestedInput
    owner?: ResidentOwnerUncheckedUpdateOneWithoutResidentNestedInput
    address?: ResidentAddressUncheckedUpdateOneWithoutResidentNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutResidentNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutResidentNestedInput
  }

  export type ResidentCreateManyInput = {
    id?: number
    residentName: string
    createdAt?: Date | string
  }

  export type ResidentUpdateManyMutationInput = {
    residentName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResidentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    residentName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResidentInfoCreateInput = {
    residentType: string
    building: string
    roomType: string
    electricFee: number
    waterFee: number
    serviceFee: number
    internetFee: number
    rentalPrice: number
    resident: ResidentCreateNestedOneWithoutInfoInput
  }

  export type ResidentInfoUncheckedCreateInput = {
    id?: number
    residentId: number
    residentType: string
    building: string
    roomType: string
    electricFee: number
    waterFee: number
    serviceFee: number
    internetFee: number
    rentalPrice: number
  }

  export type ResidentInfoUpdateInput = {
    residentType?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    roomType?: StringFieldUpdateOperationsInput | string
    electricFee?: FloatFieldUpdateOperationsInput | number
    waterFee?: FloatFieldUpdateOperationsInput | number
    serviceFee?: FloatFieldUpdateOperationsInput | number
    internetFee?: FloatFieldUpdateOperationsInput | number
    rentalPrice?: IntFieldUpdateOperationsInput | number
    resident?: ResidentUpdateOneRequiredWithoutInfoNestedInput
  }

  export type ResidentInfoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    residentId?: IntFieldUpdateOperationsInput | number
    residentType?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    roomType?: StringFieldUpdateOperationsInput | string
    electricFee?: FloatFieldUpdateOperationsInput | number
    waterFee?: FloatFieldUpdateOperationsInput | number
    serviceFee?: FloatFieldUpdateOperationsInput | number
    internetFee?: FloatFieldUpdateOperationsInput | number
    rentalPrice?: IntFieldUpdateOperationsInput | number
  }

  export type ResidentInfoCreateManyInput = {
    id?: number
    residentId: number
    residentType: string
    building: string
    roomType: string
    electricFee: number
    waterFee: number
    serviceFee: number
    internetFee: number
    rentalPrice: number
  }

  export type ResidentInfoUpdateManyMutationInput = {
    residentType?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    roomType?: StringFieldUpdateOperationsInput | string
    electricFee?: FloatFieldUpdateOperationsInput | number
    waterFee?: FloatFieldUpdateOperationsInput | number
    serviceFee?: FloatFieldUpdateOperationsInput | number
    internetFee?: FloatFieldUpdateOperationsInput | number
    rentalPrice?: IntFieldUpdateOperationsInput | number
  }

  export type ResidentInfoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    residentId?: IntFieldUpdateOperationsInput | number
    residentType?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    roomType?: StringFieldUpdateOperationsInput | string
    electricFee?: FloatFieldUpdateOperationsInput | number
    waterFee?: FloatFieldUpdateOperationsInput | number
    serviceFee?: FloatFieldUpdateOperationsInput | number
    internetFee?: FloatFieldUpdateOperationsInput | number
    rentalPrice?: IntFieldUpdateOperationsInput | number
  }

  export type ResidentFacilitiesCreateInput = {
    aircon?: boolean
    furnished?: boolean
    television?: boolean
    waterHeater?: boolean
    inRoomBathroom?: boolean
    refrigerator?: boolean
    pool?: boolean
    parking?: boolean
    security?: boolean
    fitness?: boolean
    internet?: boolean
    resident: ResidentCreateNestedOneWithoutFacilitiesInput
  }

  export type ResidentFacilitiesUncheckedCreateInput = {
    id?: number
    residentId: number
    aircon?: boolean
    furnished?: boolean
    television?: boolean
    waterHeater?: boolean
    inRoomBathroom?: boolean
    refrigerator?: boolean
    pool?: boolean
    parking?: boolean
    security?: boolean
    fitness?: boolean
    internet?: boolean
  }

  export type ResidentFacilitiesUpdateInput = {
    aircon?: BoolFieldUpdateOperationsInput | boolean
    furnished?: BoolFieldUpdateOperationsInput | boolean
    television?: BoolFieldUpdateOperationsInput | boolean
    waterHeater?: BoolFieldUpdateOperationsInput | boolean
    inRoomBathroom?: BoolFieldUpdateOperationsInput | boolean
    refrigerator?: BoolFieldUpdateOperationsInput | boolean
    pool?: BoolFieldUpdateOperationsInput | boolean
    parking?: BoolFieldUpdateOperationsInput | boolean
    security?: BoolFieldUpdateOperationsInput | boolean
    fitness?: BoolFieldUpdateOperationsInput | boolean
    internet?: BoolFieldUpdateOperationsInput | boolean
    resident?: ResidentUpdateOneRequiredWithoutFacilitiesNestedInput
  }

  export type ResidentFacilitiesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    residentId?: IntFieldUpdateOperationsInput | number
    aircon?: BoolFieldUpdateOperationsInput | boolean
    furnished?: BoolFieldUpdateOperationsInput | boolean
    television?: BoolFieldUpdateOperationsInput | boolean
    waterHeater?: BoolFieldUpdateOperationsInput | boolean
    inRoomBathroom?: BoolFieldUpdateOperationsInput | boolean
    refrigerator?: BoolFieldUpdateOperationsInput | boolean
    pool?: BoolFieldUpdateOperationsInput | boolean
    parking?: BoolFieldUpdateOperationsInput | boolean
    security?: BoolFieldUpdateOperationsInput | boolean
    fitness?: BoolFieldUpdateOperationsInput | boolean
    internet?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ResidentFacilitiesCreateManyInput = {
    id?: number
    residentId: number
    aircon?: boolean
    furnished?: boolean
    television?: boolean
    waterHeater?: boolean
    inRoomBathroom?: boolean
    refrigerator?: boolean
    pool?: boolean
    parking?: boolean
    security?: boolean
    fitness?: boolean
    internet?: boolean
  }

  export type ResidentFacilitiesUpdateManyMutationInput = {
    aircon?: BoolFieldUpdateOperationsInput | boolean
    furnished?: BoolFieldUpdateOperationsInput | boolean
    television?: BoolFieldUpdateOperationsInput | boolean
    waterHeater?: BoolFieldUpdateOperationsInput | boolean
    inRoomBathroom?: BoolFieldUpdateOperationsInput | boolean
    refrigerator?: BoolFieldUpdateOperationsInput | boolean
    pool?: BoolFieldUpdateOperationsInput | boolean
    parking?: BoolFieldUpdateOperationsInput | boolean
    security?: BoolFieldUpdateOperationsInput | boolean
    fitness?: BoolFieldUpdateOperationsInput | boolean
    internet?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ResidentFacilitiesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    residentId?: IntFieldUpdateOperationsInput | number
    aircon?: BoolFieldUpdateOperationsInput | boolean
    furnished?: BoolFieldUpdateOperationsInput | boolean
    television?: BoolFieldUpdateOperationsInput | boolean
    waterHeater?: BoolFieldUpdateOperationsInput | boolean
    inRoomBathroom?: BoolFieldUpdateOperationsInput | boolean
    refrigerator?: BoolFieldUpdateOperationsInput | boolean
    pool?: BoolFieldUpdateOperationsInput | boolean
    parking?: BoolFieldUpdateOperationsInput | boolean
    security?: BoolFieldUpdateOperationsInput | boolean
    fitness?: BoolFieldUpdateOperationsInput | boolean
    internet?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ResidentOwnerCreateInput = {
    ownerName: string
    ownerPhone: string
    ownerEmail: string
    ownerContactLine?: string | null
    resident: ResidentCreateNestedOneWithoutOwnerInput
  }

  export type ResidentOwnerUncheckedCreateInput = {
    id?: number
    residentId: number
    ownerName: string
    ownerPhone: string
    ownerEmail: string
    ownerContactLine?: string | null
  }

  export type ResidentOwnerUpdateInput = {
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerPhone?: StringFieldUpdateOperationsInput | string
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerContactLine?: NullableStringFieldUpdateOperationsInput | string | null
    resident?: ResidentUpdateOneRequiredWithoutOwnerNestedInput
  }

  export type ResidentOwnerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    residentId?: IntFieldUpdateOperationsInput | number
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerPhone?: StringFieldUpdateOperationsInput | string
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerContactLine?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ResidentOwnerCreateManyInput = {
    id?: number
    residentId: number
    ownerName: string
    ownerPhone: string
    ownerEmail: string
    ownerContactLine?: string | null
  }

  export type ResidentOwnerUpdateManyMutationInput = {
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerPhone?: StringFieldUpdateOperationsInput | string
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerContactLine?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ResidentOwnerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    residentId?: IntFieldUpdateOperationsInput | number
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerPhone?: StringFieldUpdateOperationsInput | string
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerContactLine?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ResidentAddressCreateInput = {
    houseNumber: string
    street: string
    subDistrict: string
    district: string
    province: string
    postalCode: string
    resident: ResidentCreateNestedOneWithoutAddressInput
  }

  export type ResidentAddressUncheckedCreateInput = {
    id?: number
    residentId: number
    houseNumber: string
    street: string
    subDistrict: string
    district: string
    province: string
    postalCode: string
  }

  export type ResidentAddressUpdateInput = {
    houseNumber?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    subDistrict?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    resident?: ResidentUpdateOneRequiredWithoutAddressNestedInput
  }

  export type ResidentAddressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    residentId?: IntFieldUpdateOperationsInput | number
    houseNumber?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    subDistrict?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
  }

  export type ResidentAddressCreateManyInput = {
    id?: number
    residentId: number
    houseNumber: string
    street: string
    subDistrict: string
    district: string
    province: string
    postalCode: string
  }

  export type ResidentAddressUpdateManyMutationInput = {
    houseNumber?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    subDistrict?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
  }

  export type ResidentAddressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    residentId?: IntFieldUpdateOperationsInput | number
    houseNumber?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    subDistrict?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
  }

  export type BookingCreateInput = {
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    roomType: string
    bedType: string
    checkInDate: Date | string
    checkOutDate: Date | string
    resident: ResidentCreateNestedOneWithoutBookingsInput
    user: UserCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateInput = {
    id?: number
    residentId: number
    userId: number
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    roomType: string
    bedType: string
    checkInDate: Date | string
    checkOutDate: Date | string
  }

  export type BookingUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    roomType?: StringFieldUpdateOperationsInput | string
    bedType?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resident?: ResidentUpdateOneRequiredWithoutBookingsNestedInput
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    residentId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    roomType?: StringFieldUpdateOperationsInput | string
    bedType?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyInput = {
    id?: number
    residentId: number
    userId: number
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    roomType: string
    bedType: string
    checkInDate: Date | string
    checkOutDate: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    roomType?: StringFieldUpdateOperationsInput | string
    bedType?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    residentId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    roomType?: StringFieldUpdateOperationsInput | string
    bedType?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    cleanlinessRating: number
    serviceRating: number
    locationRating: number
    facilitiesRating: number
    overallRating: number
    message: string
    guestStatus: string
    stayPeriod: string
    createdAt?: Date | string
    resident: ResidentCreateNestedOneWithoutReviewsInput
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    residentId: number
    userId: number
    cleanlinessRating: number
    serviceRating: number
    locationRating: number
    facilitiesRating: number
    overallRating: number
    message: string
    guestStatus: string
    stayPeriod: string
    createdAt?: Date | string
  }

  export type ReviewUpdateInput = {
    cleanlinessRating?: FloatFieldUpdateOperationsInput | number
    serviceRating?: FloatFieldUpdateOperationsInput | number
    locationRating?: FloatFieldUpdateOperationsInput | number
    facilitiesRating?: FloatFieldUpdateOperationsInput | number
    overallRating?: FloatFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    guestStatus?: StringFieldUpdateOperationsInput | string
    stayPeriod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resident?: ResidentUpdateOneRequiredWithoutReviewsNestedInput
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    residentId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    cleanlinessRating?: FloatFieldUpdateOperationsInput | number
    serviceRating?: FloatFieldUpdateOperationsInput | number
    locationRating?: FloatFieldUpdateOperationsInput | number
    facilitiesRating?: FloatFieldUpdateOperationsInput | number
    overallRating?: FloatFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    guestStatus?: StringFieldUpdateOperationsInput | string
    stayPeriod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: number
    residentId: number
    userId: number
    cleanlinessRating: number
    serviceRating: number
    locationRating: number
    facilitiesRating: number
    overallRating: number
    message: string
    guestStatus: string
    stayPeriod: string
    createdAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    cleanlinessRating?: FloatFieldUpdateOperationsInput | number
    serviceRating?: FloatFieldUpdateOperationsInput | number
    locationRating?: FloatFieldUpdateOperationsInput | number
    facilitiesRating?: FloatFieldUpdateOperationsInput | number
    overallRating?: FloatFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    guestStatus?: StringFieldUpdateOperationsInput | string
    stayPeriod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    residentId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    cleanlinessRating?: FloatFieldUpdateOperationsInput | number
    serviceRating?: FloatFieldUpdateOperationsInput | number
    locationRating?: FloatFieldUpdateOperationsInput | number
    facilitiesRating?: FloatFieldUpdateOperationsInput | number
    overallRating?: FloatFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    guestStatus?: StringFieldUpdateOperationsInput | string
    stayPeriod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profilePicture?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profilePicture?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profilePicture?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ResidentInfoNullableScalarRelationFilter = {
    is?: ResidentInfoWhereInput | null
    isNot?: ResidentInfoWhereInput | null
  }

  export type ResidentFacilitiesNullableScalarRelationFilter = {
    is?: ResidentFacilitiesWhereInput | null
    isNot?: ResidentFacilitiesWhereInput | null
  }

  export type ResidentOwnerNullableScalarRelationFilter = {
    is?: ResidentOwnerWhereInput | null
    isNot?: ResidentOwnerWhereInput | null
  }

  export type ResidentAddressNullableScalarRelationFilter = {
    is?: ResidentAddressWhereInput | null
    isNot?: ResidentAddressWhereInput | null
  }

  export type ResidentCountOrderByAggregateInput = {
    id?: SortOrder
    residentName?: SortOrder
    createdAt?: SortOrder
  }

  export type ResidentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ResidentMaxOrderByAggregateInput = {
    id?: SortOrder
    residentName?: SortOrder
    createdAt?: SortOrder
  }

  export type ResidentMinOrderByAggregateInput = {
    id?: SortOrder
    residentName?: SortOrder
    createdAt?: SortOrder
  }

  export type ResidentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ResidentScalarRelationFilter = {
    is?: ResidentWhereInput
    isNot?: ResidentWhereInput
  }

  export type ResidentInfoCountOrderByAggregateInput = {
    id?: SortOrder
    residentId?: SortOrder
    residentType?: SortOrder
    building?: SortOrder
    roomType?: SortOrder
    electricFee?: SortOrder
    waterFee?: SortOrder
    serviceFee?: SortOrder
    internetFee?: SortOrder
    rentalPrice?: SortOrder
  }

  export type ResidentInfoAvgOrderByAggregateInput = {
    id?: SortOrder
    residentId?: SortOrder
    electricFee?: SortOrder
    waterFee?: SortOrder
    serviceFee?: SortOrder
    internetFee?: SortOrder
    rentalPrice?: SortOrder
  }

  export type ResidentInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    residentId?: SortOrder
    residentType?: SortOrder
    building?: SortOrder
    roomType?: SortOrder
    electricFee?: SortOrder
    waterFee?: SortOrder
    serviceFee?: SortOrder
    internetFee?: SortOrder
    rentalPrice?: SortOrder
  }

  export type ResidentInfoMinOrderByAggregateInput = {
    id?: SortOrder
    residentId?: SortOrder
    residentType?: SortOrder
    building?: SortOrder
    roomType?: SortOrder
    electricFee?: SortOrder
    waterFee?: SortOrder
    serviceFee?: SortOrder
    internetFee?: SortOrder
    rentalPrice?: SortOrder
  }

  export type ResidentInfoSumOrderByAggregateInput = {
    id?: SortOrder
    residentId?: SortOrder
    electricFee?: SortOrder
    waterFee?: SortOrder
    serviceFee?: SortOrder
    internetFee?: SortOrder
    rentalPrice?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ResidentFacilitiesCountOrderByAggregateInput = {
    id?: SortOrder
    residentId?: SortOrder
    aircon?: SortOrder
    furnished?: SortOrder
    television?: SortOrder
    waterHeater?: SortOrder
    inRoomBathroom?: SortOrder
    refrigerator?: SortOrder
    pool?: SortOrder
    parking?: SortOrder
    security?: SortOrder
    fitness?: SortOrder
    internet?: SortOrder
  }

  export type ResidentFacilitiesAvgOrderByAggregateInput = {
    id?: SortOrder
    residentId?: SortOrder
  }

  export type ResidentFacilitiesMaxOrderByAggregateInput = {
    id?: SortOrder
    residentId?: SortOrder
    aircon?: SortOrder
    furnished?: SortOrder
    television?: SortOrder
    waterHeater?: SortOrder
    inRoomBathroom?: SortOrder
    refrigerator?: SortOrder
    pool?: SortOrder
    parking?: SortOrder
    security?: SortOrder
    fitness?: SortOrder
    internet?: SortOrder
  }

  export type ResidentFacilitiesMinOrderByAggregateInput = {
    id?: SortOrder
    residentId?: SortOrder
    aircon?: SortOrder
    furnished?: SortOrder
    television?: SortOrder
    waterHeater?: SortOrder
    inRoomBathroom?: SortOrder
    refrigerator?: SortOrder
    pool?: SortOrder
    parking?: SortOrder
    security?: SortOrder
    fitness?: SortOrder
    internet?: SortOrder
  }

  export type ResidentFacilitiesSumOrderByAggregateInput = {
    id?: SortOrder
    residentId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ResidentOwnerCountOrderByAggregateInput = {
    id?: SortOrder
    residentId?: SortOrder
    ownerName?: SortOrder
    ownerPhone?: SortOrder
    ownerEmail?: SortOrder
    ownerContactLine?: SortOrder
  }

  export type ResidentOwnerAvgOrderByAggregateInput = {
    id?: SortOrder
    residentId?: SortOrder
  }

  export type ResidentOwnerMaxOrderByAggregateInput = {
    id?: SortOrder
    residentId?: SortOrder
    ownerName?: SortOrder
    ownerPhone?: SortOrder
    ownerEmail?: SortOrder
    ownerContactLine?: SortOrder
  }

  export type ResidentOwnerMinOrderByAggregateInput = {
    id?: SortOrder
    residentId?: SortOrder
    ownerName?: SortOrder
    ownerPhone?: SortOrder
    ownerEmail?: SortOrder
    ownerContactLine?: SortOrder
  }

  export type ResidentOwnerSumOrderByAggregateInput = {
    id?: SortOrder
    residentId?: SortOrder
  }

  export type ResidentAddressCountOrderByAggregateInput = {
    id?: SortOrder
    residentId?: SortOrder
    houseNumber?: SortOrder
    street?: SortOrder
    subDistrict?: SortOrder
    district?: SortOrder
    province?: SortOrder
    postalCode?: SortOrder
  }

  export type ResidentAddressAvgOrderByAggregateInput = {
    id?: SortOrder
    residentId?: SortOrder
  }

  export type ResidentAddressMaxOrderByAggregateInput = {
    id?: SortOrder
    residentId?: SortOrder
    houseNumber?: SortOrder
    street?: SortOrder
    subDistrict?: SortOrder
    district?: SortOrder
    province?: SortOrder
    postalCode?: SortOrder
  }

  export type ResidentAddressMinOrderByAggregateInput = {
    id?: SortOrder
    residentId?: SortOrder
    houseNumber?: SortOrder
    street?: SortOrder
    subDistrict?: SortOrder
    district?: SortOrder
    province?: SortOrder
    postalCode?: SortOrder
  }

  export type ResidentAddressSumOrderByAggregateInput = {
    id?: SortOrder
    residentId?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    residentId?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    roomType?: SortOrder
    bedType?: SortOrder
    checkInDate?: SortOrder
    checkOutDate?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    id?: SortOrder
    residentId?: SortOrder
    userId?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    residentId?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    roomType?: SortOrder
    bedType?: SortOrder
    checkInDate?: SortOrder
    checkOutDate?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    residentId?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    roomType?: SortOrder
    bedType?: SortOrder
    checkInDate?: SortOrder
    checkOutDate?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    id?: SortOrder
    residentId?: SortOrder
    userId?: SortOrder
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    residentId?: SortOrder
    userId?: SortOrder
    cleanlinessRating?: SortOrder
    serviceRating?: SortOrder
    locationRating?: SortOrder
    facilitiesRating?: SortOrder
    overallRating?: SortOrder
    message?: SortOrder
    guestStatus?: SortOrder
    stayPeriod?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    residentId?: SortOrder
    userId?: SortOrder
    cleanlinessRating?: SortOrder
    serviceRating?: SortOrder
    locationRating?: SortOrder
    facilitiesRating?: SortOrder
    overallRating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    residentId?: SortOrder
    userId?: SortOrder
    cleanlinessRating?: SortOrder
    serviceRating?: SortOrder
    locationRating?: SortOrder
    facilitiesRating?: SortOrder
    overallRating?: SortOrder
    message?: SortOrder
    guestStatus?: SortOrder
    stayPeriod?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    residentId?: SortOrder
    userId?: SortOrder
    cleanlinessRating?: SortOrder
    serviceRating?: SortOrder
    locationRating?: SortOrder
    facilitiesRating?: SortOrder
    overallRating?: SortOrder
    message?: SortOrder
    guestStatus?: SortOrder
    stayPeriod?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    residentId?: SortOrder
    userId?: SortOrder
    cleanlinessRating?: SortOrder
    serviceRating?: SortOrder
    locationRating?: SortOrder
    facilitiesRating?: SortOrder
    overallRating?: SortOrder
  }

  export type BookingCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
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

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
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

  export type ResidentInfoCreateNestedOneWithoutResidentInput = {
    create?: XOR<ResidentInfoCreateWithoutResidentInput, ResidentInfoUncheckedCreateWithoutResidentInput>
    connectOrCreate?: ResidentInfoCreateOrConnectWithoutResidentInput
    connect?: ResidentInfoWhereUniqueInput
  }

  export type ResidentFacilitiesCreateNestedOneWithoutResidentInput = {
    create?: XOR<ResidentFacilitiesCreateWithoutResidentInput, ResidentFacilitiesUncheckedCreateWithoutResidentInput>
    connectOrCreate?: ResidentFacilitiesCreateOrConnectWithoutResidentInput
    connect?: ResidentFacilitiesWhereUniqueInput
  }

  export type ResidentOwnerCreateNestedOneWithoutResidentInput = {
    create?: XOR<ResidentOwnerCreateWithoutResidentInput, ResidentOwnerUncheckedCreateWithoutResidentInput>
    connectOrCreate?: ResidentOwnerCreateOrConnectWithoutResidentInput
    connect?: ResidentOwnerWhereUniqueInput
  }

  export type ResidentAddressCreateNestedOneWithoutResidentInput = {
    create?: XOR<ResidentAddressCreateWithoutResidentInput, ResidentAddressUncheckedCreateWithoutResidentInput>
    connectOrCreate?: ResidentAddressCreateOrConnectWithoutResidentInput
    connect?: ResidentAddressWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutResidentInput = {
    create?: XOR<BookingCreateWithoutResidentInput, BookingUncheckedCreateWithoutResidentInput> | BookingCreateWithoutResidentInput[] | BookingUncheckedCreateWithoutResidentInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutResidentInput | BookingCreateOrConnectWithoutResidentInput[]
    createMany?: BookingCreateManyResidentInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutResidentInput = {
    create?: XOR<ReviewCreateWithoutResidentInput, ReviewUncheckedCreateWithoutResidentInput> | ReviewCreateWithoutResidentInput[] | ReviewUncheckedCreateWithoutResidentInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutResidentInput | ReviewCreateOrConnectWithoutResidentInput[]
    createMany?: ReviewCreateManyResidentInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ResidentInfoUncheckedCreateNestedOneWithoutResidentInput = {
    create?: XOR<ResidentInfoCreateWithoutResidentInput, ResidentInfoUncheckedCreateWithoutResidentInput>
    connectOrCreate?: ResidentInfoCreateOrConnectWithoutResidentInput
    connect?: ResidentInfoWhereUniqueInput
  }

  export type ResidentFacilitiesUncheckedCreateNestedOneWithoutResidentInput = {
    create?: XOR<ResidentFacilitiesCreateWithoutResidentInput, ResidentFacilitiesUncheckedCreateWithoutResidentInput>
    connectOrCreate?: ResidentFacilitiesCreateOrConnectWithoutResidentInput
    connect?: ResidentFacilitiesWhereUniqueInput
  }

  export type ResidentOwnerUncheckedCreateNestedOneWithoutResidentInput = {
    create?: XOR<ResidentOwnerCreateWithoutResidentInput, ResidentOwnerUncheckedCreateWithoutResidentInput>
    connectOrCreate?: ResidentOwnerCreateOrConnectWithoutResidentInput
    connect?: ResidentOwnerWhereUniqueInput
  }

  export type ResidentAddressUncheckedCreateNestedOneWithoutResidentInput = {
    create?: XOR<ResidentAddressCreateWithoutResidentInput, ResidentAddressUncheckedCreateWithoutResidentInput>
    connectOrCreate?: ResidentAddressCreateOrConnectWithoutResidentInput
    connect?: ResidentAddressWhereUniqueInput
  }

  export type BookingUncheckedCreateNestedManyWithoutResidentInput = {
    create?: XOR<BookingCreateWithoutResidentInput, BookingUncheckedCreateWithoutResidentInput> | BookingCreateWithoutResidentInput[] | BookingUncheckedCreateWithoutResidentInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutResidentInput | BookingCreateOrConnectWithoutResidentInput[]
    createMany?: BookingCreateManyResidentInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutResidentInput = {
    create?: XOR<ReviewCreateWithoutResidentInput, ReviewUncheckedCreateWithoutResidentInput> | ReviewCreateWithoutResidentInput[] | ReviewUncheckedCreateWithoutResidentInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutResidentInput | ReviewCreateOrConnectWithoutResidentInput[]
    createMany?: ReviewCreateManyResidentInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ResidentInfoUpdateOneWithoutResidentNestedInput = {
    create?: XOR<ResidentInfoCreateWithoutResidentInput, ResidentInfoUncheckedCreateWithoutResidentInput>
    connectOrCreate?: ResidentInfoCreateOrConnectWithoutResidentInput
    upsert?: ResidentInfoUpsertWithoutResidentInput
    disconnect?: ResidentInfoWhereInput | boolean
    delete?: ResidentInfoWhereInput | boolean
    connect?: ResidentInfoWhereUniqueInput
    update?: XOR<XOR<ResidentInfoUpdateToOneWithWhereWithoutResidentInput, ResidentInfoUpdateWithoutResidentInput>, ResidentInfoUncheckedUpdateWithoutResidentInput>
  }

  export type ResidentFacilitiesUpdateOneWithoutResidentNestedInput = {
    create?: XOR<ResidentFacilitiesCreateWithoutResidentInput, ResidentFacilitiesUncheckedCreateWithoutResidentInput>
    connectOrCreate?: ResidentFacilitiesCreateOrConnectWithoutResidentInput
    upsert?: ResidentFacilitiesUpsertWithoutResidentInput
    disconnect?: ResidentFacilitiesWhereInput | boolean
    delete?: ResidentFacilitiesWhereInput | boolean
    connect?: ResidentFacilitiesWhereUniqueInput
    update?: XOR<XOR<ResidentFacilitiesUpdateToOneWithWhereWithoutResidentInput, ResidentFacilitiesUpdateWithoutResidentInput>, ResidentFacilitiesUncheckedUpdateWithoutResidentInput>
  }

  export type ResidentOwnerUpdateOneWithoutResidentNestedInput = {
    create?: XOR<ResidentOwnerCreateWithoutResidentInput, ResidentOwnerUncheckedCreateWithoutResidentInput>
    connectOrCreate?: ResidentOwnerCreateOrConnectWithoutResidentInput
    upsert?: ResidentOwnerUpsertWithoutResidentInput
    disconnect?: ResidentOwnerWhereInput | boolean
    delete?: ResidentOwnerWhereInput | boolean
    connect?: ResidentOwnerWhereUniqueInput
    update?: XOR<XOR<ResidentOwnerUpdateToOneWithWhereWithoutResidentInput, ResidentOwnerUpdateWithoutResidentInput>, ResidentOwnerUncheckedUpdateWithoutResidentInput>
  }

  export type ResidentAddressUpdateOneWithoutResidentNestedInput = {
    create?: XOR<ResidentAddressCreateWithoutResidentInput, ResidentAddressUncheckedCreateWithoutResidentInput>
    connectOrCreate?: ResidentAddressCreateOrConnectWithoutResidentInput
    upsert?: ResidentAddressUpsertWithoutResidentInput
    disconnect?: ResidentAddressWhereInput | boolean
    delete?: ResidentAddressWhereInput | boolean
    connect?: ResidentAddressWhereUniqueInput
    update?: XOR<XOR<ResidentAddressUpdateToOneWithWhereWithoutResidentInput, ResidentAddressUpdateWithoutResidentInput>, ResidentAddressUncheckedUpdateWithoutResidentInput>
  }

  export type BookingUpdateManyWithoutResidentNestedInput = {
    create?: XOR<BookingCreateWithoutResidentInput, BookingUncheckedCreateWithoutResidentInput> | BookingCreateWithoutResidentInput[] | BookingUncheckedCreateWithoutResidentInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutResidentInput | BookingCreateOrConnectWithoutResidentInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutResidentInput | BookingUpsertWithWhereUniqueWithoutResidentInput[]
    createMany?: BookingCreateManyResidentInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutResidentInput | BookingUpdateWithWhereUniqueWithoutResidentInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutResidentInput | BookingUpdateManyWithWhereWithoutResidentInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutResidentNestedInput = {
    create?: XOR<ReviewCreateWithoutResidentInput, ReviewUncheckedCreateWithoutResidentInput> | ReviewCreateWithoutResidentInput[] | ReviewUncheckedCreateWithoutResidentInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutResidentInput | ReviewCreateOrConnectWithoutResidentInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutResidentInput | ReviewUpsertWithWhereUniqueWithoutResidentInput[]
    createMany?: ReviewCreateManyResidentInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutResidentInput | ReviewUpdateWithWhereUniqueWithoutResidentInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutResidentInput | ReviewUpdateManyWithWhereWithoutResidentInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ResidentInfoUncheckedUpdateOneWithoutResidentNestedInput = {
    create?: XOR<ResidentInfoCreateWithoutResidentInput, ResidentInfoUncheckedCreateWithoutResidentInput>
    connectOrCreate?: ResidentInfoCreateOrConnectWithoutResidentInput
    upsert?: ResidentInfoUpsertWithoutResidentInput
    disconnect?: ResidentInfoWhereInput | boolean
    delete?: ResidentInfoWhereInput | boolean
    connect?: ResidentInfoWhereUniqueInput
    update?: XOR<XOR<ResidentInfoUpdateToOneWithWhereWithoutResidentInput, ResidentInfoUpdateWithoutResidentInput>, ResidentInfoUncheckedUpdateWithoutResidentInput>
  }

  export type ResidentFacilitiesUncheckedUpdateOneWithoutResidentNestedInput = {
    create?: XOR<ResidentFacilitiesCreateWithoutResidentInput, ResidentFacilitiesUncheckedCreateWithoutResidentInput>
    connectOrCreate?: ResidentFacilitiesCreateOrConnectWithoutResidentInput
    upsert?: ResidentFacilitiesUpsertWithoutResidentInput
    disconnect?: ResidentFacilitiesWhereInput | boolean
    delete?: ResidentFacilitiesWhereInput | boolean
    connect?: ResidentFacilitiesWhereUniqueInput
    update?: XOR<XOR<ResidentFacilitiesUpdateToOneWithWhereWithoutResidentInput, ResidentFacilitiesUpdateWithoutResidentInput>, ResidentFacilitiesUncheckedUpdateWithoutResidentInput>
  }

  export type ResidentOwnerUncheckedUpdateOneWithoutResidentNestedInput = {
    create?: XOR<ResidentOwnerCreateWithoutResidentInput, ResidentOwnerUncheckedCreateWithoutResidentInput>
    connectOrCreate?: ResidentOwnerCreateOrConnectWithoutResidentInput
    upsert?: ResidentOwnerUpsertWithoutResidentInput
    disconnect?: ResidentOwnerWhereInput | boolean
    delete?: ResidentOwnerWhereInput | boolean
    connect?: ResidentOwnerWhereUniqueInput
    update?: XOR<XOR<ResidentOwnerUpdateToOneWithWhereWithoutResidentInput, ResidentOwnerUpdateWithoutResidentInput>, ResidentOwnerUncheckedUpdateWithoutResidentInput>
  }

  export type ResidentAddressUncheckedUpdateOneWithoutResidentNestedInput = {
    create?: XOR<ResidentAddressCreateWithoutResidentInput, ResidentAddressUncheckedCreateWithoutResidentInput>
    connectOrCreate?: ResidentAddressCreateOrConnectWithoutResidentInput
    upsert?: ResidentAddressUpsertWithoutResidentInput
    disconnect?: ResidentAddressWhereInput | boolean
    delete?: ResidentAddressWhereInput | boolean
    connect?: ResidentAddressWhereUniqueInput
    update?: XOR<XOR<ResidentAddressUpdateToOneWithWhereWithoutResidentInput, ResidentAddressUpdateWithoutResidentInput>, ResidentAddressUncheckedUpdateWithoutResidentInput>
  }

  export type BookingUncheckedUpdateManyWithoutResidentNestedInput = {
    create?: XOR<BookingCreateWithoutResidentInput, BookingUncheckedCreateWithoutResidentInput> | BookingCreateWithoutResidentInput[] | BookingUncheckedCreateWithoutResidentInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutResidentInput | BookingCreateOrConnectWithoutResidentInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutResidentInput | BookingUpsertWithWhereUniqueWithoutResidentInput[]
    createMany?: BookingCreateManyResidentInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutResidentInput | BookingUpdateWithWhereUniqueWithoutResidentInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutResidentInput | BookingUpdateManyWithWhereWithoutResidentInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutResidentNestedInput = {
    create?: XOR<ReviewCreateWithoutResidentInput, ReviewUncheckedCreateWithoutResidentInput> | ReviewCreateWithoutResidentInput[] | ReviewUncheckedCreateWithoutResidentInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutResidentInput | ReviewCreateOrConnectWithoutResidentInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutResidentInput | ReviewUpsertWithWhereUniqueWithoutResidentInput[]
    createMany?: ReviewCreateManyResidentInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutResidentInput | ReviewUpdateWithWhereUniqueWithoutResidentInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutResidentInput | ReviewUpdateManyWithWhereWithoutResidentInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ResidentCreateNestedOneWithoutInfoInput = {
    create?: XOR<ResidentCreateWithoutInfoInput, ResidentUncheckedCreateWithoutInfoInput>
    connectOrCreate?: ResidentCreateOrConnectWithoutInfoInput
    connect?: ResidentWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ResidentUpdateOneRequiredWithoutInfoNestedInput = {
    create?: XOR<ResidentCreateWithoutInfoInput, ResidentUncheckedCreateWithoutInfoInput>
    connectOrCreate?: ResidentCreateOrConnectWithoutInfoInput
    upsert?: ResidentUpsertWithoutInfoInput
    connect?: ResidentWhereUniqueInput
    update?: XOR<XOR<ResidentUpdateToOneWithWhereWithoutInfoInput, ResidentUpdateWithoutInfoInput>, ResidentUncheckedUpdateWithoutInfoInput>
  }

  export type ResidentCreateNestedOneWithoutFacilitiesInput = {
    create?: XOR<ResidentCreateWithoutFacilitiesInput, ResidentUncheckedCreateWithoutFacilitiesInput>
    connectOrCreate?: ResidentCreateOrConnectWithoutFacilitiesInput
    connect?: ResidentWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ResidentUpdateOneRequiredWithoutFacilitiesNestedInput = {
    create?: XOR<ResidentCreateWithoutFacilitiesInput, ResidentUncheckedCreateWithoutFacilitiesInput>
    connectOrCreate?: ResidentCreateOrConnectWithoutFacilitiesInput
    upsert?: ResidentUpsertWithoutFacilitiesInput
    connect?: ResidentWhereUniqueInput
    update?: XOR<XOR<ResidentUpdateToOneWithWhereWithoutFacilitiesInput, ResidentUpdateWithoutFacilitiesInput>, ResidentUncheckedUpdateWithoutFacilitiesInput>
  }

  export type ResidentCreateNestedOneWithoutOwnerInput = {
    create?: XOR<ResidentCreateWithoutOwnerInput, ResidentUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: ResidentCreateOrConnectWithoutOwnerInput
    connect?: ResidentWhereUniqueInput
  }

  export type ResidentUpdateOneRequiredWithoutOwnerNestedInput = {
    create?: XOR<ResidentCreateWithoutOwnerInput, ResidentUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: ResidentCreateOrConnectWithoutOwnerInput
    upsert?: ResidentUpsertWithoutOwnerInput
    connect?: ResidentWhereUniqueInput
    update?: XOR<XOR<ResidentUpdateToOneWithWhereWithoutOwnerInput, ResidentUpdateWithoutOwnerInput>, ResidentUncheckedUpdateWithoutOwnerInput>
  }

  export type ResidentCreateNestedOneWithoutAddressInput = {
    create?: XOR<ResidentCreateWithoutAddressInput, ResidentUncheckedCreateWithoutAddressInput>
    connectOrCreate?: ResidentCreateOrConnectWithoutAddressInput
    connect?: ResidentWhereUniqueInput
  }

  export type ResidentUpdateOneRequiredWithoutAddressNestedInput = {
    create?: XOR<ResidentCreateWithoutAddressInput, ResidentUncheckedCreateWithoutAddressInput>
    connectOrCreate?: ResidentCreateOrConnectWithoutAddressInput
    upsert?: ResidentUpsertWithoutAddressInput
    connect?: ResidentWhereUniqueInput
    update?: XOR<XOR<ResidentUpdateToOneWithWhereWithoutAddressInput, ResidentUpdateWithoutAddressInput>, ResidentUncheckedUpdateWithoutAddressInput>
  }

  export type ResidentCreateNestedOneWithoutBookingsInput = {
    create?: XOR<ResidentCreateWithoutBookingsInput, ResidentUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ResidentCreateOrConnectWithoutBookingsInput
    connect?: ResidentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBookingsInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    connect?: UserWhereUniqueInput
  }

  export type ResidentUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<ResidentCreateWithoutBookingsInput, ResidentUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ResidentCreateOrConnectWithoutBookingsInput
    upsert?: ResidentUpsertWithoutBookingsInput
    connect?: ResidentWhereUniqueInput
    update?: XOR<XOR<ResidentUpdateToOneWithWhereWithoutBookingsInput, ResidentUpdateWithoutBookingsInput>, ResidentUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    upsert?: UserUpsertWithoutBookingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingsInput, UserUpdateWithoutBookingsInput>, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type ResidentCreateNestedOneWithoutReviewsInput = {
    create?: XOR<ResidentCreateWithoutReviewsInput, ResidentUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ResidentCreateOrConnectWithoutReviewsInput
    connect?: ResidentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type ResidentUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<ResidentCreateWithoutReviewsInput, ResidentUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ResidentCreateOrConnectWithoutReviewsInput
    upsert?: ResidentUpsertWithoutReviewsInput
    connect?: ResidentWhereUniqueInput
    update?: XOR<XOR<ResidentUpdateToOneWithWhereWithoutReviewsInput, ResidentUpdateWithoutReviewsInput>, ResidentUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type BookingCreateWithoutUserInput = {
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    roomType: string
    bedType: string
    checkInDate: Date | string
    checkOutDate: Date | string
    resident: ResidentCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutUserInput = {
    id?: number
    residentId: number
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    roomType: string
    bedType: string
    checkInDate: Date | string
    checkOutDate: Date | string
  }

  export type BookingCreateOrConnectWithoutUserInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingCreateManyUserInputEnvelope = {
    data: BookingCreateManyUserInput | BookingCreateManyUserInput[]
  }

  export type ReviewCreateWithoutUserInput = {
    cleanlinessRating: number
    serviceRating: number
    locationRating: number
    facilitiesRating: number
    overallRating: number
    message: string
    guestStatus: string
    stayPeriod: string
    createdAt?: Date | string
    resident: ResidentCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: number
    residentId: number
    cleanlinessRating: number
    serviceRating: number
    locationRating: number
    facilitiesRating: number
    overallRating: number
    message: string
    guestStatus: string
    stayPeriod: string
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
  }

  export type BookingUpsertWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
  }

  export type BookingUpdateManyWithWhereWithoutUserInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutUserInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: IntFilter<"Booking"> | number
    residentId?: IntFilter<"Booking"> | number
    userId?: IntFilter<"Booking"> | number
    firstName?: StringFilter<"Booking"> | string
    lastName?: StringFilter<"Booking"> | string
    email?: StringFilter<"Booking"> | string
    phoneNumber?: StringFilter<"Booking"> | string
    roomType?: StringFilter<"Booking"> | string
    bedType?: StringFilter<"Booking"> | string
    checkInDate?: DateTimeFilter<"Booking"> | Date | string
    checkOutDate?: DateTimeFilter<"Booking"> | Date | string
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
    residentId?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
    cleanlinessRating?: FloatFilter<"Review"> | number
    serviceRating?: FloatFilter<"Review"> | number
    locationRating?: FloatFilter<"Review"> | number
    facilitiesRating?: FloatFilter<"Review"> | number
    overallRating?: FloatFilter<"Review"> | number
    message?: StringFilter<"Review"> | string
    guestStatus?: StringFilter<"Review"> | string
    stayPeriod?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type ResidentInfoCreateWithoutResidentInput = {
    residentType: string
    building: string
    roomType: string
    electricFee: number
    waterFee: number
    serviceFee: number
    internetFee: number
    rentalPrice: number
  }

  export type ResidentInfoUncheckedCreateWithoutResidentInput = {
    id?: number
    residentType: string
    building: string
    roomType: string
    electricFee: number
    waterFee: number
    serviceFee: number
    internetFee: number
    rentalPrice: number
  }

  export type ResidentInfoCreateOrConnectWithoutResidentInput = {
    where: ResidentInfoWhereUniqueInput
    create: XOR<ResidentInfoCreateWithoutResidentInput, ResidentInfoUncheckedCreateWithoutResidentInput>
  }

  export type ResidentFacilitiesCreateWithoutResidentInput = {
    aircon?: boolean
    furnished?: boolean
    television?: boolean
    waterHeater?: boolean
    inRoomBathroom?: boolean
    refrigerator?: boolean
    pool?: boolean
    parking?: boolean
    security?: boolean
    fitness?: boolean
    internet?: boolean
  }

  export type ResidentFacilitiesUncheckedCreateWithoutResidentInput = {
    id?: number
    aircon?: boolean
    furnished?: boolean
    television?: boolean
    waterHeater?: boolean
    inRoomBathroom?: boolean
    refrigerator?: boolean
    pool?: boolean
    parking?: boolean
    security?: boolean
    fitness?: boolean
    internet?: boolean
  }

  export type ResidentFacilitiesCreateOrConnectWithoutResidentInput = {
    where: ResidentFacilitiesWhereUniqueInput
    create: XOR<ResidentFacilitiesCreateWithoutResidentInput, ResidentFacilitiesUncheckedCreateWithoutResidentInput>
  }

  export type ResidentOwnerCreateWithoutResidentInput = {
    ownerName: string
    ownerPhone: string
    ownerEmail: string
    ownerContactLine?: string | null
  }

  export type ResidentOwnerUncheckedCreateWithoutResidentInput = {
    id?: number
    ownerName: string
    ownerPhone: string
    ownerEmail: string
    ownerContactLine?: string | null
  }

  export type ResidentOwnerCreateOrConnectWithoutResidentInput = {
    where: ResidentOwnerWhereUniqueInput
    create: XOR<ResidentOwnerCreateWithoutResidentInput, ResidentOwnerUncheckedCreateWithoutResidentInput>
  }

  export type ResidentAddressCreateWithoutResidentInput = {
    houseNumber: string
    street: string
    subDistrict: string
    district: string
    province: string
    postalCode: string
  }

  export type ResidentAddressUncheckedCreateWithoutResidentInput = {
    id?: number
    houseNumber: string
    street: string
    subDistrict: string
    district: string
    province: string
    postalCode: string
  }

  export type ResidentAddressCreateOrConnectWithoutResidentInput = {
    where: ResidentAddressWhereUniqueInput
    create: XOR<ResidentAddressCreateWithoutResidentInput, ResidentAddressUncheckedCreateWithoutResidentInput>
  }

  export type BookingCreateWithoutResidentInput = {
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    roomType: string
    bedType: string
    checkInDate: Date | string
    checkOutDate: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutResidentInput = {
    id?: number
    userId: number
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    roomType: string
    bedType: string
    checkInDate: Date | string
    checkOutDate: Date | string
  }

  export type BookingCreateOrConnectWithoutResidentInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutResidentInput, BookingUncheckedCreateWithoutResidentInput>
  }

  export type BookingCreateManyResidentInputEnvelope = {
    data: BookingCreateManyResidentInput | BookingCreateManyResidentInput[]
  }

  export type ReviewCreateWithoutResidentInput = {
    cleanlinessRating: number
    serviceRating: number
    locationRating: number
    facilitiesRating: number
    overallRating: number
    message: string
    guestStatus: string
    stayPeriod: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutResidentInput = {
    id?: number
    userId: number
    cleanlinessRating: number
    serviceRating: number
    locationRating: number
    facilitiesRating: number
    overallRating: number
    message: string
    guestStatus: string
    stayPeriod: string
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutResidentInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutResidentInput, ReviewUncheckedCreateWithoutResidentInput>
  }

  export type ReviewCreateManyResidentInputEnvelope = {
    data: ReviewCreateManyResidentInput | ReviewCreateManyResidentInput[]
  }

  export type ResidentInfoUpsertWithoutResidentInput = {
    update: XOR<ResidentInfoUpdateWithoutResidentInput, ResidentInfoUncheckedUpdateWithoutResidentInput>
    create: XOR<ResidentInfoCreateWithoutResidentInput, ResidentInfoUncheckedCreateWithoutResidentInput>
    where?: ResidentInfoWhereInput
  }

  export type ResidentInfoUpdateToOneWithWhereWithoutResidentInput = {
    where?: ResidentInfoWhereInput
    data: XOR<ResidentInfoUpdateWithoutResidentInput, ResidentInfoUncheckedUpdateWithoutResidentInput>
  }

  export type ResidentInfoUpdateWithoutResidentInput = {
    residentType?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    roomType?: StringFieldUpdateOperationsInput | string
    electricFee?: FloatFieldUpdateOperationsInput | number
    waterFee?: FloatFieldUpdateOperationsInput | number
    serviceFee?: FloatFieldUpdateOperationsInput | number
    internetFee?: FloatFieldUpdateOperationsInput | number
    rentalPrice?: IntFieldUpdateOperationsInput | number
  }

  export type ResidentInfoUncheckedUpdateWithoutResidentInput = {
    id?: IntFieldUpdateOperationsInput | number
    residentType?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    roomType?: StringFieldUpdateOperationsInput | string
    electricFee?: FloatFieldUpdateOperationsInput | number
    waterFee?: FloatFieldUpdateOperationsInput | number
    serviceFee?: FloatFieldUpdateOperationsInput | number
    internetFee?: FloatFieldUpdateOperationsInput | number
    rentalPrice?: IntFieldUpdateOperationsInput | number
  }

  export type ResidentFacilitiesUpsertWithoutResidentInput = {
    update: XOR<ResidentFacilitiesUpdateWithoutResidentInput, ResidentFacilitiesUncheckedUpdateWithoutResidentInput>
    create: XOR<ResidentFacilitiesCreateWithoutResidentInput, ResidentFacilitiesUncheckedCreateWithoutResidentInput>
    where?: ResidentFacilitiesWhereInput
  }

  export type ResidentFacilitiesUpdateToOneWithWhereWithoutResidentInput = {
    where?: ResidentFacilitiesWhereInput
    data: XOR<ResidentFacilitiesUpdateWithoutResidentInput, ResidentFacilitiesUncheckedUpdateWithoutResidentInput>
  }

  export type ResidentFacilitiesUpdateWithoutResidentInput = {
    aircon?: BoolFieldUpdateOperationsInput | boolean
    furnished?: BoolFieldUpdateOperationsInput | boolean
    television?: BoolFieldUpdateOperationsInput | boolean
    waterHeater?: BoolFieldUpdateOperationsInput | boolean
    inRoomBathroom?: BoolFieldUpdateOperationsInput | boolean
    refrigerator?: BoolFieldUpdateOperationsInput | boolean
    pool?: BoolFieldUpdateOperationsInput | boolean
    parking?: BoolFieldUpdateOperationsInput | boolean
    security?: BoolFieldUpdateOperationsInput | boolean
    fitness?: BoolFieldUpdateOperationsInput | boolean
    internet?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ResidentFacilitiesUncheckedUpdateWithoutResidentInput = {
    id?: IntFieldUpdateOperationsInput | number
    aircon?: BoolFieldUpdateOperationsInput | boolean
    furnished?: BoolFieldUpdateOperationsInput | boolean
    television?: BoolFieldUpdateOperationsInput | boolean
    waterHeater?: BoolFieldUpdateOperationsInput | boolean
    inRoomBathroom?: BoolFieldUpdateOperationsInput | boolean
    refrigerator?: BoolFieldUpdateOperationsInput | boolean
    pool?: BoolFieldUpdateOperationsInput | boolean
    parking?: BoolFieldUpdateOperationsInput | boolean
    security?: BoolFieldUpdateOperationsInput | boolean
    fitness?: BoolFieldUpdateOperationsInput | boolean
    internet?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ResidentOwnerUpsertWithoutResidentInput = {
    update: XOR<ResidentOwnerUpdateWithoutResidentInput, ResidentOwnerUncheckedUpdateWithoutResidentInput>
    create: XOR<ResidentOwnerCreateWithoutResidentInput, ResidentOwnerUncheckedCreateWithoutResidentInput>
    where?: ResidentOwnerWhereInput
  }

  export type ResidentOwnerUpdateToOneWithWhereWithoutResidentInput = {
    where?: ResidentOwnerWhereInput
    data: XOR<ResidentOwnerUpdateWithoutResidentInput, ResidentOwnerUncheckedUpdateWithoutResidentInput>
  }

  export type ResidentOwnerUpdateWithoutResidentInput = {
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerPhone?: StringFieldUpdateOperationsInput | string
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerContactLine?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ResidentOwnerUncheckedUpdateWithoutResidentInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerName?: StringFieldUpdateOperationsInput | string
    ownerPhone?: StringFieldUpdateOperationsInput | string
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerContactLine?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ResidentAddressUpsertWithoutResidentInput = {
    update: XOR<ResidentAddressUpdateWithoutResidentInput, ResidentAddressUncheckedUpdateWithoutResidentInput>
    create: XOR<ResidentAddressCreateWithoutResidentInput, ResidentAddressUncheckedCreateWithoutResidentInput>
    where?: ResidentAddressWhereInput
  }

  export type ResidentAddressUpdateToOneWithWhereWithoutResidentInput = {
    where?: ResidentAddressWhereInput
    data: XOR<ResidentAddressUpdateWithoutResidentInput, ResidentAddressUncheckedUpdateWithoutResidentInput>
  }

  export type ResidentAddressUpdateWithoutResidentInput = {
    houseNumber?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    subDistrict?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
  }

  export type ResidentAddressUncheckedUpdateWithoutResidentInput = {
    id?: IntFieldUpdateOperationsInput | number
    houseNumber?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    subDistrict?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
  }

  export type BookingUpsertWithWhereUniqueWithoutResidentInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutResidentInput, BookingUncheckedUpdateWithoutResidentInput>
    create: XOR<BookingCreateWithoutResidentInput, BookingUncheckedCreateWithoutResidentInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutResidentInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutResidentInput, BookingUncheckedUpdateWithoutResidentInput>
  }

  export type BookingUpdateManyWithWhereWithoutResidentInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutResidentInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutResidentInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutResidentInput, ReviewUncheckedUpdateWithoutResidentInput>
    create: XOR<ReviewCreateWithoutResidentInput, ReviewUncheckedCreateWithoutResidentInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutResidentInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutResidentInput, ReviewUncheckedUpdateWithoutResidentInput>
  }

  export type ReviewUpdateManyWithWhereWithoutResidentInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutResidentInput>
  }

  export type ResidentCreateWithoutInfoInput = {
    residentName: string
    createdAt?: Date | string
    facilities?: ResidentFacilitiesCreateNestedOneWithoutResidentInput
    owner?: ResidentOwnerCreateNestedOneWithoutResidentInput
    address?: ResidentAddressCreateNestedOneWithoutResidentInput
    bookings?: BookingCreateNestedManyWithoutResidentInput
    reviews?: ReviewCreateNestedManyWithoutResidentInput
  }

  export type ResidentUncheckedCreateWithoutInfoInput = {
    id?: number
    residentName: string
    createdAt?: Date | string
    facilities?: ResidentFacilitiesUncheckedCreateNestedOneWithoutResidentInput
    owner?: ResidentOwnerUncheckedCreateNestedOneWithoutResidentInput
    address?: ResidentAddressUncheckedCreateNestedOneWithoutResidentInput
    bookings?: BookingUncheckedCreateNestedManyWithoutResidentInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutResidentInput
  }

  export type ResidentCreateOrConnectWithoutInfoInput = {
    where: ResidentWhereUniqueInput
    create: XOR<ResidentCreateWithoutInfoInput, ResidentUncheckedCreateWithoutInfoInput>
  }

  export type ResidentUpsertWithoutInfoInput = {
    update: XOR<ResidentUpdateWithoutInfoInput, ResidentUncheckedUpdateWithoutInfoInput>
    create: XOR<ResidentCreateWithoutInfoInput, ResidentUncheckedCreateWithoutInfoInput>
    where?: ResidentWhereInput
  }

  export type ResidentUpdateToOneWithWhereWithoutInfoInput = {
    where?: ResidentWhereInput
    data: XOR<ResidentUpdateWithoutInfoInput, ResidentUncheckedUpdateWithoutInfoInput>
  }

  export type ResidentUpdateWithoutInfoInput = {
    residentName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facilities?: ResidentFacilitiesUpdateOneWithoutResidentNestedInput
    owner?: ResidentOwnerUpdateOneWithoutResidentNestedInput
    address?: ResidentAddressUpdateOneWithoutResidentNestedInput
    bookings?: BookingUpdateManyWithoutResidentNestedInput
    reviews?: ReviewUpdateManyWithoutResidentNestedInput
  }

  export type ResidentUncheckedUpdateWithoutInfoInput = {
    id?: IntFieldUpdateOperationsInput | number
    residentName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facilities?: ResidentFacilitiesUncheckedUpdateOneWithoutResidentNestedInput
    owner?: ResidentOwnerUncheckedUpdateOneWithoutResidentNestedInput
    address?: ResidentAddressUncheckedUpdateOneWithoutResidentNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutResidentNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutResidentNestedInput
  }

  export type ResidentCreateWithoutFacilitiesInput = {
    residentName: string
    createdAt?: Date | string
    info?: ResidentInfoCreateNestedOneWithoutResidentInput
    owner?: ResidentOwnerCreateNestedOneWithoutResidentInput
    address?: ResidentAddressCreateNestedOneWithoutResidentInput
    bookings?: BookingCreateNestedManyWithoutResidentInput
    reviews?: ReviewCreateNestedManyWithoutResidentInput
  }

  export type ResidentUncheckedCreateWithoutFacilitiesInput = {
    id?: number
    residentName: string
    createdAt?: Date | string
    info?: ResidentInfoUncheckedCreateNestedOneWithoutResidentInput
    owner?: ResidentOwnerUncheckedCreateNestedOneWithoutResidentInput
    address?: ResidentAddressUncheckedCreateNestedOneWithoutResidentInput
    bookings?: BookingUncheckedCreateNestedManyWithoutResidentInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutResidentInput
  }

  export type ResidentCreateOrConnectWithoutFacilitiesInput = {
    where: ResidentWhereUniqueInput
    create: XOR<ResidentCreateWithoutFacilitiesInput, ResidentUncheckedCreateWithoutFacilitiesInput>
  }

  export type ResidentUpsertWithoutFacilitiesInput = {
    update: XOR<ResidentUpdateWithoutFacilitiesInput, ResidentUncheckedUpdateWithoutFacilitiesInput>
    create: XOR<ResidentCreateWithoutFacilitiesInput, ResidentUncheckedCreateWithoutFacilitiesInput>
    where?: ResidentWhereInput
  }

  export type ResidentUpdateToOneWithWhereWithoutFacilitiesInput = {
    where?: ResidentWhereInput
    data: XOR<ResidentUpdateWithoutFacilitiesInput, ResidentUncheckedUpdateWithoutFacilitiesInput>
  }

  export type ResidentUpdateWithoutFacilitiesInput = {
    residentName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    info?: ResidentInfoUpdateOneWithoutResidentNestedInput
    owner?: ResidentOwnerUpdateOneWithoutResidentNestedInput
    address?: ResidentAddressUpdateOneWithoutResidentNestedInput
    bookings?: BookingUpdateManyWithoutResidentNestedInput
    reviews?: ReviewUpdateManyWithoutResidentNestedInput
  }

  export type ResidentUncheckedUpdateWithoutFacilitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    residentName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    info?: ResidentInfoUncheckedUpdateOneWithoutResidentNestedInput
    owner?: ResidentOwnerUncheckedUpdateOneWithoutResidentNestedInput
    address?: ResidentAddressUncheckedUpdateOneWithoutResidentNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutResidentNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutResidentNestedInput
  }

  export type ResidentCreateWithoutOwnerInput = {
    residentName: string
    createdAt?: Date | string
    info?: ResidentInfoCreateNestedOneWithoutResidentInput
    facilities?: ResidentFacilitiesCreateNestedOneWithoutResidentInput
    address?: ResidentAddressCreateNestedOneWithoutResidentInput
    bookings?: BookingCreateNestedManyWithoutResidentInput
    reviews?: ReviewCreateNestedManyWithoutResidentInput
  }

  export type ResidentUncheckedCreateWithoutOwnerInput = {
    id?: number
    residentName: string
    createdAt?: Date | string
    info?: ResidentInfoUncheckedCreateNestedOneWithoutResidentInput
    facilities?: ResidentFacilitiesUncheckedCreateNestedOneWithoutResidentInput
    address?: ResidentAddressUncheckedCreateNestedOneWithoutResidentInput
    bookings?: BookingUncheckedCreateNestedManyWithoutResidentInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutResidentInput
  }

  export type ResidentCreateOrConnectWithoutOwnerInput = {
    where: ResidentWhereUniqueInput
    create: XOR<ResidentCreateWithoutOwnerInput, ResidentUncheckedCreateWithoutOwnerInput>
  }

  export type ResidentUpsertWithoutOwnerInput = {
    update: XOR<ResidentUpdateWithoutOwnerInput, ResidentUncheckedUpdateWithoutOwnerInput>
    create: XOR<ResidentCreateWithoutOwnerInput, ResidentUncheckedCreateWithoutOwnerInput>
    where?: ResidentWhereInput
  }

  export type ResidentUpdateToOneWithWhereWithoutOwnerInput = {
    where?: ResidentWhereInput
    data: XOR<ResidentUpdateWithoutOwnerInput, ResidentUncheckedUpdateWithoutOwnerInput>
  }

  export type ResidentUpdateWithoutOwnerInput = {
    residentName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    info?: ResidentInfoUpdateOneWithoutResidentNestedInput
    facilities?: ResidentFacilitiesUpdateOneWithoutResidentNestedInput
    address?: ResidentAddressUpdateOneWithoutResidentNestedInput
    bookings?: BookingUpdateManyWithoutResidentNestedInput
    reviews?: ReviewUpdateManyWithoutResidentNestedInput
  }

  export type ResidentUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    residentName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    info?: ResidentInfoUncheckedUpdateOneWithoutResidentNestedInput
    facilities?: ResidentFacilitiesUncheckedUpdateOneWithoutResidentNestedInput
    address?: ResidentAddressUncheckedUpdateOneWithoutResidentNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutResidentNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutResidentNestedInput
  }

  export type ResidentCreateWithoutAddressInput = {
    residentName: string
    createdAt?: Date | string
    info?: ResidentInfoCreateNestedOneWithoutResidentInput
    facilities?: ResidentFacilitiesCreateNestedOneWithoutResidentInput
    owner?: ResidentOwnerCreateNestedOneWithoutResidentInput
    bookings?: BookingCreateNestedManyWithoutResidentInput
    reviews?: ReviewCreateNestedManyWithoutResidentInput
  }

  export type ResidentUncheckedCreateWithoutAddressInput = {
    id?: number
    residentName: string
    createdAt?: Date | string
    info?: ResidentInfoUncheckedCreateNestedOneWithoutResidentInput
    facilities?: ResidentFacilitiesUncheckedCreateNestedOneWithoutResidentInput
    owner?: ResidentOwnerUncheckedCreateNestedOneWithoutResidentInput
    bookings?: BookingUncheckedCreateNestedManyWithoutResidentInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutResidentInput
  }

  export type ResidentCreateOrConnectWithoutAddressInput = {
    where: ResidentWhereUniqueInput
    create: XOR<ResidentCreateWithoutAddressInput, ResidentUncheckedCreateWithoutAddressInput>
  }

  export type ResidentUpsertWithoutAddressInput = {
    update: XOR<ResidentUpdateWithoutAddressInput, ResidentUncheckedUpdateWithoutAddressInput>
    create: XOR<ResidentCreateWithoutAddressInput, ResidentUncheckedCreateWithoutAddressInput>
    where?: ResidentWhereInput
  }

  export type ResidentUpdateToOneWithWhereWithoutAddressInput = {
    where?: ResidentWhereInput
    data: XOR<ResidentUpdateWithoutAddressInput, ResidentUncheckedUpdateWithoutAddressInput>
  }

  export type ResidentUpdateWithoutAddressInput = {
    residentName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    info?: ResidentInfoUpdateOneWithoutResidentNestedInput
    facilities?: ResidentFacilitiesUpdateOneWithoutResidentNestedInput
    owner?: ResidentOwnerUpdateOneWithoutResidentNestedInput
    bookings?: BookingUpdateManyWithoutResidentNestedInput
    reviews?: ReviewUpdateManyWithoutResidentNestedInput
  }

  export type ResidentUncheckedUpdateWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    residentName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    info?: ResidentInfoUncheckedUpdateOneWithoutResidentNestedInput
    facilities?: ResidentFacilitiesUncheckedUpdateOneWithoutResidentNestedInput
    owner?: ResidentOwnerUncheckedUpdateOneWithoutResidentNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutResidentNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutResidentNestedInput
  }

  export type ResidentCreateWithoutBookingsInput = {
    residentName: string
    createdAt?: Date | string
    info?: ResidentInfoCreateNestedOneWithoutResidentInput
    facilities?: ResidentFacilitiesCreateNestedOneWithoutResidentInput
    owner?: ResidentOwnerCreateNestedOneWithoutResidentInput
    address?: ResidentAddressCreateNestedOneWithoutResidentInput
    reviews?: ReviewCreateNestedManyWithoutResidentInput
  }

  export type ResidentUncheckedCreateWithoutBookingsInput = {
    id?: number
    residentName: string
    createdAt?: Date | string
    info?: ResidentInfoUncheckedCreateNestedOneWithoutResidentInput
    facilities?: ResidentFacilitiesUncheckedCreateNestedOneWithoutResidentInput
    owner?: ResidentOwnerUncheckedCreateNestedOneWithoutResidentInput
    address?: ResidentAddressUncheckedCreateNestedOneWithoutResidentInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutResidentInput
  }

  export type ResidentCreateOrConnectWithoutBookingsInput = {
    where: ResidentWhereUniqueInput
    create: XOR<ResidentCreateWithoutBookingsInput, ResidentUncheckedCreateWithoutBookingsInput>
  }

  export type UserCreateWithoutBookingsInput = {
    firstName: string
    lastName: string
    phoneNumber: string
    email: string
    password: string
    profilePicture?: string | null
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBookingsInput = {
    id?: number
    firstName: string
    lastName: string
    phoneNumber: string
    email: string
    password: string
    profilePicture?: string | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
  }

  export type ResidentUpsertWithoutBookingsInput = {
    update: XOR<ResidentUpdateWithoutBookingsInput, ResidentUncheckedUpdateWithoutBookingsInput>
    create: XOR<ResidentCreateWithoutBookingsInput, ResidentUncheckedCreateWithoutBookingsInput>
    where?: ResidentWhereInput
  }

  export type ResidentUpdateToOneWithWhereWithoutBookingsInput = {
    where?: ResidentWhereInput
    data: XOR<ResidentUpdateWithoutBookingsInput, ResidentUncheckedUpdateWithoutBookingsInput>
  }

  export type ResidentUpdateWithoutBookingsInput = {
    residentName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    info?: ResidentInfoUpdateOneWithoutResidentNestedInput
    facilities?: ResidentFacilitiesUpdateOneWithoutResidentNestedInput
    owner?: ResidentOwnerUpdateOneWithoutResidentNestedInput
    address?: ResidentAddressUpdateOneWithoutResidentNestedInput
    reviews?: ReviewUpdateManyWithoutResidentNestedInput
  }

  export type ResidentUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    residentName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    info?: ResidentInfoUncheckedUpdateOneWithoutResidentNestedInput
    facilities?: ResidentFacilitiesUncheckedUpdateOneWithoutResidentNestedInput
    owner?: ResidentOwnerUncheckedUpdateOneWithoutResidentNestedInput
    address?: ResidentAddressUncheckedUpdateOneWithoutResidentNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutResidentNestedInput
  }

  export type UserUpsertWithoutBookingsInput = {
    update: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateWithoutBookingsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ResidentCreateWithoutReviewsInput = {
    residentName: string
    createdAt?: Date | string
    info?: ResidentInfoCreateNestedOneWithoutResidentInput
    facilities?: ResidentFacilitiesCreateNestedOneWithoutResidentInput
    owner?: ResidentOwnerCreateNestedOneWithoutResidentInput
    address?: ResidentAddressCreateNestedOneWithoutResidentInput
    bookings?: BookingCreateNestedManyWithoutResidentInput
  }

  export type ResidentUncheckedCreateWithoutReviewsInput = {
    id?: number
    residentName: string
    createdAt?: Date | string
    info?: ResidentInfoUncheckedCreateNestedOneWithoutResidentInput
    facilities?: ResidentFacilitiesUncheckedCreateNestedOneWithoutResidentInput
    owner?: ResidentOwnerUncheckedCreateNestedOneWithoutResidentInput
    address?: ResidentAddressUncheckedCreateNestedOneWithoutResidentInput
    bookings?: BookingUncheckedCreateNestedManyWithoutResidentInput
  }

  export type ResidentCreateOrConnectWithoutReviewsInput = {
    where: ResidentWhereUniqueInput
    create: XOR<ResidentCreateWithoutReviewsInput, ResidentUncheckedCreateWithoutReviewsInput>
  }

  export type UserCreateWithoutReviewsInput = {
    firstName: string
    lastName: string
    phoneNumber: string
    email: string
    password: string
    profilePicture?: string | null
    bookings?: BookingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: number
    firstName: string
    lastName: string
    phoneNumber: string
    email: string
    password: string
    profilePicture?: string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type ResidentUpsertWithoutReviewsInput = {
    update: XOR<ResidentUpdateWithoutReviewsInput, ResidentUncheckedUpdateWithoutReviewsInput>
    create: XOR<ResidentCreateWithoutReviewsInput, ResidentUncheckedCreateWithoutReviewsInput>
    where?: ResidentWhereInput
  }

  export type ResidentUpdateToOneWithWhereWithoutReviewsInput = {
    where?: ResidentWhereInput
    data: XOR<ResidentUpdateWithoutReviewsInput, ResidentUncheckedUpdateWithoutReviewsInput>
  }

  export type ResidentUpdateWithoutReviewsInput = {
    residentName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    info?: ResidentInfoUpdateOneWithoutResidentNestedInput
    facilities?: ResidentFacilitiesUpdateOneWithoutResidentNestedInput
    owner?: ResidentOwnerUpdateOneWithoutResidentNestedInput
    address?: ResidentAddressUpdateOneWithoutResidentNestedInput
    bookings?: BookingUpdateManyWithoutResidentNestedInput
  }

  export type ResidentUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    residentName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    info?: ResidentInfoUncheckedUpdateOneWithoutResidentNestedInput
    facilities?: ResidentFacilitiesUncheckedUpdateOneWithoutResidentNestedInput
    owner?: ResidentOwnerUncheckedUpdateOneWithoutResidentNestedInput
    address?: ResidentAddressUncheckedUpdateOneWithoutResidentNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutResidentNestedInput
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
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookingCreateManyUserInput = {
    id?: number
    residentId: number
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    roomType: string
    bedType: string
    checkInDate: Date | string
    checkOutDate: Date | string
  }

  export type ReviewCreateManyUserInput = {
    id?: number
    residentId: number
    cleanlinessRating: number
    serviceRating: number
    locationRating: number
    facilitiesRating: number
    overallRating: number
    message: string
    guestStatus: string
    stayPeriod: string
    createdAt?: Date | string
  }

  export type BookingUpdateWithoutUserInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    roomType?: StringFieldUpdateOperationsInput | string
    bedType?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resident?: ResidentUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    residentId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    roomType?: StringFieldUpdateOperationsInput | string
    bedType?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    residentId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    roomType?: StringFieldUpdateOperationsInput | string
    bedType?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutUserInput = {
    cleanlinessRating?: FloatFieldUpdateOperationsInput | number
    serviceRating?: FloatFieldUpdateOperationsInput | number
    locationRating?: FloatFieldUpdateOperationsInput | number
    facilitiesRating?: FloatFieldUpdateOperationsInput | number
    overallRating?: FloatFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    guestStatus?: StringFieldUpdateOperationsInput | string
    stayPeriod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resident?: ResidentUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    residentId?: IntFieldUpdateOperationsInput | number
    cleanlinessRating?: FloatFieldUpdateOperationsInput | number
    serviceRating?: FloatFieldUpdateOperationsInput | number
    locationRating?: FloatFieldUpdateOperationsInput | number
    facilitiesRating?: FloatFieldUpdateOperationsInput | number
    overallRating?: FloatFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    guestStatus?: StringFieldUpdateOperationsInput | string
    stayPeriod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    residentId?: IntFieldUpdateOperationsInput | number
    cleanlinessRating?: FloatFieldUpdateOperationsInput | number
    serviceRating?: FloatFieldUpdateOperationsInput | number
    locationRating?: FloatFieldUpdateOperationsInput | number
    facilitiesRating?: FloatFieldUpdateOperationsInput | number
    overallRating?: FloatFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    guestStatus?: StringFieldUpdateOperationsInput | string
    stayPeriod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyResidentInput = {
    id?: number
    userId: number
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    roomType: string
    bedType: string
    checkInDate: Date | string
    checkOutDate: Date | string
  }

  export type ReviewCreateManyResidentInput = {
    id?: number
    userId: number
    cleanlinessRating: number
    serviceRating: number
    locationRating: number
    facilitiesRating: number
    overallRating: number
    message: string
    guestStatus: string
    stayPeriod: string
    createdAt?: Date | string
  }

  export type BookingUpdateWithoutResidentInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    roomType?: StringFieldUpdateOperationsInput | string
    bedType?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutResidentInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    roomType?: StringFieldUpdateOperationsInput | string
    bedType?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutResidentInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    roomType?: StringFieldUpdateOperationsInput | string
    bedType?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutResidentInput = {
    cleanlinessRating?: FloatFieldUpdateOperationsInput | number
    serviceRating?: FloatFieldUpdateOperationsInput | number
    locationRating?: FloatFieldUpdateOperationsInput | number
    facilitiesRating?: FloatFieldUpdateOperationsInput | number
    overallRating?: FloatFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    guestStatus?: StringFieldUpdateOperationsInput | string
    stayPeriod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutResidentInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    cleanlinessRating?: FloatFieldUpdateOperationsInput | number
    serviceRating?: FloatFieldUpdateOperationsInput | number
    locationRating?: FloatFieldUpdateOperationsInput | number
    facilitiesRating?: FloatFieldUpdateOperationsInput | number
    overallRating?: FloatFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    guestStatus?: StringFieldUpdateOperationsInput | string
    stayPeriod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutResidentInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    cleanlinessRating?: FloatFieldUpdateOperationsInput | number
    serviceRating?: FloatFieldUpdateOperationsInput | number
    locationRating?: FloatFieldUpdateOperationsInput | number
    facilitiesRating?: FloatFieldUpdateOperationsInput | number
    overallRating?: FloatFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    guestStatus?: StringFieldUpdateOperationsInput | string
    stayPeriod?: StringFieldUpdateOperationsInput | string
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