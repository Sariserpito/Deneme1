import * as graphql from "@nestjs/graphql";
import { ChoiceResolverBase } from "./base/choice.resolver.base";
import { Choice } from "./base/Choice";
import { ChoiceService } from "./choice.service";

@graphql.Resolver(() => Choice)
export class ChoiceResolver extends ChoiceResolverBase {
  constructor(protected readonly service: ChoiceService) {
    super(service);
  }
}
