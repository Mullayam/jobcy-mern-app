export const queries = {
    hello: () => "Hello World!",
    sayHello: (parent: any, { name }: { name: string }) => {
        return "Hello " + name
    }

}