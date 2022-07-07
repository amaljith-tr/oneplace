/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CandidateWhereUniqueInput } from "../../candidate/base/CandidateWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class CandidateUpdateManyWithoutUsersInput {
  @Field(() => [CandidateWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CandidateWhereUniqueInput],
  })
  connect?: Array<CandidateWhereUniqueInput>;

  @Field(() => [CandidateWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CandidateWhereUniqueInput],
  })
  disconnect?: Array<CandidateWhereUniqueInput>;

  @Field(() => [CandidateWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CandidateWhereUniqueInput],
  })
  set?: Array<CandidateWhereUniqueInput>;
}
export { CandidateUpdateManyWithoutUsersInput };
